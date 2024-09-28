const postModel = require("../Model/postModel");

// Create a new post
const createPost = async (req, res) => {
  const { user_id, imageUrl, text } = req.body; // Assuming these values are passed in the request body

  try {
    const post = await postModel.createPost({ user_id, imageUrl, text });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all posts ordered by likes (most liked first)
const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.getAllPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a post by ID
const getPostById = async (req, res) => {
  const post_id = parseInt(req.params.post_id); // Ensure post_id is parsed to Int

  try {
    const post = await postModel.getPostById(post_id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Like a post
const likePost = async (req, res) => {
  const { user_id } = req.body; // Assuming user_id is passed in the request body
  const post_id = parseInt(req.params.post_id); // Ensure post_id is parsed to Int

  try {
    const updatedLikesCount = await postModel.likePost(user_id, post_id);
    res.status(200).json({ likes: updatedLikesCount });
  } catch (error) {
    console.error('Error in likePost:', error.message);
    res.status(500).json({ error: 'Failed to toggle like on post' });
  }
};

// Delete a post by ID
const deletePost = async (req, res) => {
  const post_id = parseInt(req.params.post_id); // Ensure post_id is parsed to Int

  try {
    const deletedPost = await postModel.deletePost(post_id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  likePost,
  deletePost,
};
