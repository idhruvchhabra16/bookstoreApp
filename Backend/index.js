import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import queryRoute from "./route/contact.route.js";

dotenv.config(); 

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("Error: ", error));

// Defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", queryRoute); // Ensure the route prefix is set

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
