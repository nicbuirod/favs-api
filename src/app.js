import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import userRoutes from "./routes/user.route.js";
import listRoutes from "./routes/list.route.js";
import favsRoutes from "./routes/favs.route.js";

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "api favs" });
});

//middleware

app.use(express.json());

// user
app.use("/user", userRoutes);

// list
app.use("/list", listRoutes);

//favs
app.use("/favs", favsRoutes);

app.listen(PORT, () => {
  console.log("server initialized...");
});
