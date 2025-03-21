const express = require('express');
const path = require('path');
const router = express.Router();

// Serve homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Serve about page
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

// Serve contact page
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
});

// ✅ Serve blog page (Missing Route)
router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/blog.ejs'));  // Ensure blog.html exists
});

module.exports = router;
