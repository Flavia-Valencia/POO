class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nuevoNombre){
      this._nombre = nuevoNombre;
    }
    
    get edad(){
        return this._edad;
    }

    set edad(_edad){
        if (_edad >= 18) {
            this._edad = _edad;
            console.log(`Ya es mayor de edad.`);
            
        } else {
           console.log(`La edad ${_edad} es menor de 18 años`);
            
        }
    }

    mostrar(){
        let mensaje = `Mi nombre es ${this._nombre}, tengo ${this._edad}`
        console.log(mensaje);
        
    }
}

let obj = new Persona("Flavia", 19);
obj.mostrar();
obj.nombre = "Yamileth";
obj.edad = 16
obj.mostrar();





/*set nombre(nuevoNombre){
        if (nuevoNombre.length > 2) {
            this._nombre = nuevoNombre
        } else {
            console.log(`El nombre tiene que tener mas de dos letras`);
            
        }
    }*/