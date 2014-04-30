module.exports = function(grunt) {
    'use strict';

    // default test task
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sortJSON: {
            noOptions: {
                src: ['tests/results/objectFile.json']
            },
            customSpacing: {
                src: ['tests/results/customSpacing.json'],
                options: {
                    spacing: 2
                }
            },
            jshintSpacing: {
                src: ['tests/results/jshintSpacing.json'],
                options: {
                    jshint: true,
                    jshintrc: 'tests/.jshintrc'
                }
            },
            sortedArr: {
                src: ['tests/results/arrayFile.json']
            },
            sortMix: {
                src: ['tests/results/mixedFile.json']
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'tests/template/',
                src: '**',
                dest: 'tests/results/'
            }
        },
        clean: {
            src: ['tests/results/']
        },
        nodeunit: {
            all: ['tests/sortJSON.test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Test tasks cleans folder, runs sortJSON task, then runs nodeunit
    grunt.registerTask('test', ['clean', 'copy', 'sortJSON', 'nodeunit', 'clean']);
};