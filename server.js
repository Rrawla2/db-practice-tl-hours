const express = require("express")

const socialRouter = require("./social/social-router.js")

const server = express()

server.use(express.json())
server.use("/social", socialRouter)

module.exports = server;