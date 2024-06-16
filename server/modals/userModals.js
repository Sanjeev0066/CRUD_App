import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Users", userSchema);
