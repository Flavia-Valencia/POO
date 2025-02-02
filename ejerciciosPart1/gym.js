class Cliente {
    constructor(nombre, peso, altura ) {
        this._nombre = nombre;
        this._peso = peso;
        this._altura = altura;
    }

    calcularIMC() {
        const masamuscular = this._peso / (this._altura * this._altura)
        console.log(`${this._nombre} tiene un IMC de: ${masamuscular.toFixed(2)}`);
    }
}

const cliente1 = new Cliente("Alberto", 60, 1.80);
const cliente2 = new Cliente("Flavia", 58, 1.58);
const cliente3 = new Cliente("Danny", 70, 1.63);

cliente1.calcularIMC();
cliente2.calcularIMC();
cliente3.calcularIMC();