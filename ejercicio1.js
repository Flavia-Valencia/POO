//Una clase es una plantilla que simboliza o instancia objetos con propiedades para su aplicacion modular.

class logueo{ // la clase
    constructor(user,password){ // constructor con propiedades
        this._user = user
        this._password = password
    }

    //metodos, funciones o comportamientos

    iniciar_sesion(){
        return `El usuario ${(this._user)} con contraseña ${(this._password)} a iniciado sesion`
    }

    ver_historia(){
        return `El usuario ${(this._user)} con contraseña ${(this._password)} ve las historias`
    }

    ver_publicaciones(){

    }

    buscar(){

    }

}

let autorizacion = new logueo("Yami", 123)
let autorizacion2 = new logueo("Flavia", 1234)
console.log(autorizacion.iniciar_sesion());
console.log(autorizacion2.ver_historia());
