'use strict';

// * Declarando una clase
class Person {
    // * Estáticos
    // *    Usados para cuando requieres de atributos o métodos que son necesarios para uso interno.
    static _instanceCount = 0;
    static get getInstanceCount() {
        return Person._instanceCount;
    }

    // * Atributos
    name = '';
    age = 0;

    // * Constructor
    constructor(name = '', age = 0) {
        let sanitizedAge = parseFloat(age) || 0;
        sanitizedAge = sanitizedAge < 0 ? 0 : sanitizedAge;

        this.name = name.trim();
        this.age = sanitizedAge;

        Person._instanceCount++;
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
        return `Hello. My name is ${this.name} and I'm ${this.age} years old.`;
    }
}

class Spartan extends Person {
    proyect = 'ORION';
    tagNumber = 1;

    constructor(name, age, proyect, tagNumber) {
        // * Con super puedes hacer referencia a la Clase Padre
        // *    super.[X]
        // *    Ej. super.getAge
        super(name, age);

        this.proyect = proyect;
        this.tagNumber = tagNumber;
    }

    salute() {
        return `${this.name} ${this.tagNumber} reporting in.`;
    }
}


// * Instanciando clases (creando objetos)
const masterChief = new Spartan('John', 46, 'SPARTAN II', 117);

console.log(masterChief.salute());
