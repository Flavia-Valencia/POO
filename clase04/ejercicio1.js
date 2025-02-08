 class Producto {
    constructor(id, producto, codigo, fechaIngreso, precio) {
        this.id = id;
        this.producto = producto;
        this.codigo = codigo;
        this.fechaIngreso = fechaIngreso;
        this.precio = precio;
    }
    registro(precio=this.precio){
       
        console.log(`${this.id}. "${this.producto}" codigo: ${this.codigo}, fecha de ingreso: ${this.fechaIngreso}, total: $${this.precio}.`);
        const aumento = precio * 0.20
        const precioAumentado = precio + aumento
        console.log(`El precio inicial más con el 20% es: ${precioAumentado}`);

        const precioDescontado = precio - aumento
        console.log(`El precio inicial menos el 20% es: ${precioDescontado}`);
        
    }

 }

 obj = new Producto ("1","Audifonos","1234","2024",10)
 obj.registro()