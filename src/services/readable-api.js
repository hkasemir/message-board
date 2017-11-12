const SERVER_URI = 'http://localhost:3001';
const headers = {
  'Authorization': 'messageboard!!!'
};

async function get(url) {
  const result = await fetch(SERVER_URI + url, {headers});
  return result.json();
}

export default {
  async fetchCategories() {
    const {categories} = await get('/categories');
    return categories;
  },
  async fetchPosts() {
    const posts = await get('/posts');
    return posts;
  }
};
