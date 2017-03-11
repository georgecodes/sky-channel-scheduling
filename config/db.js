var DBConfig = {
	client: 'sqlite3',
    connection: {
      filename: "./sky.sqlite"
    }
};

var knex = require('knex')(require('../knexfile.js').developments);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;
