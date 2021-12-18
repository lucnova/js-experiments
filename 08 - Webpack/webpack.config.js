// * Configuración de webpack
// *    Este es el archivo que se busca cuando se ejecuta el
// *    comando 'webpack' => npm run build en mi caso

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',    // Cambiar el modo de trabajo de webpack
    // * Por defecto se coloca el modo de producción, pero el modo de desarrollo
    // *    retira los comentarios y hace varias optimizaciones.
    module: {   // * Se coloca la config de webpack
        rules: [
            // * Mover el archivo 'index.html' a la carpeta 'dist'
            {
                test: /\.html$/i, // * Condición que evalua webpack al estar barriendo los archivos
                // * Es un patrón regex; en este caso evalua si es un archivo .html
                loader: 'html-loader',
                options: {
                    //sources: false,     
                    minimize: false,     // * Minificar HTML
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
};