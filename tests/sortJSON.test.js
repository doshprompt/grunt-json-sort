//
// nodeunit tests for sortJSON task
//

var grunt = require('grunt');

module.exports = {
    sortJSONObject: function (test) {
        test.expect(1);
    
        var expect = grunt.file.read('tests/expect/objectFile.json'),
            result = grunt.file.read('tests/results/objectFile.json');
        test.equal(expect, result, 'should process a basic sortJSON task on an object');
    
        test.done();
    },
    sortJSONArray: function (test) {
        test.expect(1);
    
        var expect = grunt.file.read('tests/expect/arrayFile.json'),
            result = grunt.file.read('tests/results/arrayFile.json');
            test.equal(expect, result, 'should process a basic sortJSON task on an array');
    
        test.done();
    },
    customJSONSpacing: function (test) {
        test.expect(1);
    
        var expect = grunt.file.read('tests/expect/customSpacing.json'),
            result = grunt.file.read('tests/results/customSpacing.json');
        test.equal(expect, result, 'should process a sortJSON task with custom spacing');
    
        test.done();
    },
    jshintJSONSpacing: function (test) {
        test.expect(1);

        var expect = grunt.file.read('tests/expect/jshintSpacing.json'),
            result = grunt.file.read('tests/results/jshintSpacing.json');
        test.equal(expect, result, 'should process a sortJSON task with jshint spacing');

        test.done();
    }
};