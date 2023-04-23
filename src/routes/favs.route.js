import express from "express";
import { createFavs, favsDelete } from "../controllers/favs.controller.js";

const router = express.Router();

//routes

//create new list
router.post("/", createFavs);

//delete a favorite
router.delete("/:id", favsDelete);

export default router;
