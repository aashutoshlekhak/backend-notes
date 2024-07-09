import express from "express";
import userRouter from "./user";
import projectRouter from "./project";
import authRouter from './auth'

const router = express();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/projects", projectRouter);

export default router;
