async function loadRecentlyOpenedPulls(repo, startDate, progressCallback) {
  async function fetchPage(page) {
    let pagePulls = [];
    if (progressCallback) {
      progressCallback(
        `Loading recently opened pulls: repo=${repo}, page=${page}`,
      );
    }

    await fetch(
      `https://api.github.com/repos/${repo}/pulls?sort=updated&direction=desc&state=opened&per_page=100&page=${page}`,
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((pull) => {
          const updatedAt = new Date(pull.updated_at);
          if (updatedAt >= startDate) {
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

function convertPull(pull) {
  return {
    number: pull.number,
    title: pull.title,
    url: pull.html_url,
    author: pull.user.login,
    updatedAt: pull.updated_at,
  };
}

export const github = {
  loadRecentlyOpenedPulls,
};
