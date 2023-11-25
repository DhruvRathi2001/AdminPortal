const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.send("auth route ka home route chl gya.....");
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    //else create a new user

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      msg: "Registration successfull",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
      //converting ._id to a string  is a good practice because it ensures consistency and compatibaity
      //across different JWT libraries and systems .
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////////

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //First check email
    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    //Then check password
    const validPassword = await userExist.comparePassword(password); //(yha pe bhi compare kar skte the par controller file ko less crowded rakhne k lie alag jagah kiya hai, good practice)

    if (validPassword) {
      res.status(200).json({
        msg: "Login successfull",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = { home, register, login };
