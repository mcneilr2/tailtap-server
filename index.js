import express from "express";
const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to TailTap Server</h1>`);
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
