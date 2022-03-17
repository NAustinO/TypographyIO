const { Pool, Client } = require('pg');
require('dotenv').config({path: '../.env'});

const PG_URI = process.env.DB_CONNECTION_URI;
const pool = new Pool({ 
  connectionString: PG_URI,
});

module.exports = pool; 


// to insert 
// example INSERT INTO gamelog VALUES (nextval('game_id_sequence'),'nick',3, '2022-01-26T19:25:57.120Z')
// example INSERT INTO users VALUES (nextval('user_id_sequence'),username , date_created, 'date_updated')

/*
Sequences

*/

