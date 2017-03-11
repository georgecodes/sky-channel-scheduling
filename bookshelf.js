
var Bookshelf = function(config) {
	const knex = require('knex')(require('./knexfile')[config.environment]);

	const bookshelf = require('bookshelf')(knex);
	return bookshelf;
}

module.exports = function(config) {
	return new Bookshelf(config);
}