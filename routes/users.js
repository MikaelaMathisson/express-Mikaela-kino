const express = require("express")
const router = express.Router()



router.get("/", (req, res) => {
    console.log(req.query.name)
    res.send(" User list")
    })
    
router.get("/new", (req, res) => {
res.render("users/new")
})

router.post("/", (req, res) => {
    const isValid = true
    if(isValid) {
        users.push({firstName: req.body.firstName})
        res.redirect("/users/${users.length - 1}")
    } else{
        console.log("Error")
        res.render("users/new", { firstName: req.body.firstName})
    }
})

router.get("/:id", (req, res) => {
    console.log(req.user)
    res.send(`Get user with ID ${req.params.id}`)
})

const users = [{name: "Mikaela"}, { name: "Liam"}]
router.param("id", (req, res, next, id) => {
req.user = users[id]
next()  
})

module.exports = router