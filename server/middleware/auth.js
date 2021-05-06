const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");

  //   Check if there's no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authotization denied" });
  }

  //   If there's a token, then we verify it
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    // console.log(req.user);
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
