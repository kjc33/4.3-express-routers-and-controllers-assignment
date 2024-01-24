const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userController");

// GET /users - Get All Users
router.get("/", userControllers.getAllUsers);

// GET /users/:id - Get User by ID
router.get("/:id", userControllers.getUserById);

// POST /users - Add New User
router.post("/", userControllers.addNewUser);

module.exports = router;
