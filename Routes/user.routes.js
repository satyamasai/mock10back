const { Router } = require("express");
const userController = Router();
const { userModel } = require("../Models/user.model");

// ---------- user registration

userController.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body, "usersignup");
  const existing_user = await userModel.findOne({ email });
  if (existing_user) {
    res.send({ msg: "user already exist" });
    return;
  }

  const new_user = new userModel({
    email,
    name,
    password,
  });
  await new_user.save();
  res.send({ msg: "User registered .." });
});

// ----------user login --
userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

if(user){

    const user_id = user._id;
    if(user.email==email && user.password==password){
        res.send({"msg":"Login successfull", token:user_id})
    }else{
        res.send("Please enter correct email and password")
    }
}else{
    res.send("Please register with us!")
}
// console.log(user_id,"login user id")




});

module.exports = {
  userController,
};
