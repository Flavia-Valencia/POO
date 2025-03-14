const Programacion1 = {
    materia1() {
     return `${this.nombre} tiene clases de programacion`
    },
 };
 
 const Logica2 = {
     materia2(){
          return `${this.nombre} tiene clases de Logica2`
  
     },
 };
 
class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
    }

    presentarse(){
        return `Holaa soy ${this.nombre}`
    }
}

class Matricula extends Estudiante {
    constructor(nombre) {
        super(nombre);
    }
}
Object.assign(Matricula.prototype, Programacion1, Logica2);

const miEstudiante = new Matricula("Flavia");

console.log(miEstudiante.presentarse());
console.log(miEstudiante.materia1());
console.log(miEstudiante.materia2());
