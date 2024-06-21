import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: { // Changed from 'query' to 'message' to match the front end
    type: String,
    required: true,
  },
});

const Query = mongoose.model("Query", querySchema);
export default Query;
