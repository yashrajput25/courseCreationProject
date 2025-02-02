require("dotenv").config();
const express = require("express")
const mongoose = require("mongoose")
const courseRoutes = require("./routes/courses")
const cors = require("cors")


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/courses", courseRoutes)

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

app.listen(5001, console.log("Server is running on 5000 port"))