import User from "../models/userModel.js";

export const createUser = async (req, res, next) => {
  try {
    const { firstname, lastname, email, status } = req.body;

    if (!firstname || !lastname || !email || !status) {
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

export const getAllUsers = async (req, res, next) => {
  const users = await User.find();
  console.log(users);

  res.status(200).json(users);
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

export const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      const err = new Error(`User with the id ${req.params.id} not found`);
      err.status = 404;
      return next(err);
    }

    await User.findOneAndDelete({ _id: req.params.id });

    res.status(200).json({
      msg: `transaction with id ${req.params.id} has been successfully deleted`,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const userSignUp = async (req, res, next) => {
//   const {
//     lastname,
//     firstname,
//     email,
//     password,
//     // accountNumber,
//     // accountBalance,
//   } = req.body;

//   if (
//     !lastname ||
//     !firstname ||
//     !email ||
//     !password
//     // !password ||
//     // !accountNumber ||
//     // !accountBalance
//   ) {
//     const err = new Error("Input all relevant fields");
//     err.status = 400;
//     return next(err);
//   }

//   const user = await User.create(req.body);
//   res.status(201).json(user);
// };
