'use strict'

module.exports = {
	// This function performs various operations based on the type of its argument
	dataTypes: function(data) {

		switch (typeof data) {
			// Return the argument if it is a boolean
			case 'boolean':
				return data;

			// Return a string stating whether the argument is equal to, less than or
			// greater than 100 if it is a number
			case 'number':
				if (data === 100) {
					return 'equal to 100';
				} else if (data < 100) {
					return 'less than 100';
				} else return 'more than 100';

			// Return the length of the argument if it is a string
			case 'string':
				return data.length;

			// Call the argument and return the result if it is a function
			case 'function':
				return data(true);

			// Return 'no value' if the argument is undefined
			case 'undefined':
				return 'no value';

			default:
				// Return the value at the third index if it is an array (or 
				// undefined if there is no third index)
				if (Array.isArray(data)) {
					if (data.length < 3) {
						return;
					} else return data[2];
				} else if (data === null) return 'no value'; // Return 'no value' if the argument is null

		}

	}
	
}