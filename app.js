const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use('/', indexRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
