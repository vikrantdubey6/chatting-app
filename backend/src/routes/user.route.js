import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  acceptFriendRequest,
  getFriendsRequests,
  getMyFriends,
  getOutgoingFriendReqs,
  getRecommendedUsers,
  sendFriendRequest,
} from "../controllers/user.controller.js";

const router = express.Router();

router.use(protectRoute); //applying middleware to all routes

router.get("/", getRecommendedUsers); //done
router.get("/friends", getMyFriends);  //done

router.post("/friend-request/:id", sendFriendRequest); //done
router.put("/friend-request/:id/accept", acceptFriendRequest); //done

router.get("/friend-requests", getFriendsRequests); //done
router.get("/outgoing-friend-requests", getOutgoingFriendReqs); //done

export default router;
