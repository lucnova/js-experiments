import './styles.css';

import { Test } from "./js/Test";
import { Greeter } from "./js/Greeter";


document.body.appendChild(Test());
document.body.appendChild(Greeter(`y'all, Scott Here`));