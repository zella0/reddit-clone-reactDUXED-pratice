
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table)=>{
    table.increments();
    table.string('title');
    table.string('categories');
    table.string('content');
    table.integer('upvotes').defaultTo(0);
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
