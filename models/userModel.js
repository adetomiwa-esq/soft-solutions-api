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
    password: {
      type: String,
      required: [true, "please add a password"],
    },
    userStatus: {
      type: String,
      required: [true, "there has to be a defined status"],
    },

    // comment the fields below to create admin account

    accountNumber: {
      type: Number,
      required: [true, "there has to be an account number"],
    },
    accountBalance: {
      type: Number,
      required: [true, "there has to be a balance"],
    },
    inflow: {
      type: Number,
      required: [true, "there has to be inflow"],
    },
    outflow: {
      type: Number,
      required: [true, "there has to be outflow"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
