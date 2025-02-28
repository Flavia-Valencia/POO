class Empleados {
    constructor(nombre, puesto, salario) {
        this._nombre = nombre;
        this._puesto = puesto;
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }

    calcular(){
        const salarioA = this._salario * 12;
        console.log(`El salario anual del empleado ${this._nombre} con el puesto ${this._puesto} es: $${salarioA}`);
        return salarioA;
    }
    aumentarSalario(porcentaje){
        if (porcentaje > 0) {
            const aumento = this._salario * (porcentaje / 100);
            this._salario += aumento;
            console.log(`El salario de ${this._nombre} se ha aumentado en un ${porcentaje}%. Nuevo salario: $${this._salario.toFixed(2)}`);

            
        } else {
            console.log("El procentaje debe ser mayor que 0.");
            
        }
    }
}

const empleado1 = new Empleados("Daniel Reyes", "Programador", 1200); 
 
empleado1.calcular() 
empleado1.aumentarSalario(20) 
empleado1.calcular()