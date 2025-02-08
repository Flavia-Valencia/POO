//Metodo con parametro
class Ejercicio {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludo(edad){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido} tengo ${edad} años.`);
        
    }
}

obj = new Ejercicio("Flavia", "Valencia")
obj.saludo(20)