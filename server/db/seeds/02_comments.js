
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {content: 'root comment test', parent_post_id: 2},
        {content: '1st layer of root comment 1', parent_post_id: 2, parent_comment_id: 1},
        {content: '1st layer of root comment 1', parent_post_id: 2, parent_comment_id: 1},
        {content: '2nd layer of root comment 1', parent_post_id: 2, parent_comment_id: 2},
        {content: 'root 2nd comment test', parent_post_id: 2},
        {content: '1st layer of root comment 5', parent_post_id: 2, parent_comment_id: 5},
        {content: '1st layer of root comment 5', parent_post_id: 2, parent_comment_id: 5},
        {content: '2nd layer of root comment 5', parent_post_id: 2, parent_comment_id: 5}
      ]);
    });
};
