module.exports = function(grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    // Project configuration.
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "copy": {
            react: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/react/dist/',
                        src: 'react.js',
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