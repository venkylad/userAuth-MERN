import jsonwebtoken from "jsonwebtoken";

export const generateToken = (res, userId) => {
  const token = jsonwebtoken.sign({ userId }, "adhd", {
    expiresIn: "30d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    maxAge: 30 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });
};
