const express = require("express");
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})


app.get('/home', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
})

app.get('/manutencao', (req, res) => {
    res.sendFile(__dirname + "/views/manutencao.html");
})

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
})

app.listen(3000, () => console.log("servidor DevHouse"));

app.use(express.static('public'));

