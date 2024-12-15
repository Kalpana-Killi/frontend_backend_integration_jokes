import express from 'express';
import cors from 'cors'; // Import cors

const app = express();

// Use cors to allow cross-origin requests
app.use(cors());

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, title: "Why don’t skeletons fight each other?", content: "Because they don’t have the guts!" },
    { id: 2, title: "Why couldn’t the bicycle stand up by itself?", content: "It was two-tired!" },
    { id: 3, title: "What do you call fake spaghetti?", content: "An impasta!" },
    { id: 4, title: "Why did the scarecrow win an award?", content: "Because he was outstanding in his field!" },
    { id: 5, title: "Why did the math book look sad?", content: "Because it had too many problems." },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/api/jokes`);
});
