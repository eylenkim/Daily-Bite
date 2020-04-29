const path = require('path');



// This code allows webpack to take this object, configure it, and work with it

module.exports = {
	//entry helps webpack start looking for the files/dependencies to bundle
	entry: './src/js/index.js', 
	//output tells webpack where to save/bundle the file
	output: {
		/*path.resolve is a method available from the path package we added from line 1.
		__dirname is the current absolute path, and dist/js is where we want our current
		bundle to live. In other words, bundle.js will live in dist/js */
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'bundle.js'
	}
	
};