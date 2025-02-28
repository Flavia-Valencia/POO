class Biblioteca {
    constructor(titulo,autor,anios) {
        this._titulo = titulo;
        this._autor = autor;
        this._anios = anios;
        
    }

    agregarlibro(){
        if (!this._titulo || !this._autor || !this._anios) {
            console.log("lo sentimos. EL titulo, el autor y el año del libro son obligatorios");
            
        } else {
           console.log(`Libro "${this._titulo}" agregado.`);
           libros.push(this);         
        }
    }
    mostrarInfo(){
        switch (this._titulo) {
            case "Los juegos del hambre":
                console.log(`Libro encontrado: ${this._titulo} , autor: ${this._autor}, año de publicacion: ${this._anios}`);
                break;
            case "El nombre del viento":
                console.log(`Libro encontrado: ${this._titulo} , autor: ${this._autor}, año de publicacion: ${this._anios}`);
                break;
            default:
                console.log("Lo sentimos ese libro no esta disponible."); 
                break;
        }
    }
    

}

// Lista de libros disponibles
const libros = [];

const libro1 = new Biblioteca("Harry Potter y la piedra filosofal", "J.K. Rowling", 1997);
const libro2 = new Biblioteca("El nombre del viento", "Patrick Rothfuss", 2007);

//Libro no disponible
const libro3 = new Biblioteca("Los pilares de la Tierra");


libro1.agregarlibro();
libro2.agregarlibro();
libro3.agregarlibro();

libro1.mostrarInfo();
libro2.mostrarInfo();
libro3.mostrarInfo();

console.log("\nLibros disponibles:");
libros.forEach(libro => {
    console.log(`Título: ${libro._titulo}, Autor: ${libro._autor}, Año: ${libro._anios}`);
});




