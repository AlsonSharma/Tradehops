const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  
  const authHeader = req.headers.authorization;

  if(!authHeader?.startsWith('Bearer ')){
    return res.status(401).json({ status: false });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.json({ status: false })
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, decoded) => {
    if (err) return res.status(401).json({ status: false });
    
    const user = await User.findById(decoded.id).select('-password');
    if (!user) return res.status(401).json({ status: false });
    
    res.json({ status: true, user });
    next();
  });
}