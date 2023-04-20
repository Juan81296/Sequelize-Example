const sql = require("mssql");

const dbSettings = {
  user: "juant",
  password: "juantp",
  server: "localhost",
  database: "TEST",
  dialect: "mssql",
  synchronize: true,
  trustServerCertificate: true,
};

async function getConnection() {
  try {
    console.log('a ver');
    const pool = await sql.connect(dbSettings);
    console.log('POOOL', pool);
      const queryResult = await pool.request().query('SELECT 1')
  console.log('QUERY RESULT', queryResult)
    return pool;
  } catch (error) {
    return error;
  }
}

module.exports = getConnection;