const express = require("express");
const app = express();
const path = require("path");

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/shop', (req,res) => {
    res.sendFile(path.join(__dirname, '/Shop.html'));
})

app.get('/blog', (req,res) => {
    res.sendFile(path.join(__dirname, '/Blog.html'));
})

app.listen(5000);