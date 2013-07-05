module.exports = function(grunt) {
 grunt.initConfig({
  compass: {
    dist: {
      options: {
        sassDir: 'sass',
        cssDir: 'stylesheets'
      }
    },
    dev: {
      options: {
        sassDir: 'sass',
        cssDir: 'stylesheets'
      }
    }
  },
  watch: {
    css: {
      files: '**/*.scss',
      tasks: 'compass',
      options: {
        livereload: true
      }
    }
  }
 });

grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
};
