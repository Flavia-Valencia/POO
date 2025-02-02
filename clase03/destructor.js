class Archivo {
    constructor(nombre) {
        this.nombre = nombre;
        console.log(`Archivo ${this.nombre} abierto.`);
        
    }
    cerrar() {
        console.log(`Archivo ${this.nombre} cerrado.`);
        this.nombre = null;
        
    }
}

const miArchivo = new Archivo("documento.txt");
miArchivo.cerrar();