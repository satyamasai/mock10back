const { connection } = require(".//Config/db");
const express = require("express");
const { userController } = require("./Routes/user.routes");
const { authentication } = require("./Middlewares/authentication");

const PORT = 8888;
const app = express();
const cors = require("cors");
const { userModel } = require("./Models/user.model");
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the EMI calculator app");
});

app.use("/", userController);

// get profile api---------
app.get("/getprofile", authentication, async (req, res) => {
  //   const { user_id } = req.body;
//   console.log(req.body, "userID");
  const { user_id } = req.body;
  const user = await userModel.findOne({ _id: user_id });

  const { name, email } = user;

  res.send({ name, email });
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("database connected");
    console.log("Listening on" + PORT);
  } catch (err) {
    console.log("database connection failed");
    console.log(err);
  }
});
