'use strict'

module.exports = {
	dataTypes: function(data) {

		switch (typeof data) {
			case 'boolean':
				return data;
				
			default:
				return 'no value';
		}

	}
	
}