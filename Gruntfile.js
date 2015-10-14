'use strickt';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-pagespeed');

	grunt.initConfig({
		uglify: {
			compress: {
				files: {
					'js/perfmatters.min.js': ['js/perfmatters.js']
				}
			}
		},

		cssmin: {
			compress: {
				files: {
					'css/style.min.css': ['css/style.css'],
					'css/print.min.css': ['css/print.css']
				}
			}
		},

		pagespeed: {
			options: {
				nokey: true,
				locale: 'en_Gb',
				threshold: 1
			},
			local: {
				options: {
					strategy: 'desktop'
				}
			},
			mobile: {
				options: {
					strategy: 'mobile'
				}
			}
		}
	});

	grunt.registerTask('speed', 'Run pagespeed with ngrok', function(url){
		grunt.config.set('pagespeed.options.url', url);
		grunt.task.run('pagespeed');
	});

	grunt.registerTask('default', ['uglify', 'cssmin']);
};
