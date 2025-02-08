//Metodo con parametros por defecto.
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar(otroNombre="amigo"){
        console.log(`Hola ${otroNombre}, soy ${this.nombre}`);
    }
}
obj = new Persona("Yamileth");
obj.saludar("Chero");