module.exports = grunt => {
    grunt.loadNpmTasks("grunt-contrib-concat");
}

grunt.initConfig({
	concat: {
		css: {
			src: [
				'./assets/css/header.css',
				'./assets/css/section.css',
				'./assets/css/footer.css'
			],
			dest: './dist/all.css'
		},
		js: {
			src: [
				'./assets/js/site.js',
				'./assets/js/utils.js'
			],
			dest: './dist/all.js'
		}
	}
});

