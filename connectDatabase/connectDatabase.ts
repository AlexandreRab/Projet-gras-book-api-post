import { createConnection, Connection, getConnectionManager } from 'typeorm';

const connectionManager = getConnectionManager();
const connection = connectionManager.create({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
});

connection.connect().then();
