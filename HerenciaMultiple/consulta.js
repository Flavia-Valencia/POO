const Revision = {
    Diagnostico (){
        return `El canino ${this.nombre} tiene una lesion en la pata trasera.`
    }
}

const Curacion = {
    Curar (){
        return `${this.nombre} se le coloco yeso.`
    }
}

const Inyeccion = {
    Vacunar(){
        return `${this.nombre} se le inyecto medicina para la rabia.`
    }
}

class PacienteCanino {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Consulta extends PacienteCanino{
    constructor(nombre) {
        super(nombre);
    }
}

Object.assign(Consulta.prototype, Revision, Curacion, Inyeccion);

const miPacienteCanino = new Consulta("Peluche");

console.log(miPacienteCanino.Diagnostico());
console.log(miPacienteCanino.Curar());
console.log(miPacienteCanino.Vacunar());

