
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('sky_boxes', (table) => {
      table.increments('id').primary();
      table.string('name');
    });
};

exports.down = function(knex, Promise) {
  
};
