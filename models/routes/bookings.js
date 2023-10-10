import express from "express";
import { createBooking } from "../conrtollers/bookingontroller.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();
router.post("/", verifyUser, createBooking);

export default router;
