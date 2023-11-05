import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, requirrd: true, unique: true },
  password: { type: String, requirrd: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});
