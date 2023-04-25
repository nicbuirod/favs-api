import express from "express";
import jwt from "jsonwebtoken";
import userRoutes from "./routes/user.route.js";
import listRoutes from "./routes/list.route.js";
import favsRoutes from "./routes/favs.route.js";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "api favs" });
});

//token
app.get("/token", (req, res) => {
  const user = { id: 1, name: "nicolas" };
  const secret = "$2a$12$KzT39VZJef7fRta.o/WVrOUOEJVIdPhXXFHAEoEtn/IPrU6fvFqwi";

  const token = jwt.sign(user, secret);

  res.send(token);
});

//middleware

app.use(express.json());

// user
app.use("/user", userRoutes);

//list
app.use("/list", listRoutes);

//favs
app.use("/favs", favsRoutes);

app.listen(PORT, () => {
  console.log("server initialized...");
});
