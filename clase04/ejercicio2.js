class Producto {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precio = precio;
    }
    registro(){
        console.log(`${this.id}. "${this.producto}" codigo: ${this.codigo}, fecha de ingreso: ${this.fechaIngreso}, total: $${this.precio}.`);
        console.log(`Precio 2: $40`);
        console.log(`Precio 3: $60`);
    }

 }

 obj = new Producto ("1", "Laptop", "1284", "2025", 20)
 obj.registro()