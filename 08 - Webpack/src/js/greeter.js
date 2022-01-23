import '../css/Greeter.css';
// * Webpack por defecto espera leer un archivo 'js'
//      y no un 'css'. 
// * Configuar 'style-loader' y 'css-loader' para usar importacion de estilos

// * Por defecto, estos paquetes importan los estilos en el javascript
//      (aka. no genera un archivo css en el 'dist')

// * mini-css-extract-plugin solventa el problema para incluir el archivo css
//      como tal

// * IMPORTAR IMAGEN
import webpackLogo from '../assets/img/webpack-logo.png'
// * No se puede importar archivos por defecto en webpack, es necesario
//		otro paquete para cargarlos (file-loader https://v4.webpack.js.org/loaders/file-loader/)
//	Se tiene que configurar también en el archivo 'webpack.config.js'
// * Es una manera bonita de obtener una URL como importación.


export const Greeter = (greetWho = 'there') => {
    const greeterDiv = document.createElement('p');
    greeterDiv.textContent = `Hey ${greetWho}!`;

	//console.log('webpackLogo', webpackLogo);
	const webpackImg = document.createElement('img');
	webpackImg.src = webpackLogo;

	greeterDiv.appendChild(webpackImg);

    return greeterDiv;
}