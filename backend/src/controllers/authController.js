import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findByEmail, createUser, findById } from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await findByEmail(email);

    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Default role = Staff (role_id = 4)
    const roleId = 4;

    const id = await createUser(name, email, hashedPassword, roleId);

    const user = await findById(id);

    const token = generateToken(user.id);

    res.status(201).json({
      success: true,
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await findByEmail(email);

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user.id);

    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });

    return res.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const profile = async (req, res) => {
  const user = await findById(req.user.id);

  // res.json(user);

  res.json({
    success: true,
    user,
  });
};

const logout = (req, res) => {
  res.clearCookie("accessToken");

  res.json({
    success: true,
    message: "Logged out successfully",
  });
};

export { register, login, logout, profile };
