class Persona {
    constructor(id, nombre, telefono, genero, departamento) {
      this._id = id;
      this._nombre = nombre;
      this._telefono = telefono;
      this._genero = genero;
      this._departamento = departamento;
    }
    get id() {
      return this._id;
    }
  
    set id(nuevoId) {
      this._id = nuevoId;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(Nombrenuevo) {
      if (Nombrenuevo.length > 20) {
        console.log("La modificacion no pudo ser realizada, revise las condiciones.");
      } else {
        this._nombre = Nombrenuevo;
      }
    }
  
    get telefono() {
      return this._telefono;
    }
  
    set telefono(_telefono) {
      if (_telefono.length > 8) {
        console.log("La modificacion no pudo ser realizada, revise las condiciones.");
      } else {
        this._telefono = _telefono;
      }
    }
  
    get genero() {
      return this._genero;
    }
  
    set genero(_genero) {
      if (_genero.length === 1) {
        const generoEnMayusculas = _genero.toUpperCase();
        if (generoEnMayusculas === "F" || generoEnMayusculas === "M") {
          this._genero = _genero;
        } else {
          console.log("Género no valido. Digite 'F' o 'M'.");
        }
      } else {
        console.log("Género no valido.");
      }
    }
  
    get mensajeGenero() {
      if (this._genero === "F") {
        return "Femenino";
      } else if (this._genero === "M") {
        return "Masculino";
      } else {
        return "Género no definido"; 
      }
    }
    get departamento() {
      return this._departamento;
    }
  
    set departamento(nuevoDepartamento) {
      if (nuevoDepartamento === "Ventas" || nuevoDepartamento === "RRHH" || nuevoDepartamento === "Administración") {
          this._departamento = nuevoDepartamento; 
      }else{
          console.log("La modificacion no pudo ser realizada, revise las condiciones.");
          
      }
      
    }
  
    mostrarInformacion() {
      console.log(`ID: ${this._id}`);
      console.log(`Nombre: ${this._nombre}`);
      console.log(`Teléfono: ${this._telefono}`);
      console.log(`Género: ${this.mensajeGenero}`);
      console.log(`Departamento: ${this._departamento}`);
    }
  }
  const persona1 = new Persona(1, "Juan Pérez", "12345678","M","Ventas");
  persona1.mostrarInformacion();
  persona1.id = 2;
  persona1.nombre = "Ana Gómez";
  persona1.telefono = "87654321";
  persona1.genero = "F";
  persona1.departamento = "Administración";
  persona1.mostrarInformacion();