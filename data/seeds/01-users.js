
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "coffee_guy"},
        {username: "kg4083"},
        {username: "Shya"}
      ]);
    });
};
