const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to create a comment
const createComment = async ({ user_id, post_id, text }) => {
  return await prisma.comment.create({
    data: { user_id, post_id, text },
  });
};

// Function to get all comments for a post
const getPostComments = async (post_id) => {
  return await prisma.comment.findMany({
    where: { post_id },
  });
};

// Function to delete a comment by ID
const deleteComment = async (id) => {
  return await prisma.comment.delete({
    where: { id },
  });
};

module.exports = {
  createComment,
  getPostComments,
  deleteComment,
};

