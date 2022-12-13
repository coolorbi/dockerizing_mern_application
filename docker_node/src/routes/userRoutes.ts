import express from "express";
import { createUser, getUser } from "../controller/userController";

export const router = express.Router();

router.post("/", createUser);
router.get("/", getUser);
