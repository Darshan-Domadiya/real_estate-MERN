import express from "express";
import cors from "cors";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));
app.use(express.json());
app.use(express.static("public"));

// import routers.
import userRouter from "./routes/user.routes.js";

// routing.
app.use("/api/user", userRouter);

export default app;
