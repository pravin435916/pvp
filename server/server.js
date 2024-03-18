const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MONGO)
  .then(() => console.log("mongo CONNECTED"))
  .catch(err => console.error("MongoDB connection error:", err));


const Post = mongoose.model('Post', {
  title: String,
  content: String,
  // imagePath: String,
});

app.get('/api/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/api/posts', async (req, res) => {
  try {
      const { title, content } = req.body;
      // const imagePath = req.file.path;
      const post = new Post({ title, content });
      await post.save();

      res.json(post);
  } catch (error) {
      console.error('Error creating post: ', error);
      res.status(500).json({ error: 'Failed to create post' });
  }
});

app.get('/api/posts/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
});
app.post('/chatbot', (req, res) => {
  const { message } = req.body;
  let response;
  const lowercaseMessage = message.toLowerCase();

  const responsePatterns = [
    { pattern: 'hello', reply: 'Hi there!' },
    { pattern: 'hi', reply: 'Hello!' },
    { pattern: 'how are you', reply: "I'm just a bot, but I'm doing well!" },
    { pattern: 'fuck', reply: "I'm sorry, I cannot respond to offensive language." },
    { pattern: 'what is your name', reply: "I'm a chatbot, you can call me HopeAI" },
    { pattern: 'who created you', reply: "I was created by Pravin" },
    { pattern: 'who designed you', reply: "I was Designed by Vansh" },
    { pattern: 'who gave content to you ', reply: "Content was given by Prathamesh" },
    { pattern: 'what can you do', reply: "I can answer questions, provide information, and engage in conversation." },
    { pattern: 'where are you from', reply: "I exist in the digital realm, so I don't have a physical location." },
    { pattern: 'tell me a joke', reply: "Why don't scientists trust atoms? Because they make up everything!" },
    { pattern: 'fuck you', reply: "Fuck You BC . Gali Kaise Bakk Rha Mad*****D . Ga**D Mara Bsdk ." },
];

  const matchedPattern = responsePatterns.find(({ pattern }) => lowercaseMessage.includes(pattern));
  if (matchedPattern) {
    response = matchedPattern.reply;
  } else {
    response = "I'm sorry, I don't understand.";
  }
  setTimeout(() => {
    res.json(response);
  }, 1000);
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
