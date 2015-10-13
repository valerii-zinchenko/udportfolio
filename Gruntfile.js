'use strickt';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-pagespeed');

	var ngrok = require('ngrok');

	grunt.initConfig({
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
};
