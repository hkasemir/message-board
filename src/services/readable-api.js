const SERVER_URI = 'http://localhost:3001';
const headers = {
  'Accept': 'application/json',
  'Authorization': 'messageboard!!!'
};

async function get(url) {
  const result = await fetch(SERVER_URI + url, {headers});
  return result.json();
}

async function post(url, data) {
  const result = await fetch(SERVER_URI + url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify(data)
  });
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
  },
  async addNewPost(postForm) {
    const newPost = post('/posts', postForm);
    return newPost;
  },
  async fetchPostComments(postId) {
    const comments = await get(`/posts/${postId}/comments`);
    return comments;
  }
};
