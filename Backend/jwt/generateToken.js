import jwt from "jsonwebtoken";

const generateToken = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_TOKEN, {
    expiresIn: "1d",
  });
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });
};
export default generateToken;
