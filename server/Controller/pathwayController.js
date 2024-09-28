const pathwayModel = require("../Model/pathwayModel");

const createPathway = async (req, res) => {
  try {
    const pathway = await pathwayModel.createPathway(req.body);
    res.status(201).json(pathway);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPathways = async (req, res) => {
  try {
    const pathways = await pathwayModel.getAllPathways();
    res.status(200).json(pathways);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPathwayById = async (req, res) => {
  const pathway_id = parseInt(req.params.pathway_id);
  try {
    const pathway = await pathwayModel.getPathwayById(pathway_id);
    if (pathway) {
      res.status(200).json(pathway);
    } else {
      res.status(404).json({ error: "Pathway not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePathway = async (req, res) => {
  const pathway_id = parseInt(req.params.pathway_id);
  try {
    const updatedPathway = await pathwayModel.updatePathwayById(pathway_id, req.body);
    res.status(200).json(updatedPathway);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePathway = async (req, res) => {
  const pathway_id = parseInt(req.params.pathway_id);
  try {
    await pathwayModel.deletePathwayById(pathway_id);
    res.status(204).end(); // Successfully deleted
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPathway,
  getAllPathways,
  getPathwayById,
  updatePathway,
  deletePathway,
};
