module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    // Project configuration.
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowerrc: grunt.file.readJSON('.bowerrc'),
        "dirs": {
            'vendor': '<%= bowerrc.directory %>'
        },
        "bower": {
            install: {
                options: {
                    targetDir: '<%= dirs.vendor %>',
                    cleanTargetDir: true,
                    layout: 'byComponent',
                    install: true,
                    copy: false,
                    verbose: true
                }
            }
        },
        "copy": {
            react: {
                files: [
                    {
                        expand: true,
                        cwd: 'vendor/react/',
                        src: 'react.min.js',
                        dest: 'web/built/',
                        flatten: true,
                        filter: 'isFile'
                    },
                ],
            }
        },
        "watch": {
            js: {
                files: ["assets/jsx/*.jsx"],
                tasks: ["babel"]
            }
        },
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "web/built/todolist.js": "assets/jsx/todolist.jsx"
                }
            }
        }
    });

    grunt.registerTask("default", ["copy", "babel"]);

};