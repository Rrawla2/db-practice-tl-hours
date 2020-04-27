const express = require("express")
const restricted = require("./auth/restricted-middleware")
const socialRouter = require("./social/social-router.js")
const authRouter = require("./auth/auth-router")

const server = express()

server.use(express.json())
server.use("/social", restricted, socialRouter)
server.use("/auth", authRouter)

server.get("/", (req, res) => {
    res.json({ message: "It's ALIVE" })
})

module.exports = server;