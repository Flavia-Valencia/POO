class Estudiante{
    constructor(nombre, edad) {
        this._nombre = nombre 
        this._edad = edad 
        this._calificaciones = [] 
    }

    agregar(calificacion) { 
        if (calificacion >= 0 && calificacion <= 10) { 
            this._calificaciones.push(calificacion) 
            console.log(`Calificación ${calificacion} agregada a ${this._nombre}`) 
        } else { 
            console.log("La calificación debe estar entre 0 y 10") 
        } 
    }

    calcular(){
        if (this._calificaciones.length === 0) {
            console.log(`${this._nombre} no tiene calificaciones registradas`);
            return 0
        }  const suma = this._calificaciones.reduce((total, calificacion) => total 
        + calificacion, 0)  
        const promedio = suma / this._calificaciones.length 
        console.log(`El promedio de ${this._nombre} es: ${promedio.toFixed(2)}`) 
        return promedio 
    } 

    mostrar() { 
        console.log(`Estudiante: ${this._nombre}, Edad: ${this._edad} Calificaciones: [${this._calificaciones.join(", ")}]`) 
    }
            
}

const estudiante1 = new Estudiante("Yamileth Perez", 20) 
estudiante1.agregar(9) 
estudiante1.agregar(9) 
estudiante1.agregar(10) 
estudiante1.calcular() 
estudiante1.mostrar() 