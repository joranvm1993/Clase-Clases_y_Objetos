const persona = {
    primerNombre: 'Juan',
    apellido: 'Perez',
    edad: 22,
    documentoIdentidad: 5612,

    caracterisiticas: {
        colorCabello: 'Rojo',
        etnia: 'Indoeuropeo',
        idiomaMaterno: 'Español'
    },
    //metodo
    saludar: function(){
        return `Hola ${this.primerNombre} ${this.apellido}`
    }
};

//console.log(persona.saludar());

//acceder a propiedad. Segunda Forma
//console.log(persona['apellido'])


//desestructuracion
const {primerNombre} = persona

//console.log(primerNombre)


class Persona {
    constructor(primerNombreUsuario, apellidoUsuario){
        this.primerNombreUsuario = primerNombreUsuario;
        this.apellidoUsuario = apellidoUsuario;

    }

    //metodo
    saludarPersona(){
        return `Hola ${this.primerNombreUsuario} ${this.apellidoUsuario}`
    }
}

let Personita = new Persona('Juan', 'Perez');
Personita.primerNombreUsuario= 'Andres';
Personita.apellidoUsuario = 'Vasquez';
console.log(Personita.saludarPersona());

//Herencia

class Animales {
    constructor(nombre, edad, sonido){
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }

    //metodos
    sonido(){
        return `${this.nombre} tiene el sonido ${this.sonido}`
    }
}

//Herencia Palabra clave extends
class Gatos extends Animales {
    constructor(nombre, edad, sonido, cazador){
        super(nombre, edad, sonido)
        this.cazador = cazador;
    }
    //metodo
    maullar(){
        return `Yo puedo hacer el sonido ${this.sonido}`;
    }
}

// crear un animal, especificamnte un gato

let gato = new Gatos('Alberto', 52, 'Meow', true);

console.log(gato);



// Tarea

/*
    1. Crear un objeto que tenga minimo dos metodos
    ademas debe tener una propiedad que sea un objeto

    2. Crear una clase que herede de otra.
    Debe poseer minimo 3 propiedades para el constructor

    3. Crear una funcion tipo flecha que haga uso de la clase construida y el 
    objeto declarado
*/