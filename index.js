import express from "express";
import cors from 'cors';
import 'dotenv/config';
import spotsRoute from "./routes/spotsRoute.js"


const PORT = process.env.PORT || 8080;
const app = express(); 

app.use(express.json())
app.use(express.static('public'))
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to TailTap Server</h1>`);
});

app.use("/spots", spotsRoute);


app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
