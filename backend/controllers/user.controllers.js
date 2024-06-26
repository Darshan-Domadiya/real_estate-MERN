import { User } from "../models/users.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

async function registerUser(req, res) {
  const { username, email, password } = req.body;
  // console.log("req.body object :", req.body);

  if (!(email && password && username)) {
    res.status(400).json({ message: "User data is inappropriate!" });
  }

  const userAlreadyExists = await User.findOne({ $or: [{ email, username }] });

  if (userAlreadyExists) {
    res.status(406).json({ message: "User already exists!" });
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    res.status(500).json({ message: "Error while registering user!" });
  }

  return res
    .status(200)
    .json({ message: "User created successfully!", data: createdUser });
}

async function signInUser(req, res) {}

export { registerUser, signInUser };
