'use strict';

// * Singleton
// *    Si solamente se requiere una instancia única de una clase, sin importar cuantas
// *    veces se llame a 'new'; se implementa un singleton.
// *    Usado en su mayoría para implementar una clase/objeto global.
// *    Ej. Llevar el control de una app global, datos para compartirlos en toda la app,
// *        bases de datos.

// *    Beneficios: Ahorran memoria, y todas las instancias creadas apuntan a la misma instancia en memoria.

class ChipsDubbo {
    static currentInstance;     // Lá instancia única que se guardará sobre la misma clase.
    // * Si se manda a llamar new, se devuelve esta misma

    name = 'Chips Dubbo';
    phrase = '';

    constructor(phrase = '') {
        // * Evitar crear mas instancias
        if (!!ChipsDubbo.currentInstance) {     // -> undefined -> true -> false       'algo' -> false -> true
            return ChipsDubbo.currentInstance;
        }

        ChipsDubbo.currentInstance = this;
        this.phrase = phrase;

        // * Por defecto un constructor devuelve 'this': return this;
    }

    get getName() {
        return this.name;
    }

    spreadWisdom() {
        return this.phrase;
    }
}

const myBuddyChips = new ChipsDubbo(`Whoa... it's like a postcard! Dear Sarge, kicking ass in outer space. Wish you were here.`);
console.log(myBuddyChips.getName);
console.log(myBuddyChips.spreadWisdom());

console.log('********');

const notChips = new ChipsDubbo(`I saw your pod hit... You're one lucky S.O.B.`);
console.log(notChips.getName);
console.log(notChips.spreadWisdom());