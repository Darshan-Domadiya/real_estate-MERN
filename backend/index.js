import express from "express";

const app = express();
const PORT = 2024;

app.get("/", (req, res) => {
  res.send("Server started backend");
});

app.listen(2024, () => {
  console.log(`Server is running on port: ${PORT} `);
});
