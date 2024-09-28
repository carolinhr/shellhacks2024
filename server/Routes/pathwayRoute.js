const express = require("express");
const {createPathway,getAllPathways,getPathwayById,updatePathway,deletePathway} = require("../Controller/pathwayController");

const router = express.Router();

router.post("/", createPathway); // Create a pathway
router.get("/", getAllPathways); // Get all pathways
router.get("/:pathway_id", getPathwayById); // Get a pathway by ID
router.put("/:pathway_id", updatePathway); // Update a pathway
router.delete("/:pathway_id", deletePathway); // Delete a pathway

module.exports = router;
