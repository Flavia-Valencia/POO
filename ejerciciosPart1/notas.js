class Nota {
    constructor(titulo, detalle) {
        this._titulo = titulo;
        this._detalle = detalle;
    }

    contarPalabras(){
        const cantidadP = this._detalle.trim().split(/\s+/).length;
        console.log(`La nota ${this._titulo} tiene ${cantidadP} de palabras.`);
        
    }
}

const nota1 = new Nota("Recordatorio", "Ahora llega el paquete de temu.");
const nota2 = new Nota("Viaje", "El dia domingo tenemos el viaje a playa espino.");
const nota3 = new Nota("Compras", "Ir a comprar el alimento para las gatas.");

nota1.contarPalabras();
nota2.contarPalabras();
nota3.contarPalabras();