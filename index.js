const express = require('express');
const app = express();
const cors = require('cors');
const blogs = require('./api/blogsData.json');
const path = require('path');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));



  
  
  
  
  

app.get("/", (req, res) => {
    console.log("Request received at /");
    res.send("Blog server is running!");
});

app.get("/blogs", (req, res) => {
    console.log("Request received at /blogs");
    res.json(blogs);
});

app.get("/blogs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const blog = blogs.find(b => b.id === id);
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).json({ error: "Blog not found" });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./public", "index.html"));
  });
  