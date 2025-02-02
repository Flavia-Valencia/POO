class Sancion {
    constructor(nombre, infraccion) {
        this._nombre = nombre;
        this._infraccion = infraccion;
    }

    multa(){
        switch (this._infraccion) {
            case "llegada tardia":
                console.log(`Estudiante ${this._nombre} tiene una infraccion: '${this._infraccion}' y una multa de $1.`);
                break;
            case "caminar por los pasillos en horas de clase":
                console.log(`Estudiante ${this._nombre} tiene una infraccion: '${this._infraccion}' y una multa de $3.`);
                break;
            case "no andar vestimenta apropiada":
                console.log(`Estudiante ${this._nombre} tiene una infraccion: '${this._infraccion}' y una multa de $5.`);
                break;
            case "no hacer uso adecuado de las instalaciones":
                console.log(`Estudiante ${this._nombre} tiene una infraccion: '${this._infraccion}' y una multa de $10.`);
                break;
        
            default:
                console.log(`No tiene ninguna infraccion.`);
                
                break;
        }
    }
}

const estudiante1 = new Sancion("Karla", "llegada tardia");
const estudiante2 = new Sancion("Daniel", "caminar por los pasillos en horas de clase");
const estudiante3 = new Sancion("Daniela", "no andar vestimenta apropiada");
const estudiante4 = new Sancion("Yamileth", "no hacer uso adecuado de las instalaciones");
const estudiante5 = new Sancion("Adriana", "nada")

estudiante1.multa();
estudiante2.multa();
estudiante3.multa();
estudiante4.multa();
estudiante5.multa();