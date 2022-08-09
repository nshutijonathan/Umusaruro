import express from "express";
const router = express.Router();
import { addOrderItems } from "../controllers/orderCOntroller.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
export default router;
