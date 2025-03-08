class Animal {
    hacerSonido() {
      console.log("Sonido genérico de animal");
    }
  }
  
  class Perro extends Animal {
    hacerSonido() {
      console.log("Guau guau!");
    }
  }
  
  class Gato extends Animal {
    hacerSonido() {
      console.log("Miau miau!");
    }
  }
  
  let miPerro = new Perro();
  let miGato = new Gato();
  
  miPerro.hacerSonido(); // Salida: Guau guau!
  miGato.hacerSonido(); // Salida: Miau miau!