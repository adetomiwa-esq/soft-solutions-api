import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "please add first name"],
    },
    lastname: {
      type: String,
      required: [true, "please add last name"],
    },
    email: {
      type: String,
      required: [true, "please add an email"],
      unique: true,
    },
    status: {
      type: String,
      required: [true, "please add last name"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
