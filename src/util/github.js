async function loadRecentlyMergedPulls(repo, startDate, progressCallback) {
  async function fetchPage(page) {
    let pagePulls = [];
    if (progressCallback) {
      progressCallback(
        `Loading recently merged pulls: repo=${repo}, page=${page}`,
      );
    }
    await fetch(
      `https://api.github.com/repos/${repo}/pulls?sort=updated&direction=desc&state=closed&per_page=100&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((pull) => {
          const mergedAt = new Date(pull.merged_at);
          if (mergedAt >= startDate) {
            pagePulls.push(convertPull(pull));
          }
        });
      });
    return pagePulls;
  }

  let page = 1;
  let pulls = [];

  // Fetch pages until we get an empty page
  while (true) {
    const pagePulls = await fetchPage(page);
    if (pagePulls.length === 0) {
      break;
    }
    pulls = pulls.concat(pagePulls);
    page++;
  }

  return pulls;
}

async function loadRecentlyClosedIssues(
  repo,
  startDate,
  labels,
  progressCallback,
) {
  async function fetchPage(page) {
    let pageIssues = [];
    if (progressCallback) {
      progressCallback(
        `Loading recently closed issues: repo=${repo}, labels=${labels}, page=${page}`,
      );
    }
    await fetch(
      `https://api.github.com/repos/${repo}/issues?sort=updated&direction=desc&state=closed&labels=${labels}&per_page=100&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((issue) => {
          const closedAt = new Date(issue.closed_at);
          if (closedAt >= startDate) {
            pageIssues.push(convertIssue(issue));
          }
        });
      });
    return pageIssues;
  }

  let page = 1;
  let issues = [];

  // Fetch pages until we get an empty page
  while (true) {
    const pageIssues = await fetchPage(page);
    if (pageIssues.length === 0) {
      break;
    }
    issues = issues.concat(pageIssues);
    page++;
  }

  return issues;
}

async function loadOpenIssues(repo, labels, progressCallback) {
  async function fetchPage(page) {
    let pageIssues = [];
    if (progressCallback) {
      progressCallback(
        `Loading open issues: repo=${repo}, labels=${labels}, page=${page}`,
      );
    }
    await fetch(
      `https://api.github.com/repos/${repo}/issues?sort=updated&direction=desc&state=open&labels=${labels}&per_page=100&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((issue) => {
          pageIssues.push(convertIssue(issue));
        });
      });
    return pageIssues;
  }

  let page = 1;
  let issues = [];

  // Fetch pages until we get an empty page
  while (true) {
    const pageIssues = await fetchPage(page);
    if (pageIssues.length === 0) {
      break;
    }
    issues = issues.concat(pageIssues);
    page++;
  }

  return issues;
}

function convertPull(pull) {
  return {
    number: pull.number,
    title: pull.title,
    url: pull.html_url,
    author: pull.user.login,
    mergedAt: pull.merged_at,
  };
}

function convertIssue(issue) {
  return {
    number: issue.number,
    title: issue.title,
    url: issue.html_url,
    closedAt: issue.closed_at,
  };
}

export const github = {
  loadRecentlyMergedPulls,
  loadRecentlyClosedIssues,
  loadOpenIssues,
};
