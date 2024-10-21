import { Router } from "express";
import { createUser, getUserById, getUsers } from "../handlers/users";

const router = Router();

// /api/users/
router.get("/", getUsers);
router.post("/", createUser);

// /api/users/123
router.get("/:id", getUserById);

export default router;
