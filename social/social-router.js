const express = require("express")

const router = express.Router()

const Social = require("./social-model.js")

router.get("/users", (req, res) => {
    Social.getUsers()
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve any users", err })
        })
})

router.get("/posts", (req, res) => {
    Social.getPosts()
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve any posts", err })
        })
})

module.exports = router;