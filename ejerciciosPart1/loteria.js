class Loteria {
    constructor(numero, cantidad) {
        this._numero = numero;
        this._cantidad = cantidad;
    }

    jugar(){
        const numGanador = Math.floor(Math.random() * 100);
        console.log(`Numero elegido: ${this._numero}`);
        console.log(`Numero ganador: ${numGanador}`);

        if (this._numero === numGanador) {
            const premio = this._cantidad * 20;
            console.log(`¡Felicidades! Has ganado $${premio}.`);
        } else {
            console.log("Lo sentimos, el numero no fue el ganador. ¡Intentalo de nuevo!");
        }
    }
}

const jugador1 = new Loteria(19, 15); 
const jugador2 = new Loteria(3, 8);   

jugador1.jugar();
jugador2.jugar();