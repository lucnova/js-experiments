// * Configuración de webpack
// *    Este es el archivo que se busca cuando se ejecuta el
// *    comando 'webpack' => npm run build en mi caso

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// * NOTA: Se debe servir la app en el protocolo http (no el protocolo file)

module.exports = {
    mode: 'development',    // Cambiar el modo de trabajo de webpack
    // * Por defecto se coloca el modo de producción, pero el modo de desarrollo
    // *    retira los comentarios y hace varias optimizaciones.

    output: {
        clean: true,    // * Limpia la carpeta 'dist' y reconstruye
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
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({     // * Control sobre el HTML
            title: 'Testing Webpack',
            template: './src/index.html',
        })
    ]
};