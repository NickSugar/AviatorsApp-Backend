
exports.up = function(knex, Promise) {
  return knex.schema.createTable('planes', table=>{
    table.increments()
    table.string('name')
    table.string('fullName')
    table.text('description')
    table.string('img_url')
    table.primary(['id', 'name'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('planes')
};
