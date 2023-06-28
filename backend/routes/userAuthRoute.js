import express from "express";
import {
  getUserProfileController,
  registerUserController,
  updateUserProfileController,
  loginUserController,
  userLogoutController,
} from "../controllers/userAuthController.js";

const router = express.Router();

router.post("/login", loginUserController);
router.post("/register", registerUserController);
router.post("/logout", userLogoutController);
router
  .route("/profile")
  .get(getUserProfileController)
  .put(updateUserProfileController);

export default router;
