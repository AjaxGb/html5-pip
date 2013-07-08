module.exports = function(grunt) {
	grunt.initConfig({
		compass: {
			dist: {
				// set direcorties for compass
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
		// Watchh for any scss file to be  saved and changed
		watch: {
			css: {
				files: '**/*.scss',
				tasks: 'compass'
			},
			// live reload via live reload extension
			options: {
				livereload: true
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};
