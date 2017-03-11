module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    express: {
            test: {
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
    output: './reports/report.html',
    theme: 'bootstrap',
    debug: true
  },
  features : []
},
  });

  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-cucumberjs');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask("spec", ["express:test", "cucumberjs"]);
  grunt.registerTask('apiTests', [
        'express:test',
        'mochaTest',
        'express:test:stop'
    ]);
  grunt.registerTask('spec', [
      'express:test',
      'cucumberjs',
      'express:test:stop'
    ]);

  grunt.registerTask('allTests', [
    'express:test',
    'mochaTest',
    'cucumberjs',
    'express:test:stop']
  );

};