
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lessons', table=>{
    table.increments()
    table.integer('number')
    table.string('name')
    table.text('description')
    table.text('lessonOn')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lessons')
};
