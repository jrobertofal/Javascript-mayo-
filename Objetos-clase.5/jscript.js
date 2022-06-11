// OBJETOS





// TODOS ESTOS DATOS SE REFIEREN A UNA ENTIDAD O UNA UNIDAD

// const nombre = "Roberto"
// const edad = 19
// const rol = "Estudiante"
// const curso = "Javascript"
// const empresa = "MadaM7.com"

// TODOS ESTOS DATOS SE REFIEREN A UNA ENTIDAD


// PARA DECLARAR UN OBJETO ABRIMOS Y CERRAMOS LLAVES - UNA VARIABLE ES IGUAL A LLAVES ES IGUAL A UN OBJETO

// const usuario = {
//     nombre: "Jesus",
//     edad: 19,
//     empresa: "MadaM7.com"
// }

// const usuario2 = {
//     nombre: "Roberto",
//     edad: 21,
//     empresa: "MadaM7.com"
// }

// 

// console.log(usuario)
// console.log(usuario.empresa)
// console.log(usuario2)

// 

// console.log(usuario.nombre)

// usuario.nombre = "Roberto"
// usuario.edad += 8

// console.log(usuario)

// 


// const usuario = {
//     nombre: "Jesus",
//     edad: 19,
//     empresa: "MadaM7.com"
// }
// usuario.email = "roberto.fal19@gmail.com"

// PARA BORRAR UNA PROPIEDAD ES CON DELETE------EJEMPLO delete usuario.email

// console.log(usuario.email)

// console.log(usuario)


// CONSTRUCTORES

// function Persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad   = edad;
//     this.calle  = calle;
// }
// EL OPERADOR NEW CREA UN OBJETO VACIO PERO LUEGO DENTRO DE ESE OBJETO EJECUTA LA FUNCION CONSTRUCTORA 
// EJEMPLO 1
// const persona1 = new Persona (prompt("Nombre"), Number(prompt("Ingresa tu Edad")), prompt("Ingresa tu direccion"))
// EJEMPLO 2
// const persona2 = new Persona ("Manno", 27, "Av. forro 787")

// console.log(persona1)
// console.log(persona2)


// function Mascota(nombre, edad, tipo) {
//     this.nombre = nombre
//     this.edad = edad
//     this.tipo = tipo
// }

// function crearMascota() {
//     let nombre = prompt("Ingresa un Nombre a la mascota")
//     let edad = Number( prompt("Ingresa una edad a la mascota"))
//     let tipo = prompt("Ingresa el tipo de mascota")

//     const mascota = new Mascota(nombre, edad, tipo)
//     return mascota;
// }

// const mascota1 = crearMascota()
// const mascota2 = crearMascota()


// console.log(mascota1)
// console.log(mascota2)

// 

// const usuario = {
//     nombre: "Roberto",
//     apellido: "Falcon",
//     edad: 19,
//     direccion: {
//         calle: "Av. Mexico",
//         num: 107,
//         colonia: "Centro"
//     }
    
// }

// console.log(usuario)

// console.log(usuario.direccion)

// 

// function Mascota(nombre, edad, tipo) {
//     this.nombre = nombre
//     this.edad = edad
//     this.tipo = tipo
    
//     this.saludar = () => {
//     }
//     console.log(nombre + " Te saluda");
//                         // ESTA FLECHA ES UNA FUNCTION
//     this.cumplirAnios = () =>{
//         this.edad += 1;
//     }
// }

//     const mascota1 = new Mascota ("Boll", 777, "French");
//     const mascota2 = new Mascota ("Bolliche", 777, "Pool");
//     const mascota3 = new Mascota ("Bola", 777, "Dog");

    // mascota1.saludar() 
    // console.log(mascota1)
    // mascota1.cumplirAnios()
    // console.log(mascota1)


    // CLASES EN JAVASCRIPT

    // class Persona{
    //     constructor(nombre, edad, tipo){
    //         this.nombre = nombre
    //         this.edad = edad
    //         this.tipo = tipo

    //     }

    //     saludo(){
    //         console.log(this.nombre + " Holaaaaaaa")
    //     }
    // }

    // const persona1 = new Persona ("Roberto", 19, "Hombre")
    // const persona2 = new Persona ("Rober", 19, "Hombre")
    // console.log(persona1)
    // console.log(persona2)

    // CLASS JAVASCRIPT

    // class Producto{
    //     constructor (nombre, precio){
    //         this.nombre = nombre.toUppercase();
    //         this.precio = parseFloat(precio);
    //         this.vendido = false;
    //     }
    //     sumaIva(){
    //         this.precio = this.precio * 1.25;
    //     }
    //     vender(){
    //         this.vendido = true;
    //     }

    // }

    // const producto1 = new Producto("Arroz","125")
    // const producto2 = new Producto("Spaguetti","25")
    //  produucto1.sumaIva();
    // produucto2.sumaIva();
    //  producto1.vender();

    // console.log(producto1)

    // EL += ES UN ACUMULADOR
