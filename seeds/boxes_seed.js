
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sky_boxes').del()
    .then(function () {
      // Inserts seed entries
      return knex('sky_boxes').insert([
        {id: 1, name: 'bedroom 1'},
        {id: 2, name: 'bedroom 2'},
        {id: 3, name: 'lounge'}
      ]);
    });
};
