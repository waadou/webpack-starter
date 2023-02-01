const path = require("path");

module.exports = {
	/**
	 * The file size will depend on the mode. If the mode is set to 'production', then
	 * the code will be minified and the file size will be very small. Any found comment
	 * will be removed. In the other hand('development' mode), the code if formatted, the
	 * file size is bigger and any comment found is kept unchanged.
	 */
	mode: "production",

	/**
	 * If single entry point, then we don't need to use an object.
	 *
	 * entry: path.resolve(__dirname, "src/index.js"),
	 *
	 *
	 * Multiple entry points
	 */
	entry: {
		"waad.app.bundle": path.resolve(__dirname, "src/index.js"),
	},

	/**
	 * The path where compiled file will reside.
	 */
	output: {
		path: path.resolve(__dirname, "dist"),

		/**
		 * In case of multipe entry points, the '[name]' in the value("[name].js")
		 * for the key 'filename' will be replaced with the the key of the entry point object
		 * (in our case, waad.app.bundle).
		 */
		filename: "[name].js",
	},

	/**
	 * Loaders
	 */
	module: {
		/**
		 * In the following array, we define object for each loader (each file type)
		 */
		rules: [
			/** Infos for the Sass loader */
			{
				test: /\.scss$/, // For Sass files
				use: ["style-loader", "css-loader", "sass-loader"], // The order matters, from bottom to top
			},

			/** Infos for the Sass loader 
			{
				test: /\.js$/,
			},
            */
		],
	},

	/**
	 * Dev server
	 */
	devServer: {},
};
