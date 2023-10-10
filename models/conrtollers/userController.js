import User from "../User.js";

//creat new User
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const sevedUser = await newUser.save();
    res.status(200).json({
      succsess: true,
      data: sevedUser,
      message: "Successfully created",
    });
  } catch (error) {
    res.status(500).json({
      succsess: false,
      message: "Failed to create User",
    });
  }
};

//uodate User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      succsess: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      succsess: false,
      message: "Failed to update User",
    });
  }
};
//deleteUser
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      succsess: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      succsess: false,
      message: "Failed to delete",
    });
  }
};
//getSingle User
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      succsess: true,
      message: "Successfull",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      succsess: false,
      message: "not found",
    });
  }
};

//getAll User
export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      succsess: true,
      message: "Successfull",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      succsess: false,
      message: "not found",
    });
  }
};
