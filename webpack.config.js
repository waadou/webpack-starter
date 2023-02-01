const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
		 *
		 * Each time we build our project, many things happen:
		 *  - The [contenthash] is replaced with a new generated hash.
		 *  - A new JS file with the name [name][contenthash].js is generated
		 *  - Even if we delete the dist folder, it will be recreated.
		 *  - With the help of th html-webpack-plugin, the index.html file is generated based on
		 * the contents of the template.html file in the src folder.
		 */
		filename: "[name][contenthash].js",
		clean: true, // Remove previously generated files from the dist folder
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

	plugins: [
		/**
		 *
		 */
		new HtmlWebpackPlugin({
			title: "Webpack App", // The title to use for the generated HTML(in the head tag)
			filename: "index.html", // The name of the file that will be generated in the dist folder
			template: "./src/template.html",
		}),
	],

	/** Source map */
	devTool: "source-map",

	/**
	 * Dev server
	 */
	devServer: {
		port: 3000,

		/* Enable gzip compression for everything served */
		compress: true,
		open: true, // Tells dev-server to open the browser after server had been started.
		hot: true,
		historyApiFallback: true,

		/** Content that will be served */
		static: {
			directory: path.join(__dirname, "dist"),
		},
		client: {
			/**
			 * Allows to set log level in the browser, e.g. before reloading, before an error or when
			 * Hot Module Replacement is enabled.
			 */
			logging: "info",

			/**
			 * Shows a full-screen overlay in the browser when there are compiler errors or warnings.
			 */
			overlay: true, // is equivalent to the object: { errors : true, warnings: true }
		},
	},
};
