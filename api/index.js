const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const { Server } = require("socket.io");

const authRoute = require("./routes/auth.routes");
const taskRoute = require("./routes/task.routes");

const DATABASE = process.env.DATABASE;
const PORT = process.env.PORT || 8000;

const io = new Server(3000, {
  cors: {
    origin: [
      "https://study-buddy-frontend-opal.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST"],
  },
});

mongoose
  .connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:8000",
      "https://study-buddy-frontend-opal.vercel.app/",
      "https://study-buddy-backend-alpha.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", authRoute);

app.use("/", taskRoute);
