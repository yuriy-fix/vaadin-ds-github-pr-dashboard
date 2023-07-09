import startOfToday from "date-fns/startOfToday";

class Storage {
  save(githubData) {
    githubData.hash = generateHash();
    const githubDataJson = JSON.stringify(githubData);
    localStorage.setItem("vdg-github-data", githubDataJson);
  }

  load() {
    const githubDataJson = localStorage.getItem("vdg-github-data");
    if (githubDataJson) {
      const githubData = JSON.parse(githubDataJson);
      if (githubData.hash === generateHash()) {
        return githubData;
      }
    }
    return null;
  }
}

function generateHash() {
  return startOfToday().getTime();
}

export const storage = new Storage();
