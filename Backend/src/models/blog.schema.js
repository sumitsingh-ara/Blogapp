const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    blogImages: [{ type: String, required: false, default: "" }],
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

module.exports = mongoose.model("Blogs", BlogSchema);
