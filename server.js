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

function logger(req, res, next){
console.log(req.originalUrl)
next()
}



app.listen(5080)