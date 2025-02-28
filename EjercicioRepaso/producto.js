class Tienda {
    constructor(nombre, precio, stock) {
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }

    agregarStock(cantidad){
        if (cantidad > 0) {
            this._stock += cantidad;
            console.log(`Se agrego ${cantidad} unidades de ${this._nombre}. Stock actual: ${this._stock}`);
            
        } else {
            console.log("Lo sentimos. La cantidad agregada debe ser mayor a 0.");
        }
    }

    venderP(cantidad){
        if (cantidad > 0 && cantidad <= this._stock) {
            this._stock -=cantidad;
            console.log(`Se vendieron ${cantidad} unidades de ${this._nombre}. Stock actual: ${this._stock}`) 
        } else if  (cantidad > this._stock) {
            console.log(`No hay suficiente stock de ${this._nombre}. Stock disponible: ${this._stock}`) 
        
        } else {
            console.log("La cantidad a vender debe ser mayor a 0. ");  
        }
    }
    mostrar() { 
        console.log(`Producto: ${this._nombre}  Precio: $${this._precio}  Stock: ${this._stock}`) 
    }
}

const producto1 = new Tienda("Guitarra", 1500, 10); 
 
producto1.mostrar() 
producto1.agregarStock(5)    
producto1.venderP(3)      
producto1.venderP(15)        
producto1.mostrar() 