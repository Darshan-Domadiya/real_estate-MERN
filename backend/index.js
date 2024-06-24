import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/db.js";

dotenv.config({ path: "../.env" });

connectDB();

app.get("/", (req, res) => {
  res.send("Server started in backend");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT} `);
});
