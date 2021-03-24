import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://joeydehnert.ghost.io',
  key: 'c87a900be098ea0deb27785d08',
  version: "v3"
});

export async function getPageFromSlug(slug) {
  return await api.pages
    .read({
      slug: slug
    })
    .catch(err => {
      console.error(err);
    });
}
