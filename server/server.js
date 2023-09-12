const express = require("express");
const app = express();
const cors = require("cors");
const videos = require("./routes/videos");
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

app.use((_req, _res, next) => {
  next();
});
app.use("/videos", videos);

app.listen(port, (error) =>
  error ? console.error(error) : console.info(`Hello I am running on ${port}`)
);
