import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
    .get("/users", UserController.listUsers)
    .post("/users", UserController.addUser)

export default router;