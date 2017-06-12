//=========================
// Plane: Gobosh
// Lesson: 1
//=========================

//=========================
// Section Headers
//=========================

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lessonContents').del()
    .then(function () {
      // Inserts seed entries
      return knex('lessonContents').insert([
//=========================
// Plane: Gobosh
// Lesson: 1
//=========================
      //=========================
      // Section Headers
      //=========================
        {
          lesson_id: knex('lessons').where('lessonOn', 'gobosh').select('id').first(),
          order: 1.0,
          type: 'sectionHeader',
          content: 'Gobosh Descriptive Data and Definitions and Abbreviations'
        },
      //=========================
      // Data list
      //
      // ( = Sub header
      // > = data type
      // - = list item
      // : = data value
      // ; = end of line/list item
      // < = paragraph
      //=========================

        {
          lesson_id: knex('lessons').where('lessonOn', 'gobosh').select('id').first(),
          order: 1.1,
          type: 'dataList',
          content: `(Important Gobosh Characteristics;
            > Dimensions;
              - Span : 27.4 ft;
              - Lenght : 20.5 ft;
              - Height : 7.34 ft;
            > Landing gear;
              - Wheel track : 7.42 ft;
            > Engine;
              < Four cylinder, horizontally opposed BOMBARDIER ROTAX, model 912ULS

                engine. The cylinders are air-cooled, the cylinder heads, by liquid cooled. Dual

                ignition. 98.5 HP take-off power, 92.5 HP continuous power.`
        },{
          lesson_id: knex('lessons').where('lessonOn', 'gobosh').select('id').first(),
          order: 1.2,
          type: 'dataList',
          content: `(Important or helpful Abbreviations and definitions;
            > Air Speeds;
              - TAS : “TRUE AIRSPEED” means the airspeed of an air vessel, relative to the

                      undisturbed airflow. It is CAS corrected by the change of air density

                      depending on altitude and temperature.;

              - VNE : Maximum never exceed airspeed. This is a limit speed, which cannot be

              exceeded in any conditions.;

              - VNO : Maximum structural cruising speed. This is a limit speed which cannot be

              exceeded except in non-turbulent conditions, and then, only with care.;

              - VA : Maneuvering speed. Above this speed, rapid or full displacement of the

              control surfaces may in certain circumstances result in exceeding the

              maximum permissible loads of the structure.;

              - VFE : Maximum airspeed with wing flaps extended. This is the maximum

              permitted airspeed of the airplane with wing flaps extended.;

              - VS1 : Stalling speed, or minimum airspeed of steady flight, at which the

              airplane is steer able in any other configuration than the landing configu-
              ration.;

              - VS0 : Stalling speed, or minimum airspeed of steady flight, at which the

              airplane is steer able in the landing configuration.;

              - VX : Airspeed for the maximum angle of climb. This is the airspeed, at which

              the maximum increase of altitude over the shortest distance may be

              achieved.;

              - VY : Airspeed for the maximum rate of climb. This is the airspeed at which the

              maximum increase of altitude in the shortest time may be achieved.;`
        }
      ]);
    });
};
