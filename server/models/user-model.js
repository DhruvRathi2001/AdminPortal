const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  phone: {
    type: String,
    require: true,
  },

  password: {
    type: String,
    require: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//hash the passoword before storing(Good Standards...)
//"pre" is a method created to make changes to data before storing to Database....
userSchema.pre("save", async function (next) {
  //act as MIDDLEWARE
  const user = this; //(this contains the json format data that user client has entered)

  if (!user.isModified("password")) {
    next();
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    next(error);
  }
});

//JSON web token
userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(), //payload
        email: this.email,
        isAdmin: this.isAdmin,
      },

      //signature
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d", //(optional)
      }
    );
  } catch (error) {
    console.error(error);
  }
};

//checking if password is valid or not
userSchema.methods.comparePassword = async function(password){
  try{
          return bcrypt.compare(password, this.password)
       
  }catch(error){
    console.log(error)
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//define the model OR the collection name for above Schema
const User = new mongoose.model("User", userSchema); //(Collection name [your choice], Schema Name)

module.exports = User;
