import _ from 'lodash';
import { Greeter } from "./js/Greeter";

const Test = () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
};

document.body.appendChild(Test());
document.body.appendChild(Greeter(`y'all, Scott Here`));