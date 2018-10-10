
let rollup = require('rollup')
let rollupPostcss = require('rollup-plugin-postcss')
let postcssImport = require('postcss-import')

let log = console.log

let postcssOptions = {
	extract: 'dist/styles.css',
	sourceMap: true,
	plugins: [
		postcssImport()
	]
}

let watchOptions = {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs'
	},
	plugins: [
		rollupPostcss(postcssOptions)
	]
}

let watcher = rollup.watch(watchOptions)

watcher.on('event', event => {
	console.log('event', event.code)
	if (event.code === 'BUNDLE_END') {
		log('Watching files:', event.result.watchFiles)
	}
})


