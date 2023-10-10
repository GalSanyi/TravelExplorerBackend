import express from "express";
const router = express.Router();
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../conrtollers/userController.js";
import { verifyUser } from "../utils/verifyToken.js";
//update new users
router.put("/:id", verifyUser, updateUser);

//delete new users
router.delete("/:id", verifyUser, deleteUser);

//get single users
router.get("/:id", verifyUser, getSingleUser);

//get all users
router.get("/", verifyUser, getAllUser);
export default router;
