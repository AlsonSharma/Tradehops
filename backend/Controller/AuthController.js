const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password: rawPassword, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const password = rawPassword.trim();
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ email, password: hashedPassword, username, createdAt });
    const token = createSecretToken(user._id);

    res.status(201).json({
       message: "User signed in successfully", 
       success: true,
       user,
      token });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
    try {
      const { email, password: rawPassword } = req.body;
      const password = rawPassword.trim();
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      if(!user){
        return res.status(401).json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,user.password);

      // console.log('Provided Password:', password);
      // console.log('Stored Hash:', user.password);
      // console.log('Comparison Result:', auth);

      if (!auth) {
        return res.status(401).json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(user._id);
       
       res.status(200).json({ 
        message: "User logged in successfully", 
        success: true,
        token });
       next()
    } catch (error) {
      console.error(error);
    }
  }

