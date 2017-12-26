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

async function put(url, data) {
  const result = await fetch(SERVER_URI + url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    method: 'put',
    body: JSON.stringify(data)
  });
  return result.json();
}

async function deleteRequest(url) {
  const result = await fetch(SERVER_URI + url, {
    headers,
    method: 'delete'
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
    const newPost = await post('/posts', postForm);
    return newPost;
  },
  async voteOnPost(voteForm) {
    const {option} = voteForm;
    const newPost = await post(`/posts/${voteForm.postId}`, {option});
    return newPost;
  },
  async editPost(edited) {
    const {id, title, body} = edited;
    const editForm = {title, body};
    await put(`/posts/${id}`, editForm);
    return edited;
  },
  async deletePost(postId) {
    await deleteRequest(`/posts/${postId}`);
    return postId;
  },
  async fetchPostComments(postId) {
    const comments = await get(`/posts/${postId}/comments`);
    return comments;
  },
  async addComment(commentForm) {
    const newComment = await post('/comments', commentForm);
    return newComment;
  },
  async voteOnComment(voteForm) {
    const {option} = voteForm;
    const newComment = await post(`/comments/${voteForm.commentId}`, {option});
    return newComment;
  },
  async editComment(edited) {
    const {id, timestamp, body} = edited;
    const editForm = {timestamp, body};
    await put(`/comments/${id}`, editForm);
    return edited;
  },
  async deleteComment(comment) {
    await deleteRequest(`/comments/${comment.id}`);
    return comment;
  }
};
