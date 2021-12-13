'use strict';

// * Declarando una clase
class Person {
    // * Atributos
    name = ''; 
    age = 0;   

    // * Constructor
    constructor(name = '', age = 0) {
        console.log('*Instanciando Persona*');

        this.name = name;
        this.age = age;
    }

    // * Métodos
    greet() {
        return `Hi! My name is ${this.name}, and I'm ${this.age} years old.`;
    }
}

// * Instanciando clases (creando objetos)
const alan = new Person('Alan', 24);
const cass = new Person('Cassandra', 21);

console.log(cass.greet());
console.log(alan.greet());