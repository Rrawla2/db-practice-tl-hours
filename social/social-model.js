const db = require("../data/db-config")

module.exports = {
    getUsers,
    insertUser,
    getPosts,
    insertPost,
    getLikes
}

function getUsers() {
    return db("users")
}

function insertUser(user) {
    return db("users")
        .insert(user)
}

function getPosts() {
    return db("posts")
        .join("users", "posts.user_id", "users.id")
        .select("posts.post_title", "posts.post_content", "users.username")
}

function insertPost(post) {
    return db("posts")
        .insert(post)
}

function getLikes(post_id) {
    return db("likes")
        .where({ post_id })
}

