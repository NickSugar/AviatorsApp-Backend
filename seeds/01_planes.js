
exports.seed = function(knex, Promise) {
  return knex('planes').del()
    .then(function () {
      return knex('planes').insert([{
          name: 'Gobosh 700',
          description: 'This American light-sport aircraft was designed to comply with the US light-sport aircraft rules. It features a cantilever low-wing, a two-seats-in-side-by-side configuration enclosed open cockpit under a bubble canopy, fixed tricycle landing gear and a single engine in tractor configuration.',
          img_url: 'https://aviatorsapp.com/assets/images/gobosh.jpg'
          },{
          name: 'Cessna 182',
          description: 'The Cessna 182 Skylane is an American four-seat, single-engined light airplane, built by Cessna of Wichita, Kansas. It has the option of adding two child seats, installed in the baggage area.',
          img_url: 'https://aviatorsapp.com/assets/images/cessna.jpg'
          },{
          name: 'King Air 350i',
          description: 'The Beechcraft® King Air® 350i surpasses its predecessor’s high-caliber performance with more payload capability and range, a quieter interior with standard Wi-Fi, and Pro Line Fusion™ avionics with full touch-screen simplicity. The King Air is the world’s most popular business turboprop aircraft – a title never simply granted, but earned again and again with continuous enhancement over five decades. The King Air 350i. True to its legacy of innovation.',
          img_url: 'https://aviatorsapp.com/assets/images/kingAir.jpg'
          }
      ]);
    });
};
