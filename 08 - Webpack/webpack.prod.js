// * Configuración de webpack
// *    Este es el archivo que se busca cuando se ejecuta el
// *    comando 'webpack' => npm run build en mi caso

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

// * PLUGINS PARA PRODUCCIÓN
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// * NOTA: Se debe servir la app en el protocolo http (no el protocolo file)

module.exports = {
    mode: 'production',    // Cambiar el modo de trabajo de webpack
    // * Por defecto se coloca el modo de producción, pero el modo de desarrollo
    // *    retira los comentarios y hace varias optimizaciones.

	// * DESARROLLO (production)
	//		- production

    output: {
        clean: true,    // * Limpia la carpeta 'dist' y reconstruye
		filename: 'main.[contenthash].js',	// Agregar hash a script
    },

    module: {   // * Se coloca la config de webpack
        rules: [
            // * Mover el archivo 'index.html' a la carpeta 'dist'
            {
                test: /\.html$/, // * Condición que evalua webpack al estar barriendo los archivos
                // * Es un patrón regex; en este caso evalua si es un archivo .html
                loader: 'html-loader',
                options: {
                    sources: false,     // * Mueve las locaciones de los archivos también
                    minimize: false,    // * Minificar HTML
                },
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
			{
				test: /\.(png|jpe?g|gif)/,	// Expresión regular para las imagenes
				// Png, o Jpg (jpeg) o gifs
				loader: 'file-loader',
			}
        ]
    },

	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
		]
	},

    plugins: [
        new HtmlWebPackPlugin({     // * Control sobre el HTML
            title: 'Testing Webpack',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            //filename: '[name].css',
            filename: '[name].[fullhash].css',
            // * fullhash devuelve un hash se puede usar para
            //      asignar un nuevo archivo de estilos y no se almacene en memoria
            //      en caso de que se quiera forzar cambios de estilo
            ignoreOrder: false
        }),
		new CopyPlugin({
			patterns: [
				{ from: "src/assets/", to: "assets/" },
			],
		}),
    ]
};