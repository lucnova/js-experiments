import '../css/Greeter.css';
// * Webpack por defecto espera leer un archivo 'js'
//      y no un 'css'. 
// * Configuar 'style-loader' y 'css-loader' para usar importacion de estilos

export const Greeter = (greetWho = 'there') => {
    const greeterDiv = document.createElement('p');
    greeterDiv.textContent = `Hey ${greetWho}!`;

    return greeterDiv;
}