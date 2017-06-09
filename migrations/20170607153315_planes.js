
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planes', table=>{
    table.string('name').primary()
    table.string('fullName')
    table.text('description')
    table.string('img_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('planes')
};
