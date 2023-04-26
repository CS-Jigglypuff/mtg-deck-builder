const { Pool, Client } = require('pg');

const connectionString =
  'postgres://ytykkekn:iKhbySlfj_I9-4wDC4rgjxrw1_rod0IP@lallah.db.elephantsql.com/ytykkekn';

const pool = new Pool({ connectionString });
// const client = new Client({ connectionString });
// client.connect();

module.exports = {
  query: (text, params, callback) => {
    pool.query(text, params, callback);
  },
  // queryOne: (text, params, callback) => {
  //   client.query(text, params, callback);
  // },
};
