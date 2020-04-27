const router = require("express").Router()

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const secret = require("../config/secret")

const Users = require("../social/social-model")

const generateToken = require("./generateToken")

router.post("/register", (req, res) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash
    
    Users.insertUser(user)
        .then(newUser => {
            user.id = newUser[0]
            delete user.password
            const token = generateToken(user)
            res.status(201).json({ user, token })
        })
        .catch(err => {
            res.status(500).json({ message: "Error", err })
        })
})



module.exports = router;
