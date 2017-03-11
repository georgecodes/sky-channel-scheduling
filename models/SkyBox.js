var bookshelf = require('../bookshelf');

var SkyBox = bookshelf.Model.extend({
	tableName: 'sky_boxes'
});

module.exports = {
	SkyBox: SkyBox
};