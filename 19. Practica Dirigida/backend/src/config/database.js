import Sequelize from 'sequelize'
import pg from 'pg'

const hostname = 'localhost'; //127.0.0.1
const username = 'postgres';
const password = 'pg4dm1n$'; // 
const database = 'marcasdb';
const port = 5432;
const dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  port,
  dialect,
  dialectModule: pg
});

export default sequelize;