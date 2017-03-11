var SkyBox = function(config) {

	var bookshelf = require('../bookshelf')(config);
	
	var SkyBox = bookshelf.Model.extend({
		tableName: 'sky_boxes'
	});
	return SkyBox;

}

module.exports = {
		SkyBox: SkyBox
};