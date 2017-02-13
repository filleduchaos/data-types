'use strict'

module.exports = {
	dataTypes: function(data) {

		switch (typeof data) {
			case 'boolean':
				return data;

			case 'number':
				if (data === 100) {
					return 'equal to 100';
				} else if (data < 100) {
					return 'less than 100';
				} else return 'more than 100';

			case 'string':
				return data.length;

			case 'function':
				return data(true);

			default:
				if (Array.isArray(data)) {
					if (data.length < 3) {
						return;
					} else return data[2];
				} else return 'no value';

		}

	}
	
}