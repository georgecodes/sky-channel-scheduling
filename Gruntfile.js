module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    express: {
            test: {
                options: {
                    script: './express_handlebars.js'
                }
            },
            apiTest: {
              options: {
                script: './server.js'
              }
            }

        },
  mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          clearRequireCache: true
        },
        src: ['test/*.js']
      },
    
},

  cucumberjs: {
  options: {
    format: 'html',
    output: './public/report.html',
    theme: 'foundation'
  },
  features : []
},
connect: {
    express_handlebars: {
      port: 3000
    },
    
  }
  });

  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-cucumber');
  grunt.loadNpmTasks('grunt-cucumberjs');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask("spec", ["express:test", "cucumberjs"]);
  grunt.registerTask('apiTests', [
        'express:apiTest',
        'mochaTest',
        'express:apiTest:stop'
    ]);

};