const getConnection = require('./config/config')
const express = require('express')
const app = express();

async function connect() {
  const conexion = await getConnection();
  console.log('CONEXION', conexion);
}
connect();