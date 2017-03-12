var DBConfig = {
	client: 'sqlite3',
    connection: {
      filename: "./sky.sqlite"
    }
};

console.log("IN DB.JS");
var knex = require('knex')(require('../knexfile.js').development);
var bookshelf = require('bookshelf')(knex);

module.exports.bookshelf = bookshelf;
