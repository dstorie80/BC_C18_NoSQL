const { conect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/ICQDB'

connection(conectionString);

module.exports = connection;