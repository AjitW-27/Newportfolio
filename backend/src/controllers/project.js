const getProjects = require("../tools/project");

// Get all projects
const getAllProjects = (req, res) => {
    const projects = getProjects();

    res.status(200).json({
        success: true,
        projects,
    });
};

// Search projects
const searchProjects = (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).json({
            success: false,
            message: "Search query is required",
        });
    }

    const projects = getProjects();

    const keywords = query
        .toLowerCase()
        .split(" ")
        .filter((word) => word.length > 2);

    const matchedProjects = projects
        .map((project) => {
            const projectData = JSON.stringify(project).toLowerCase();

            const matchCount = keywords.filter((keyword) =>
                projectData.includes(keyword)
            ).length;

            return {
                project,
                score: matchCount,
            };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score);

    res.status(200).json({
        success: true,
        projects: matchedProjects,
    });
};

module.exports = {
    getAllProjects,
    searchProjects,
};