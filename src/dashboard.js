import { css, html, LitElement } from "lit";
import startOfToday from "date-fns/startOfToday";
import subDays from "date-fns/subDays";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import "@vaadin/button";
import "@vaadin/date-picker";
import "@vaadin/grid";
import { columnBodyRenderer } from "@vaadin/grid/lit";
import "@vaadin/tooltip";
import { icons } from "./util/icons";
import { github } from "./util/github";
import { storage } from "./util/storage";
import { lumoTheme } from "./util/theme";

export class Dashboard extends LitElement {
  static styles = [
    lumoTheme,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background: var(--lumo-shade-10pct);
        box-sizing: border-box;
      }

      h1 {
        font-size: var(--lumo-font-size-xxl);
      }

      h2 {
        font-size: var(--lumo-font-size-xl);
      }

      .dashboard {
        --dashboard-panel-background: var(--lumo-base-color);
        min-height: 100vh;
      }

      .dashboard[theme="dark"] {
        --dashboard-panel-background: var(--lumo-tint-10pct);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: var(--lumo-space-s) var(--lumo-space-xl);
        background: var(--dashboard-panel-background);
        box-shadow: var(--lumo-box-shadow-s);
      }

      .header vaadin-date-picker {
        padding: 0;
      }

      .header .help-icon {
        display: inline-block;
        color: var(--lumo-contrast-80pct);
      }

      .header svg {
        vertical-align: bottom;
      }

      .main {
        display: flex;
        flex-direction: column;
        gap: var(--lumo-space-xl);
        padding: var(--lumo-space-xl);
      }

      .section.flex {
        display: flex;
        flex-wrap: wrap;
        gap: var(--lumo-space-xl);
      }

