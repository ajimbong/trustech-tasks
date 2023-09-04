const {createPool} = require('mysql2/promise');

// const pool = createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'todolist',
//   namedPlaceholders: true,
// });

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  namedPlaceholders: true,
});

module.exports = {
  pool,
};
