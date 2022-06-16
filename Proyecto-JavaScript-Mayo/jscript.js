





let ingresarUsuario = prompt("Ingresa Tu Usuario");
    // ESTO ES UN CONTADOR
for (let i = 1; i <= 1; i++) {
    let resultado = ingresarUsuario * i;
    alert("Bienvenido; " + ingresarUsuario + ".");
    console.log( resultado )   
};


function Usuario(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

function crearUsuario() {
    let nombre = prompt("Ingresa tu Nombre");
    let apellido = prompt("Ingresa tu apellido");
  
    const usuario1 = new Usuario(nombre, apellido);
    console.log(usuario1);
}

crearUsuario();

class Producto {
constructor(id, nombre, precio) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
}
}

const productos = [
new Producto(1, "Habitacion 1", 5000),
new Producto(2, "Habitacion 2", 3500),
new Producto(3, "Habitacion 3", 1700),
new Producto(4, "Habitacion 4", 1300)

]

for (const producto of productos) {
console.log(producto)
}

let habitacion = prompt("Ingresa el numero de habitacion favorita")

if(habitacion === 1){
    alert("Bienvenido, tu habitacion esta disponible")
}
else if(habitacion === 2){
    alert("Lo sentimos, tu habitacion no esta disponible")
}
else if(habitacion === 3){
    alert("Bienvenido, tu habitacion esta disponible")
}
else if(habitacion === 4){
    alert("Lo sentimos, tu habitacion no esta disponible") 
}
else if(habitacion >= 5){
    alert("Ingresa una habitacion valida")
}

// function precio() {
//      let dias = Number(prompt("Ingresa el numero de dias a hospedarte")); 
     
//      alert("El precio por tu habitacion es de: " + dias * Producto );
// }


//  precio();


 const habitacionNumero = [
    {nombre: "Habitacion 1", precio: 5000},
    {nombre: "Habitacion 2", precio: 3500},
    {nombre: "Habitacion 3", precio: 7000},
    {nombre: "Habitacion 4", precio: 1300},
]


// filter
const baratos = habitacionNumero.filter( (prod) => prod.precio <= 5000)

console.log( baratos )

const prodFiltrados = habitacionNumero.filter( (prod) => prod.nombre !== "Habitacion 1" )

console.log( prodFiltrados )


const numeros = [1, 2, 3, 4]
const nombres = ["Habitacion 1", "Habitacion 2", "Habitacion 3", "Habitacion 4"]



const porCadaUno = (array, fn) => {
    for (const element of array) {
        fn(element)
    }
}

porCadaUno(numeros, alert)
porCadaUno(nombres, console.log)

const duplicar = (num) => {
    console.log(num * 2)
}

// 15/06/22
