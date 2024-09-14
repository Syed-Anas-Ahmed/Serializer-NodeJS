import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      joke: "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    },
    {
      id: 3,
      joke: "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      id: 4,
      joke: "I'm reading a book about anti-gravity. It's impossible to put down!",
    },
    {
      id: 5,
      joke: "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
  ];

  res.json(jokes);
});

app.post("/twitter", (req, res) => {
  res.json({
    "POST request to the homepage": hello,
    array: [{ id: 1 }, { id: 2 }],
  });
});
