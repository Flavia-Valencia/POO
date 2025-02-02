class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad){
        if (nuevaEdad > 0) {
            this._edad = nuevaEdad;
        } else {
            console.log('La edad deber ser mayor que 0.');
            
        }
    }
}

const persona1 = new Persona("Daniel", 20);
persona1.edad = 30;
console.log(persona1.edad);

persona1.edad = -5;
