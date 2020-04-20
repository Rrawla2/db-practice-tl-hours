
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 1, post_title: "I like coffee", post_content: "Only black coffee"},
        {user_id: 2, post_title: "Black coffee SUCKS", post_content: "Cappuccino"},
        {user_id: 3, post_title: "I like to read", post_content: "I like to read fiction"}
      ]);
    });
};
