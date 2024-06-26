import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (profileImageLocalPath) => {
  try {
    if (!profileImageLocalPath) return null;
    const result = await cloudinary.uploader.upload(profileImageLocalPath);
    console.log("CLOUDINARY :", result);
    fs.unlinkSync(profileImageLocalPath);
    return result;
  } catch (error) {
    console.log("Cloudinary ERROR:", error);
    fs.unlinkSync(profileImageLocalPath);
  }
};

export { uploadOnCloudinary };
