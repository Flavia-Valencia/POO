class Cuentas {
    constructor(numCuenta, titular, saldo) {
        this._numCuenta = numCuenta;
        this._titular = titular;
        this._saldo = saldo;
    }

    depositar(cantidad){
        if (cantidad>0) {
            this._saldo += cantidad
            console.log(`El deposito $${cantidad}, realizado con exito.`);
            
        } else {
            console.log("El deposito tiene que ser mayor que 0");
            
        }
    }

    retirar(cantidad){
        if (cantidad <= this._saldo) {
            this._saldo-= cantidad 
            console.log(`Ha retirado $${cantidad}.`);
            
        } else {
            console.log(`Saldo insuficiente para realizar su retiro.`);
            
        }
    }

    consultar(){
        console.log(`El saldo actual de la cuenta ${this._numCuenta} es de: $${this._saldo}`);
        
    }
}

const persona1 = new Cuentas("192012", "Flavia Valencia", 400);


persona1.retirar(100);
persona1.consultar();
persona1.depositar(200);