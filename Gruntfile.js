module.exports = function(grunt) {

  grunt.initConfig({
    
    env : {
      options : {
      
      },
      dev : {
        NODE_ENV : 'development'
      },
      test: {
        NODE_ENV: 'test'
      }
    },
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
        src: ['test/functional/api/*.js']
      }
    },
    
    knex: { 
      config: {
        development: {
          client: 'sqlite3',
          useNullAsDefault: true,
            connection: {
              filename: './databases/dev.sqlite3'
            },
            migrations: {
              directory: __dirname + '/migrations'
            },
            seeds: {
              directory: __dirname + '/seeds'
            }
          },
          test: {
            client: 'sqlite3',
            useNullAsDefault: true,
              connection: {
                filename: './databases/test.sqlite3'
              },
              migrations: {
                directory: __dirname + '/migrations'
              },
              seeds: {
                directory: __dirname + '/seeds'
              }
        
            }
          }
      },
      cucumberjs: {
        options: {
          format: 'html',
          output: './reports/report.html',
          theme: 'bootstrap',
          debug: true
        },
        features : []
      }
    }
  );

  grunt.loadNpmTasks('grunt-selenium-webdriver');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-cucumberjs');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-knex');
  grunt.loadNpmTasks('grunt-env');

  grunt.registerTask('apiTests', function() {
    grunt.option('env', 'test');
    var tasks = 
    ['env:test',
        'migrate:run',
        'seed:run',
        'express:test',
        'mochaTest',
        'express:test:stop'];
      tasks.forEach(function(taskName) {    
           grunt.task.run(taskName);   
                   });});

  grunt.registerTask('spec', [
      'express:test',
      'cucumberjs',
      'express:test:stop'
    ]);

  grunt.registerTask('allTests', [
    'env:test',
    'migrate:run',
    'seed:run',
    'express:test',
    'mochaTest',
    'cucumberjs',
    'express:test:stop']
  );

};