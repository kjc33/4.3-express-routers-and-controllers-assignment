const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/userController");

// GET /users - Get All Users
router.get("/", userControllers.getAllUsers);

// GET /users/:id - Get User by ID
router.get("/:id", userControllers.getUserById);

// POST /users - Add New User
router.post("/register", userControllers.addNewUser);

// PUT /users/:id - Update User by ID
router.put("/:id", userControllers.updateUserById);

// DELETE /users/:id - Delete User by ID
router.delete("/:id", userControllers.deleteUserById);

// POST /login/:id
router.post("/login/", userControllers.userLogin);

module.exports = router;
