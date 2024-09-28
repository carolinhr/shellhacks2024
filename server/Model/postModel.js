const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to create a post
const createPost = async ({ user_id, imageUrl, text }) => {
  return await prisma.post.create({
    data: { user_id, imageUrl, text },
  });
};

// Function to get all posts ordered by likes (most liked first)
const getAllPosts = async () => {
  return await prisma.post.findMany({
    include: { likedBy: true, comments: true }, // Include likes and comments
    orderBy: {
      likes: 'desc', // Order by likes in descending order
    },
  });
};

// Function to get a post by ID
const getPostById = async (post_id) => {
  return await prisma.post.findUnique({
    where: { post_id },
    include: { comments: true, likedBy: true },
  });
};

// Function to like a post
const likePost = async (user_id, post_id) => {
  const post = await prisma.post.findUnique({
    where: { post_id },
    include: { likedBy: true }, // Include likedBy to check if user has already liked
  });

  // Check if the user has already liked the post
  const userHasLiked = post.likedBy.some(user => user.user_id === user_id);

  if (userHasLiked) {
    // Remove like
    await prisma.post.update({
      where: { post_id },
      data: {
        likes: { decrement: 1 },
        likedBy: {
          disconnect: { user_id }, // Remove user from likedBy
        },
      },
    });
  } else {
    // Add like
    await prisma.post.update({
      where: { post_id },
      data: {
        likes: { increment: 1 },
        likedBy: {
          connect: { user_id }, // Add user to likedBy
        },
      },
    });
  }

  // Return the updated likes count
  const updatedPost = await prisma.post.findUnique({
    where: { post_id },
    select: { likes: true }, // Only return the likes count
  });

  return updatedPost.likes;
};

// Function to delete a post
const deletePost = async (post_id) => {
  return await prisma.post.delete({
    where: { post_id },
  });
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  likePost,
  deletePost,
};
