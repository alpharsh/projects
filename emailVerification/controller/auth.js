const { sendVerificationEmail, sendWelcomeEmail } = require("../middleware/email");
const User = require("../model/User");
const bcrypt = require("bcryptjs");

// Register a new user
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please enter all fields..." });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists..." });
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationCode,
    });
    await user.save();
    sendVerificationEmail(user.email, verificationCode);
    res
      .status(201)
      .json({ success: true, message: "User Regisration Successful...", user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error..." });
  }
};

// Login a user
const login = async (req, res) => {
  try {
    res.send("Login");
  } catch (error) {
    console.log(error);
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findOne({ verificationCode: code });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid or Expired Code" });
    }
    user.isVerified = true;
    user.verificationCode=undefined;
    await user.save();
    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({ success: true, message: "Email Verified Successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error..." });
  }
};

module.exports = { register, login, verifyEmail };
