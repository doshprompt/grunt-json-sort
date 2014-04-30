module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
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

    // Actually load this plugin's task.
    grunt.loadTasks('tasks');

    // Load all required grunt tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /*
     * $ grunt test
     *
     * task cleans folder, runs sortJSON task, then runs nodeunit
     */
    grunt.registerTask('test', ['clean', 'copy', 'sortJSON', 'nodeunit', 'clean']);
};