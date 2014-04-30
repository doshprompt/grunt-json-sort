/* =========================================
 * Sort JSON files, either objects or arrays
 * -----------------------------------------
 */
module.exports = function (grunt) {
	'use strict';

    /**
     * recursively sort a given object
     *
     * @method recursiveSort
     * @param {Object} obj
     * @return {Object} sortedObject
     */
    function recursiveSort(obj) {
        var orderedProperties = Object.keys(obj).sort(),
            sortedObject = {},
            i,
            prop;

        if (typeof obj.length === 'number') {
            sortedObject = obj.sort();
        } else {
            for (i = 0; i < orderedProperties.length; i++) {
                prop = orderedProperties[i];

                sortedObject[prop] = obj[prop];

                // if it's an object, sort it!
                if (typeof obj[prop] === 'object') {
                    sortedObject[prop] = recursiveSort(obj[prop]);
                }
            }
        }

        return sortedObject;
    }

    /**
     * sort the given source file and rewrite its contents
     *
     * @method sortFile
     * @param {String} file Path to source file
     * @param {Integer} number of spaces per tab
     */
    function sortFile (file, spacing) {
        var jsonObject = grunt.file.readJSON(file),
            // if it's an array, use native method, else fallback to ours.
            sortedObject = recursiveSort(jsonObject);

        grunt.file.write(file, JSON.stringify(sortedObject, null, spacing));
        grunt.log.writeln('File sorted: ' + file.cyan);
    }

    // register my forked version of the 'sortJSON' grunt task
    grunt.registerMultiTask('sortJSON', 'Alphabetizing JSON files, regardless of their type.', function () {
        var tabSpace,
            jshintrc,
        	options = this.options({
                spacing: 4 // provide a default
            });

		if (options.jshintrc) {
			jshintrc = grunt.file.readJSON(options.jshintrc);
          	tabSpace = jshintrc.indent;
		} else {
		    tabSpace = options.spacing;
		}

        this.filesSrc.forEach(function (file) {
            sortFile(file, tabSpace);
        });
    });
};
