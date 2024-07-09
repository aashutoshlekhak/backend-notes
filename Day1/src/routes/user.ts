import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUsersById,
} from "../controller/user";
const router = express();

router.post("/", createUser);

router.get("/", getUsers);
router.get("/:id", getUsersById);

router.delete("/:id", deleteUser);

router.put("/", (req, res) => {
  res.json({
    message: "User updated",
  });
});

export default router;
