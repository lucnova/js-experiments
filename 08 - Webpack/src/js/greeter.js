import '../css/Greeter.css';
// * Webpack por defecto espera leer un archivo 'js'
//      y no un 'css'. 
// * Configuar 'style-loader' y 'css-loader' para usar importacion de estilos

// * Por defecto, estos paquetes importan los estilos en el javascript
//      (aka. no genera un archivo css en el 'dist')

// * mini-css-extract-plugin solventa el problema para incluir el archivo css
//      como tal

export const Greeter = (greetWho = 'there') => {
    const greeterDiv = document.createElement('p');
    greeterDiv.textContent = `Hey ${greetWho}!`;

    return greeterDiv;
}