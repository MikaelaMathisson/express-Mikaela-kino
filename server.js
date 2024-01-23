const express = require('express')
const app = express()

app.use(express.static("static"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set("view engine", "ejs")
app.use(logger)


app.get('/about', (req, res) => 
{
    res.send();
})

function logger(req, res, next){
console.log(req.originalUrl)
next()
}

app.listen(5080)