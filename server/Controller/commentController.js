const commentModel = require("../Model/commentModel");

// Create a comment
const createComment = async (req, res) => {
  const { user_id, post_id, text } = req.body;

  try {
    const comment = await commentModel.createComment({ user_id, post_id, text });
    res.status(201).json(comment);
  } catch (error) {
    console.error("Error creating comment:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all comments for a post
const getPostComments = async (req, res) => {
  const postId = parseInt(req.params.post_id); // Ensure postId is parsed to Int

  try {
    const comments = await commentModel.getPostComments(postId);
    res.status(200).json(comments);
  } catch (error) {
    console.error("Error getting comments:", error);
    res.status(500).json({ error: error.message });
  }
};

// Delete a comment by ID
const deleteComment = async (req, res) => {
  const commentId = parseInt(req.params.id); // Ensure commentId is parsed to Int

  try {
    const deletedComment = await commentModel.deleteComment(commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json(deletedComment);
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createComment,
  getPostComments,
  deleteComment,
};

