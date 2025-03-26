import User from "../models/userModel.js";

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log(req.body);

    if (!email || user.password !== password) {
      const err = new Error("Password or email wrong");
      err.status = 404;
      return next(err);
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, address } = req.body;

    if (!firstname || !lastname || !email || !address) {
      const err = new Error("Please fill all fields");
      err.status = 400;
      return next(err);
    }

    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const userSignUp = async (req, res, next) => {
  const {
    lastname,
    firstname,
    email,
    password,
    // accountNumber,
    // accountBalance,
  } = req.body;

  if (
    !lastname ||
    !firstname ||
    !email ||
    !password
    // !password ||
    // !accountNumber ||
    // !accountBalance
  ) {
    const err = new Error("Input all relevant fields");
    err.status = 400;
    return next(err);
  }

  const user = await User.create(req.body);
  res.status(201).json(user);
};

export const getUser = async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const err = new Error("User with this id cannot be found");
    err.status = 400;
    return next(err);
  }

  const user = await User.findOne({ _id: id });

  res.status(200).json({
    success: true,
    user,
  });
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    const err = new Error("User with this id cannot be found");
    err.status = 400;
    return next(err);
  }

  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(200).json({
    success: true,
    user,
  });
};
