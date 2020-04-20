
exports.up = function(knex) {
  return knex.schema
    .createTable("users", table => {
        table.increments();
        table.text("username", 128);
    })
    .createTable("posts", table => {
        table.increments();
        table.text("post_title", 128);
        table.text("post_content");
        table.integer("user_id")
            .unsigned()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
    .createTable("likes", table => {
        table.increments();
        table.integer("user_id")
            .unsigned()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
        table.integer("post_id")
            .unsigned()
            .references("id")
            .inTable("posts")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })

};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists("likes")
    .dropTableIfExists("posts")
    .dropTableIfExists("users")
};
