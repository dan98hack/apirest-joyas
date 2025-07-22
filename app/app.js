const express = require('express')
const app = express();
const router = require('./routes/joyasRoute.js');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/joyas',router);


module.exports = app;