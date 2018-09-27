exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([{
          title: 'Hi!',
          categories: 'Computer, Friends',
          content: 'Post about Friends'
        },
        {
          title: 'New Post',
          categories: 'Candy',
          content: 'Post about Candy'
        },
        {
          title: 'Test Post',
          categories: 'Test',
          content: 'This is a test post'
        }
      ]);
    });
};