const express = require('express')
const app = express()

app.use(express.static("static"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set("view engine", "ejs")
app.use(logger)



const userRouter = require("./routes/users")

/* Gör att router sidan använder 
path /users och sen tillför allt från userRoutes*/ 
app.use("/users", userRouter)


function logger(req, res, next){
console.log(req.originalUrl)
next()
}

app.listen(5080)