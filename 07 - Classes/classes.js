'use strict';

// * Declarando una clase
class Person {
    // * Atributos
    name = '';
    age = 0;

    // * Constructor
    constructor(name = '', age = 0) {
        console.log('* Person Init *');
        let sanitizedAge = parseFloat(age) || 0;
        sanitizedAge = sanitizedAge < 0 ? 0 : sanitizedAge;

        this.name = name.trim();
        this.age = sanitizedAge;
    }

    // * SETTERS
    // *    Diferencia entre no usar el 'set' o 'get'; se declararían como funciones/metodos.
    //      Al indicar 'set' o 'get' hace que se comporten como atributos (puedes hacer asignaciones)
    set setName(newName) {
        this.name = newName.trim();
    }

    set setAge(newAge) {
        let sanitizedAge = parseFloat(newAge) || 0;
        sanitizedAge = sanitizedAge < 0 ? 0 : sanitizedAge;

        this.age = sanitizedAge;
    }

    // * GETTERS
    get getName() {
        return this.name;
    }

    get getAge() {
        return this.age;
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

console.log('********');

console.log('Cass has', cass.getAge, 'years old.');
console.log('Alan has', alan.getAge, 'years old.');

cass.setAge = cass.getAge * 3;
alan.setAge = alan.getAge * 3;

console.log('********');

console.log('Cass now has', cass.getAge, 'years old.');
console.log('Alan now has', alan.getAge, 'years old.');