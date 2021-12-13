// * Rutas Privadas
// *        Para definir una ruta privada se le coloca un '#' al inicio
// *        del nombre del atributo.

// * Al día de hoy 12 de Diciembre 2021 los atributos privados ya son aceptados en VSCode
// * y la mayoria de navegadores modernos ya lo aceptan.

// * Métodos privados aun no implementados.

class Rectangle {
    width = 0;
    height = 0;
    #area = 0;  // Atributo privado

    constructor(width = 0, height = 0) {
        this.width = width;
        this.height = height;

        this.#area = width * height;
    }

    recalculateArea() {
        this.#area = this.width * this.height;
    }
}

const myRectangle = new Rectangle(10, 30);
myRectangle.recalculateArea();
console.log('Rectangle:', myRectangle);