module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Sass
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },
    concat: {
      // Concatenate js files
      // https://github.com/gruntjs/grunt-contrib-concat
      options: {
        sourceMap: true  
      },
      dist: {
          src: [
              'js/vendor/jquery-1.12.0.min.js',
              'js/main.js'
          ],
          dest: 'js/build/main.js',
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'js/build/main.min.js': ['js/build/main.js']
        }
      }
    },
  
    // Watch
    watch: {
      stylesheets: {
        files: ['sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    },

    // Autoprefixer
    autoprefixer: {
      options: {
      },

      single_file: {
        options: {
          browsers: ['last 2 versions', 'ie >= 9', '> 1%', 'Firefox ESR']
        },
        src: 'css/main.css',
        dest: 'css/main.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('deploy', ['concat', 'uglify']);
};