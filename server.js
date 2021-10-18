const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');



const app = express();

// Bodyparser Middleware
app.use(express.json());

// db config
const db = config.get('mongoURI')

// connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));