      .section.grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        gap: var(--lumo-space-xl);
      }

      @media (max-width: 600px) {
        .section.grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: var(--lumo-space-xl);
        }
      }

      .panel {
        min-width: 200px;
        display: flex;
        flex-direction: column;
      }

      .panel > h2 {
        margin-bottom: var(--lumo-space-m);
      }

      .panel > .card {
        background: var(--dashboard-panel-background);
        box-shadow: var(--lumo-box-shadow-s);
        border-radius: var(--lumo-border-radius-l);
      }

      .panel.loading .title {
        display: flex;
        align-items: center;
        font-weight: bold;
      }

      .panel.loading .progress {
        padding-left: calc(var(--lumo-space-s) + 20px);
        color: var(--lumo-secondary-text-color);
        white-space: pre;
      }

      .panel.loading .spinner {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
        margin-right: var(--lumo-space-s);
      }

      .panel.loading .spinner svg {
        position: absolute;
        animation: spinner 1.2s linear infinite;
      }

      @keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .panel.stats .card {
        padding: var(--lumo-space-m);
      }

      .panel.stats .title {
        font-weight: bold;
      }

      .panel.stats .list {
        display: flex;
        margin-top: var(--lumo-space-m);
        gap: var(--lumo-space-m);
      }

      .panel.stats .stat .value {
        font-size: var(--lumo-font-size-xl);
      }

      .panel.stats .stat .label {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      .panel.issues .card {
        padding-top: var(--lumo-space-m);
        padding-bottom: var(--lumo-space-s);
      }

      .panel.issues vaadin-grid {
        --lumo-base-color: transparent;
        height: 300px;
      }

      .panel.issues vaadin-grid::part(header-cell) {
        display: none;
      }

      .panel.issues vaadin-grid::part(body-cell first-column-cell) {
        padding-left: var(--lumo-space-s);
      }
    `,
  ];

  static properties = {
    loading: { type: Boolean },
    loadingProgress: { type: String },
    dataStart: { type: Date },
    rangeStart: { type: Date },
    githubData: { type: Object },
    dashboard: { type: Object },
    settings: { type: Object },
  };

  constructor() {
    super();
    this.loading = false;
    this.loadingProgress = "";
    this.dataStart = subDays(startOfToday(), 30);
    this.rangeStart = this.dataStart;
    this.settings = storage.loadSettings();
  }

  async firstUpdated() {
    this.githubData = storage.loadGithubData();
    if (!this.githubData) {
      await this.refreshData();
    } else {
      this.refreshDashboard();
    }
  }

  render() {
    return html`
      <div class="dashboard" theme="${this.settings.theme}">
        <div class="header">
          <h1>Vaadin DS PRs Github Dashboard</h1>
          <div class="actions">
            <vaadin-button
              theme="tertiary small"
              @click="${this.handleToggleTheme}"
            >
              ${icons.moon()}
            </vaadin-button>
            <vaadin-date-picker
              label="Show PRs updated since"
              theme="small"
              .min="${dateFnsFormat(this.dataStart, "yyyy-MM-dd")}"
              .max="${dateFnsFormat(new Date(), "yyyy-MM-dd")}"
              .value="${dateFnsFormat(this.rangeStart, "yyyy-MM-dd")}"
              @change="${this.handleRangeStartChange}"
            ></vaadin-date-picker>

            <vaadin-button theme="small" @click="${this.refreshData}"
              >Refresh data
            </vaadin-button>
            <span id="help-icon" class="help-icon"> ${icons.help()} </span>
            <vaadin-tooltip
              for="help-icon"
              text="Github data is updated once per day and then cached in local storage. 'Refresh data' forces an update. Data contains pulls updated from the last 30 days, which is the maximum time range that can be configured."
            ></vaadin-tooltip>
          </div>
        </div>
        <div class="main">
          ${this.loading
            ? html` <div class="section flex">
                <div class="panel loading">
                  <div class="title">
                    <div class="spinner">${icons.spinner()}</div>
                    <span>Loading Github Data</span>
                  </div>
                  <div class="progress">${this.loadingProgress}</div>
                </div>
              </div>`
            : null}
          ${this.dashboard
            ? html`
                <div class="section flex">
                  ${this.renderStats("Contributions", [
                    {
                      label: "Contributions",
                      value: this.dashboard.contributions.length,
                    },
                  ])}
                </div>

                <div class="section grid">
                  <div class="panel issues">
                    <h2>Contribution PRs</h2>
                    <div class="card">
                      ${this.renderGrid(this.dashboard.contributions, true)}
                    </div>
                  </div>
                </div>
              `
            : null}
        </div>
      </div>
    `;
  }

  renderStats(title, values) {
    return html`
      <div class="panel stats">
        <div class="card">
          <div class="title">${title}</div>
          <div class="list">
            ${values.map(
              (value) => html`
                <div class="stat">
                  <span class="value">${value.value}</span>
                  <span class="label">${value.label}</span>
                </div>
              `,
            )}
          </div>
        </div>
      </div>
    `;
  }

  renderGrid(issues, showAuthor = false) {
    return html`
      <vaadin-grid .items="${issues}" theme="no-border">
        <vaadin-grid-column
          width="250px"
          flex-grow="0"
          ${columnBodyRenderer(
            (issue) => html`
              <span>${dateFnsFormat(new Date(issue.updatedAt), "MMM do 'at' H:m")}</span>
            `,
          )}></vaadin-grid-column>
        <vaadin-grid-column path="title"></vaadin-grid-column>
        ${showAuthor
          ? html` <vaadin-grid-column
              width="200px"
              flex-grow="0"
              ${columnBodyRenderer(
                (issue) =>
                  html`<span style="color: var(--lumo-secondary-text-color)"
                    >@${issue.author}</span
                  >`,
              )}
            ></vaadin-grid-column>`
          : null}
        <vaadin-grid-column
          width="60px"
          flex-grow="0"
          ${columnBodyRenderer(
            (issue) => html`
              <a href="${issue.url}" target="_blank">
                ${icons.externalLink()}
              </a>
            `,
          )}
        ></vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  handleToggleTheme() {
    const newTheme = this.settings.theme === "dark" ? "light" : "dark";
    this.settings = { ...this.settings, theme: newTheme };
    storage.saveSettings(this.settings);
  }

  handleRangeStartChange(e) {
    this.rangeStart = dateFnsParse(e.target.value, "yyyy-MM-dd", new Date());
    this.refreshDashboard();
  }

  async refreshData() {
    this.loading = true;
    this.loadingProgress = "";
    this.dashboard = null;
    this.githubData = await refreshGithubData(this.dataStart, (progress) => {
      this.loadingProgress += progress + "\n";
    });
    storage.saveGithubData(this.githubData);
    this.refreshDashboard();
    this.loading = false;
  }

  refreshDashboard() {
    this.dashboard = generateDashboardData(this.githubData, this.rangeStart);
  }
}

customElements.define("vgd-dashboard", Dashboard);

async function refreshGithubData(startDate, progressCallback) {
  // TODO: Extract to config
  const repos = ["vaadin/web-components", "vaadin/flow-components"];

  let pulls = [];
  for (const repo of repos) {
    pulls = pulls.concat(
      await github.loadRecentlyOpenedPulls(repo, startDate, progressCallback),
    );
  }
  pulls.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  const githubData = {
    startDate: dateFnsFormat(startDate, "yyyy-MM-dd"),
    pulls,
  };

  return githubData;
}

function generateDashboardData(githubData, rangeStart) {
  // TODO: Extract to config
  const contributors = [
    "DiegoCardoso",
    "sissbruecker",
    "tomivirkki",
    "rolfsmeds",
    "vursen",
    "web-padawan",
    "yuriy-fix",
    "ugur-vaadin",
    "vaadin-bot",
  ];

  const pulls = [];
  const contributions = [];

  githubData.pulls.forEach((pull) => {
    const isInRange = new Date(pull.updatedAt) >= rangeStart;

    if (!isInRange) {
      return;
    }

    pulls.push(pull);

    if (!contributors.includes(pull.author)) {
      contributions.push(pull);
    }
  });

  return {
    githubData,
    pulls,
    contributions,
  };
}
