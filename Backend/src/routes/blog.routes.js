const router = require("express").Router();
const Blog = require("../models/blog.schema");
//-----------------------------------------------------------CREATE A NEW BLOG
router.post("/addblog", async (req, res) => {
  try {
    let newPost = await Blog.create(req.body);
    return res.status(200).send(newPost);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

//-------------------------------------------------GET ALL Blogs ------------------------------------------------------------
router.get("/allblogs", async (req, res) => {
  try {
    let allBlogs = await Blog.find().sort({ createdAt: -1 }).lean().exec();
    return res.status(200).send(allBlogs);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});
//------------------------------------------------------GET A SINGLE Blog-----------------------------------------------------
router.get("/single/:id", async (req, res) => {
  try {
    let singleBlog = await Blog.findById(req.params.id).lean().exec();
    return res.status(200).send(singleBlog);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
