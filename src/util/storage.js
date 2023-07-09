import startOfToday from "date-fns/startOfToday";

class Storage {
  saveGithubData(githubData) {
    githubData.hash = generateHash();
    const githubDataJson = JSON.stringify(githubData);
    localStorage.setItem("vdg-github-data", githubDataJson);
  }

  loadGithubData() {
    const githubDataJson = localStorage.getItem("vdg-github-data");
    if (githubDataJson) {
      const githubData = JSON.parse(githubDataJson);
      if (githubData.hash === generateHash()) {
        return githubData;
      }
    }
    return null;
  }

  saveSettings(settings) {
    const settingsJson = JSON.stringify(settings);
    localStorage.setItem("vdg-settings", settingsJson);
  }

  loadSettings() {
    const settingsJson = localStorage.getItem("vdg-settings");
    if (settingsJson) {
      return JSON.parse(settingsJson);
    }
    return {
      theme: "light",
    };
  }
}

function generateHash() {
  return startOfToday().getTime();
}

export const storage = new Storage();
