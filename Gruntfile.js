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
  