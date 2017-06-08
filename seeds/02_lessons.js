
exports.seed = function(knex, Promise) {
  return knex('lessons').del()
    .then(function () {
      return knex('lessons').insert([
        {
          number: 1,
          name: 'General aircraft info',
          description: 'jhgkjhg',
          lessonOn: 'gobosh'
        },
        {
          number: 2,
          name: 'Limitations',
          description: 'This Section contains the limitations on the operation of this airplane, the marking

              of the instruments and the basic informative placards required for safe operation

              of the airplane, engine, the standard systems and the standard equipment.',
          lessonOn: 'gobosh'
        },
        {
          number: 3,
          name: 'Emergency Procedures',
          description: 'Section 3 contains information concerning controlling and procedures, which are

              to be utilized in emergency situations, and which may occur during airplane

              operation.',
          lessonOn: 'gobosh'
        }
      ]);
    });
};
