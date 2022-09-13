/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('collection').del()
  await knex('collection').insert([
    {id: 1, title: 'Mass Effect 1', released: '20th November, 2007', genre: 'RPG', image: 'https://m.media-amazon.com/images/M/MV5BZjQxMThjZjAtNzZmMy00ODViLWFjNDAtMDJiOWUxZTQ0OGRiXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg' },
    {id: 2, title: 'Mass Effect 2', released: '26th January, 2010', genre: 'RPG', image: 'https://m.media-amazon.com/images/M/MV5BMjE4MTQwMjM1N15BMl5BanBnXkFtZTcwNjMzNjc2Mw@@._V1_.jpg' },
    {id: 3, title: 'Mass Effect 3', released: '6th March, 2012', genre: 'RPG', image: 'https://harrison101hd.files.wordpress.com/2013/07/images1.jpg' },
    {id: 4, title: 'Dragon Age: Origins', released: '3rd November, 2009', genre: 'RPG', image: 'https://images.g2a.com/600x900/1x1x0/dragon-age-origins-ultimate-edition-pc-gogcom-key-global/5ecf63e77e696c714b168903' },
    {id: 5, title: 'Tales of Arise', released: '9th September, 2021', genre: 'JRPG', image: 'https://image.api.playstation.com/vulcan/img/rnd/202107/2810/YRnlfjEwzN7CIq8NgWUHywNh.png' },
    {id: 6, title: 'Batman Arkham City', released: '18th October, 2011', genre: 'Action', image: 'https://m.media-amazon.com/images/M/MV5BZDE2ZDFhMDAtMDAzZC00ZmY3LThlMTItMGFjMzRlYzExOGE1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg' },
    {id: 7, title: 'Halo 2', released: '9th November, 2004', genre: 'FPS', image: 'https://m.media-amazon.com/images/M/MV5BOWNiMDM1N2UtMjZkZi00NjhlLTllNzMtZjEzNDk3NDBiZGVhXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg' },
    {id: 8, title: 'Halo 3', released: '25th September, 2007', genre: 'FPS', image: 'https://store-images.s-microsoft.com/image/apps.32635.13744479854832406.0affa1b0-655f-49af-ab66-9c9ccd71090c.75be220c-443f-4f73-b3af-4dfcd5da2e9c' },
    {id: 9, title: 'Halo Reach', released: '14th September, 2010', genre: 'FPS', image: 'https://www.mobygames.com/images/covers/l/638868-halo-the-master-chief-collection-halo-reach-xbox-one-front-cover.jpg' },
    {id: 10, title: 'Star Wars Knights of the Old Republic 2', released: '6th December, 2004', genre: 'RPG', image: 'https://e.snmc.io/lk/g/x/62b9dcdb31c1e090126e8d9cc2cc0bf3/6852262' },
  ]);
};
