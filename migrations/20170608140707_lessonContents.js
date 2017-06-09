
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lessonContents', table=>{
    table.increments()
    table.integer('lesson_id')
      .references('lessons.id')
      .onDelete('CASCADE');
    table.decimal('order')
    table.string('type')
    table.text('content')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lessonContents')
};
