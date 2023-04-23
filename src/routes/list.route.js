import express from "express";
import {
  createList,
  getAllList,
  listDelete,
} from "../controllers/list.controller.js";

const router = express.Router();

//routes

//create new list
router.post("/", createList);

//get all list
router.get("/", getAllList);

//delete a list
router.delete("/:id", listDelete);

export default router;
