import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./models/routes/tour.js";
import userRoute from "./models/routes/user.js";
import authRoute from "./models/routes/auth.js";
import reviewRoute from "./models/routes/reviews.js";
import bookingRoute from "./models/routes/bookings.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credential: true,
};
//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO__URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB database Connected");
  } catch (err) {
    console.log("error Connected to MongoDB");
  }
};
//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

//routes

app.listen(port, () => {
  connect();
  console.log(`Server listening on port ${port}`);
});
