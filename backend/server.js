import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userAuthRoute.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`server is started on port ${port}`));
