const express = require('express');
const mongoose = require('mongoose');
const urlApi = require('./api/url');
// var cors = require('cors');

const app = express();

// Basic Configuration 
const port = process.env.PORT || 3000;


//database connection
mongoose.connect("mongodb://localhost/fcc", {
        useNewUrlParser: true
    })
    .then(() => console.log(`Connected to db...`))
    .catch(err => console.error(err))

//middlewares
// app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use("/api/shorturl/", urlApi)

const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;