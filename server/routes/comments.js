const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const videoData = require("../data/videos.json");
const commentRoute = express.Router({ mergeParams: true });

commentRoute.post("/", (req, res) => {
  const { comment } = req.body;
  let videoId = req.params.videoId;
  let newVideo = videoData.find((video) => video.id === videoId);

  newVideo.comments.push({
    name: "Sehaj Wadhwa",
    comment: comment,
    id: uuid.v4(),
    likes: 0,
    timestamp: Date.now(),
  });
  fs.writeFileSync("data/videos.json", JSON.stringify(videoData));
  res.json(videoData);
});

module.exports = commentRoute;
