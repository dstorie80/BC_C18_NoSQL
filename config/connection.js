const { conect, connection } = require('mongoose');

const connectionString = 'mongodb://1270.0.0.1:27017/databasetbd'

connection(conectionString);

module.exports = connection;