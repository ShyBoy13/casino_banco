const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost', 
  user:'roman', 
  database: 'casino_banco',
  password: 'rrrc130301',
  connectionLimit: 5
})

exports.sendQuery = async function sendQuery(query, params) {
  let conn 
  try {
    conn = await pool.getConnection()
    const res = await conn.query(query, params)
    return res
  } catch (err) {
    throw err
  } finally {
    conn.end();
  }
}

