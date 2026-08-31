const express = require("express");

const {
    getAllProjects,
    searchProjects,
} = require("../controllers/project");

const router = express.Router();

// Get all projects
router.get("/", getAllProjects);

// Search projects
router.get("/search", searchProjects);

module.exports = router;