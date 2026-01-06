import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getMyFriends, getRecommendedUsers } from "../controllers/user.controller";

const router = express.Router()

router.use(protectRoute) //applying middleware to all routes

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);



export default router