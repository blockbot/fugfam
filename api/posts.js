import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://joeydehnert.ghost.io',
  key: 'c87a900be098ea0deb27785d08',
  version: "v3",
  fun: "stuff"
});

export async function getPostsFromTag(tag) {
  return await api.posts
    .browse({
      limit: "6",
      filter: `tag:${tag}`,
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getFlogPosts() {
  return await api.posts
    .browse({
      limit: "6",
      filter: "tag:the-flog",
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getClogPosts() {
  return await api.posts
    .browse({
      limit: "6",
      filter: "tag:the-clog",
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getFanMail() {
  return await api.posts
    .browse({
      limit: "6",
      filter: "tag:fanmail",
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: "tags"
    })
    .catch(err => {
      console.error(err);
    });
}
