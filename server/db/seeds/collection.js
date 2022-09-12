/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('collection').del()
  await knex('collection').insert([
    {id: 1, title: 'Mass Effect 1', released: '20th November, 2007', genre: 'RPG', image: 'me1.jpg' },
    {id: 2, title: 'Mass Effect 2', released: '26th January, 2010', genre: 'RPG', image: 'me2.jpg' },
    {id: 3, title: 'Mass Effect 3', released: '6th March, 2012', genre: 'RPG', image: 'me3.jpg' },
    {id: 4, title: 'Dragon Age: Origins', released: '3rd November, 2009', genre: 'RPG', image: 'dragon.jpg' },
    {id: 5, title: 'Tales of Arise', released: '9th September, 2021', genre: 'JRPG', image: 'tales.jpg' },
    {id: 6, title: 'Batman Arkham City', released: '18th October, 2011', genre: 'Action', image: 'batman.jpg' },
    {id: 7, title: 'Halo 2', released: '9th November, 2004', genre: 'FPS', image: 'halo2.jpg' },
    {id: 8, title: 'Halo 3', released: '25th September, 2007', genre: 'FPS', image: 'halo3.png' },
    {id: 9, title: 'Halo Reach', released: '14th September, 2010', genre: 'FPS', image: 'Reach.jpeg' },
    {id: 10, title: 'Star Wars Knights of the Old Republic 2', released: '6th December, 2004', genre: 'RPG', image: 'knights-of-the-old.jpeg' },
  ]);
};
