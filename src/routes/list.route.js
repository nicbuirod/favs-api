import express from "express";
import {
  createList,
  getAllList,
  listDelete,
} from "../controllers/list.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

const router = express.Router();

//routes

//create new list
router.post("/", verifyToken, createList);

//get all list
router.get("/", verifyToken, getAllList);

//delete a list
router.delete("/:id", verifyToken, listDelete);

export default router;
