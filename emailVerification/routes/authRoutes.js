const express = require("express");
const { register, login, verifyEmail } = require("../controller/auth");
const router = express.Router();


router.post("/register", register);
router.post("/verifyemail", verifyEmail)
router.post("/login", login);

module.exports = router;