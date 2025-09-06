const express = require("express");
const {
  register,
  login,
  logout,
  getCurrentUser,
} = require("../../controllers/user/user.controller");
const { authenticate } = require("../../middleware/auth.middleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

router.get("/me", authenticate, getCurrentUser);

module.exports = router;

// http://localhost:9000/api/v1/user/register