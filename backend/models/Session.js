// const { Schema, model } = require("mongoose");
import mongoose from "mongoose";
const { Schema } = mongoose;

const sessionSchema = new Schema({
  refresh_token: { type: String, unique: true, required: true },
  fingerprint: { type: String, required: true },
  userId: { type: String, required: true },
});

// module.exports = model("Session", Session);
const Session = mongoose.model("Session", sessionSchema);
export default Session;
