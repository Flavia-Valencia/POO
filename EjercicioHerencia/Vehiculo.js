class Vehiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  
    mostrarInfo() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }
  }
  
  class Coche extends Vehiculo {
    constructor(marca, modelo, numPuertas) {
      super(marca, modelo);
      this.numPuertas = numPuertas;
    }
  
    mostrarInfo() {
      super.mostrarInfo();
      console.log(`Número de puertas: ${this.numPuertas}`);
    }
  }
  
  class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
    }
  
    mostrarInfo() {
      super.mostrarInfo();
      console.log(`Cilindrada: ${this.cilindrada} cc`);
    }
  }
  
  let miCoche = new Coche("Toyota", "Corolla", 4);
  let miMoto = new Moto("Yamaha", "MT-07", 689);
  
  miCoche.mostrarInfo();
  miMoto.mostrarInfo();