module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8080,
                    keepalive: true,
                    base: 'src'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['connect']);

};