const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const indexRouter = require('./routes/index');

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use('/', indexRouter);

// Route to serve blog posts
app.get('/blog', (req, res) => {
    fs.readFile(path.join(__dirname, 'data', 'posts.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading blog posts');
        }
        const posts = JSON.parse(data);
        res.render('blog', { posts });
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
