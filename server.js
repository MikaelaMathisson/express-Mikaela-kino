const express = require('express')

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'handlebars')

app.use(logger)


app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/public/about.html");
});
app.get('/agelimit', (req, res) => {
    res.sendFile(__dirname + "/public/age-limit.html");
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});
app.get('/movies', (req, res) => {
    res.sendFile(__dirname + "/public/movies.html");
});
app.get('/news', (req, res) => {
    res.sendFile(__dirname + "/public/news.html");
});
app.get('/questions', (req, res) => {
    res.sendFile(__dirname + "/public/QandA.html");
});

function logger(req, res, next){
console.log(req.originalUrl)
next()
}



app.listen(5080)