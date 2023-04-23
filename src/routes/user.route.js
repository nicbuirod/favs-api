import express from "express";
import {
  createUser,
  getAllInformation,
  getListUser,
} from "../controllers/user.controller.js";

const router = express.Router();

//routes

//create new user
router.post("/", createUser);

//get all information
router.get("/", getAllInformation);

//get all list by id user
router.get("/:id", getListUser);

export default router;
