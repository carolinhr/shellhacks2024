const express = require("express");
const {
  createComment,
  getPostComments,
  deleteComment,
} = require("../Controller/commentController");

const router = express.Router();

router.post("/", createComment); // Create a comment
router.get("/:post_id", getPostComments); // Get comments for a specific post
router.delete("/:id", deleteComment); // Delete a comment by ID

module.exports = router;
