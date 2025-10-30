import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, unique: false }, // ⬅ turned off unique
  bio: { type: String },
  avatar: { type: String },
});

const User = mongoose.model("User", userSchema);
export default User;