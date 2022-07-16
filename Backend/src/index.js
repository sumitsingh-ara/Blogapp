const express = require('express');
const app = express();
app.use(express.json());


//----------------------------------------------------ROUTES--------------------------------------------//
const blogController = require('./routes/blog.routes');
app.use('/blog',blogController);



module.exports = app;