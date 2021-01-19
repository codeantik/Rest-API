const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const postsRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//parsing the data
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());


//Connect to DB

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Connected to db')
);

//Listen to server

app.listen(3000);


//Middleware

// app.use('/posts', (req, res) => {
//     console.log('List of posts');
// });

app.use('/posts', postsRoute);


//Routes

app.get('/', (req, res) => {
    res.send('This is the home page');
});

