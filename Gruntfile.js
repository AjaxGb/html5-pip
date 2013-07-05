module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/stylesheets'
				}
			},
			dev: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/stylesheets'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: 'compass'
			},
			options: {
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
