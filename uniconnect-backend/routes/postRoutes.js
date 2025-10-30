import express from "express";
import Post from "../models/Post.js";
import User from "../models/User.js";

const router = express.Router();


// ✅ 1. Fetch all posts (for Campus Feed)
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ 2. Create a new post
router.post("/", async (req, res) => {
  try {
    const { content, image, author } = req.body;

    // If no author is provided, assign a random fake one
    let user = null;
    if (author) {
      user = await User.findOne({ username: author });
    } else {
      user = await User.findOne(); // fallback
    }

    const newPost = new Post({
      content,
      image,
      author: user ? user._id : null,
      createdAt: new Date(),
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: error.message });
  }
});


// ✅ 3. Like a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) return res.status(404).json({ error: "Post not found" });

    post.likes = (post.likes || 0) + 1;
    await post.save();

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ✅ 4. Delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;