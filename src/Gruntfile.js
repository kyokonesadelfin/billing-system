module.exports = function(grunt) {
    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'dist/scripts/main.js': ['src/scripts/*.js']
          }
        }
      },
      cssmin: {
        target: {
          files: {
            'dist/styles/main.css': ['src/styles/*.css']
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['uglify', 'cssmin']);
  };
  
  module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
    });
    // Load the Grunt plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Register the default tasks
    grunt.registerTask('default', ['uglify', 'concat', 'watch']);
  };