import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

export const loginUserController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({ _id: user._id, email: user.email });
  } else {
    res.status(404);
    throw new Error("Something wrong with password or email");
  }
});

export const registerUserController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User email already exists");
  }

  const user = await User.create({
    email,
    name,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Something wrong with user details");
  }
});

export const getUserProfileController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile controller" });
});

export const updateUserProfileController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "update user profile" });
});

export const userLogoutController = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "user logged out" });
});
