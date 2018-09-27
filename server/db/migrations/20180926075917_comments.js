exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.string('content');
    table.integer('upvotes').defaultTo(0);
    table.integer('parent_post_id')
      .notNullable()
      .references('id')
      .inTable('posts')
      .onDelete('cascade')
      .index();
    table.integer('parent_comment_id')
      .references('id')
      .inTable('comments')
      .onDelete('cascade')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('comments');
};