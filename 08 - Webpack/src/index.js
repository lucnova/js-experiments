import _ from 'lodash';
import { greet } from "./js/greeter";

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
console.log(greet());