class Empleado {
    constructor(nombre, salario) {
      this.nombre = nombre;
      this.salario = salario;
    }
  
    mostrarInfo() {
      console.log(`Nombre: ${this.nombre}, Salario: ${this.salario}`);
    }
  }
  
  class Gerente extends Empleado {
    constructor(nombre, salario, departamento) {
      super(nombre, salario);
      this.departamento = departamento;
    }
  
    gestionar() {
      console.log(
        `${this.nombre} está gestionando el departamento ${this.departamento}`
      );
    }
  }
  class Desarrollador extends Empleado {
    constructor(nombre, salario, lenguaje) {
      super(nombre, salario);
      this.lenguaje = lenguaje;
    }
  
    programar() {
      console.log(`${this.nombre} está programando en ${this.lenguaje}`);
    }
  }
  
  let gerente = new Gerente("Ana", 5000, "Ventas");
  let desarrollador = new Desarrollador("Carlos", 4000, "JavaScript");
  
  gerente.mostrarInfo();
  gerente.gestionar();
  
  desarrollador.mostrarInfo();
  desarrollador.programar();