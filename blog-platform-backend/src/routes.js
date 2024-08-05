 
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Post } = require('./models');
const authMiddleware = require('./middleware');

const router = express.Router();

// Sign up
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  let user = new User({ email, passwordHash });
  user = await user.save();

  res.send(user);
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).send('Invalid email or password.');
  }

  const token = jwt.sign({ _id: user._id }, 'jwtSecretKey');
  res.send({ token });
});

// Post a new article
router.post('/post', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content, authorId: req.user._id });

  await post.save();
  res.send(post);
});

// Get all posts
router.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});

// Get posts by author
router.get('/posts', async (req, res) => {
  const { author } = req.query;
  const posts = await Post.find({ authorId: author });
  res.send(posts);
});

module.exports = router;
