import express from "express";
import {
  createFavs,
  favsDelete,
  favoriteUpdate,
} from "../controllers/favs.controller.js";
import { verifyToken } from "../controllers/user.controller.js";

const router = express.Router();

//routes

//create new list
router.post("/", verifyToken, createFavs);

//delete a favorite
router.delete("/:id", verifyToken, favsDelete);

//update a favorite
router.put("/:id", verifyToken ,favoriteUpdate);

export default router;
