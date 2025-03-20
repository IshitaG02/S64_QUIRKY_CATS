const express = require("express");
const router = express.Router();
const Video = require("./models/videoModel"); // Assuming you have a Video model

// Create a new video (Upload)
router.post("/videos", async (req, res) => {
    try {
        const { title, url, category, description } = req.body;
        const newVideo = new Video({ title, url, category, description });
        await newVideo.save();
        res.status(201).json({ message: "Video uploaded successfully", video: newVideo });
    } catch (error) {
        res.status(500).json({ error: "Failed to upload video" });
    }
});

// Get all videos
router.get("/videos", async (req, res) => {
    try {
        const videos = await Video.find();
        res.status(200).json(videos);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch videos" });
    }
});

// Get a single video by ID
router.get("/videos/:id", async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);
        if (!video) return res.status(404).json({ error: "Video not found" });
        res.status(200).json(video);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch video" });
    }
});

// Update a video by ID
router.put("/videos/:id", async (req, res) => {
    try {
        const updatedVideo = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedVideo) return res.status(404).json({ error: "Video not found" });
        res.status(200).json({ message: "Video updated successfully", video: updatedVideo });
    } catch (error) {
        res.status(500).json({ error: "Failed to update video" });
    }
});

// Delete a video by ID
router.delete("/videos/:id", async (req, res) => {
    try {
        const deletedVideo = await Video.findByIdAndDelete(req.params.id);
        if (!deletedVideo) return res.status(404).json({ error: "Video not found" });
        res.status(200).json({ message: "Video deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete video" });
    }
});

module.exports = router;
