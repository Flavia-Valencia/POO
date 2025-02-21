class Almacen {
    constructor(producto, precio, cantidad) {
        this._producto = producto;
        this._precio = precio;
        this._cantidad = cantidad;
    }

    
    aumentarStock(cantidadNueva) {
        if (this._precio > 0 && cantidadNueva > 0) {
            this._cantidad += cantidadNueva;
            console.log(`Nueva cantidad de ${this._producto}: ${this._cantidad}`);
        } else {
            console.log(`No es posible agregar una cantidad 0 ni precio 0`);
        }
    }

   
    vender(unidadesVendidas) {
        if (unidadesVendidas > 0 && unidadesVendidas <= this._cantidad) {
            this._cantidad -= unidadesVendidas;
            let totalPago = this._precio * unidadesVendidas;
            console.log(`Venta realizada. Total a pagar: $${totalPago}. Stock restante: ${this._cantidad} unidades.`);
        } else {
            console.log("No cumple con los requerimientos.");
        }
    }
}


let cliente1 = new Almacen("Telefono", 300, 9);

cliente1.aumentarStock(1); 
cliente1.vender(4); 
