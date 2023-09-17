require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//router
const registerEventRouter = require("./routes/registerEventRouter");
const fetchEventSpecificRouter = require("./routes/fetchSpecificEventsRouter");
const signUpRouter = require("./routes/signupRouter");
const loginRouter = require("./routes/loginRouter");
const complaintRouter = require("./routes/complaintRouter");

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes

app.use("/create", registerEventRouter);
app.use("/specific", fetchEventSpecificRouter);
app.use("/signup", signUpRouter);
app.use("/login", loginRouter);
app.use("/complaint", complaintRouter);

//server start

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Server and Database Run Successfully");
  });
});
