const express = require("express");
const {createPost, getAllPosts, getPostById, likePost, deletePost} = require("../Controller/postController");

const router = express.Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:post_id", getPostById);
router.post("/:post_id/like", likePost); // Like post endpoint
router.delete("/:post_id", deletePost);

module.exports = router;
