import express from "express";
import {
  createUser,
  getAllInformation,
  getListUser,
  login,
  generateToken,
} from "../controllers/user.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

const router = express.Router();

//routes

//create new user
router.post("/", verifyToken, createUser);

//get all information
router.get("/", verifyToken, getAllInformation);

//get all list by id user
router.get("/:id", verifyToken, getListUser);

//login
router.post("/login", login, generateToken);

export default router;
