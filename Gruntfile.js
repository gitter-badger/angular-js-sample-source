/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */




module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ["src/dist"],
        'angular-builder': {
            options: {
                mainModule: 'sampleApp'
            },
            app: {
                src: 'src/dev/**/*.js',
                dest: 'src/dist/<%= pkg.name %>.min.js'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
//              port: 9999,
                singleRun: true,
                browsers: ['Chrome', 'PhantomJS'],
                logLevel: 'INFO'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-angular-builder');
    grunt.loadNpmTasks('grunt-karma');


    grunt.registerTask('release', ['clean', 'angular-builder']);
    grunt.registerTask('debug', ['clean', 'angular-builder::debug']);
    grunt.registerTask('default', [ 'release', 'karma']);


};