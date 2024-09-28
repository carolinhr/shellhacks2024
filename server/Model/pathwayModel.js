const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function to create a pathway
const createPathway = async (data) => {
  return await prisma.pathways.create({ data });
};

// Function to get all pathways
const getAllPathways = async () => {
  return await prisma.pathways.findMany();
};

// Function to get a pathway by ID
const getPathwayById = async (pathway_id) => {
  return await prisma.pathways.findUnique({
    where: { pathway_id },
  });
};

// Function to update a pathway
const updatePathwayById = async (pathway_id, data) => {
  return await prisma.pathways.update({
    where: { pathway_id },
    data,
  });
};

// Function to delete a pathway
const deletePathwayById = async (pathway_id) => {
  return await prisma.pathways.delete({
    where: { pathway_id },
  });
};

module.exports = {
  createPathway,
  getAllPathways,
  getPathwayById,
  updatePathwayById,
  deletePathwayById,
};
