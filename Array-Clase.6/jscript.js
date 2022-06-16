// ARRAY


// EL ARRAY ES PRACTIACAMENTE = []


// const personas = ["Josue", "Jesus", "Maria", "Roberto"]

// const numeros = [27, 1, 37, 35, 7]

// personas.push("Boliche")

//  console.log(personas)
// console.log(numeros)
// console.log(numeros[3])

// console.log(numeros[2] + numeros[1])
// console.log(personas[1][2])

// 
// REPASAR ESTO
// console.log(personas)

// let query = "Josue"

// for (let i = 0; i < personas.lenght; i++) {

//     if (personas[i] === query) {
//         alert("Si esta " + query + " aqui.......")
//         break
//     }
// }


// 

// AGREGAR ELEMAENTOS AL ARRAY CON .PUSH
// const mascotas = ["Jorgito","Maca","Falcon","MadaM7"]

// PUSH----SE AGRAGA AL FINAL DEL ARRAY

// mascotas.push("Mono")

// UNSHIFT----SE AGREGA AL PRINCIPIO DEL ARRAY

// mascotas.unshift("Mono")

//POP----ELIMINA EL ULTIMO ELEMENTO DEL ARRAY

// mascotas.pop()

// SHIFT----ELIMINA EL PRIMER ELEMENTO DEL ARRAY

// mascotas.shift()

// 
// SPLICE----PERMITE ELIMINAR CUALQUIER ELEMENTO O VARIOS Y SE TRABAJA CON 2 PARAMETROS (NUMERO DE INDICE) Y LA CANTIDAD DE ELEMENTOS A ELIMINAR DESDE ESA POSICION
// SPLICE----ADEMAS DE ELIMINAR ELEMENTOS EL MEDIO TAMBIEN PUDE AGREGAR
// 
// ELIMINAR
// mascotas.splice(2,1)
// AGREGAR
// mascotas.splice(1, 0, "Maria", "Jesusa")



// JOIN

// const mascotas = ["Jorgito","Maca","Falcon","MadaM7"]

// console.log(mascotas.join("*"))

// 

// CONCAT----CONCATENAR(UNIR-JUNTAR) 2 ARRAYS EN UNO

// const mascotas = ["Jorgito","Maca","Falcon","MadaM7"]
// const animales = ["Chango", "Elefante"]

// console.log(mascotas.concat(animales))

// const team = mascotas.concat(animales)

// console.log(team)

// 

// SLICE----DEVUELVE UNA COPIA DE UNA PARTE DEL ARRAY DENTRO DE UN NUEVO ARRAY, EMPEZANDO DE INICIO A FINAL(FIN NO INCLUIDO),EL ARRAY ORIGINAL NO SE MODIFICA.

// const mascotas = ["Jorgito","Maca","Falcon","MadaM7"]

// const masculinos = mascotas.slice(1, 4)

// console.log(masculinos)

// 
// SALE UNA LISTA HACIA ABAJO(LONGITUD), DE 0 HASTA >>>>>>>
// const mascotas = ["Jorgito","Maca","Falcon","MadaM7"]

// console.log(mascotas)

// let query = "Falcon"


// for (let i = 0; i < mascotas.length; i++) { 

    // if (mascotas[i] === query){
        // alert("Si esta " + query + " aqui")
        // break
    // }   
    //  console.log( mascotas[i] )
// }

// 
// 

// const numeros = [1, 2, 3, 4, 5, 6, 7]
// for (let i = 0; i < numeros.length; i++) {
//     alert(numeros[i]);
//     break
// }
// console.log(numeros)

// 
// EL METODO REVERSE() INVIERTE EL OREDEN DE LOS ELEMENTOS CUIDADO PORQUE ES DESTRUCTIVO

// const numeros = [1, 2, 3, 4, 5, 6, 7] 
// numeros.reverse()
// console.log(numeros)

//  
// INDEXOF LE PASO UNVALOR Y ME DEVUELVE SU INDICE--SI EL VALOR NO EXISTE TE DEVOLVERA UN -1

// const numeros = [1, 2, 3, 4, 5, 6, 7]
// const nombres =["Maria","Jesus","Josue","Roberto"]

// console.log(nombres.indexOf("Josue"))

// 
// INCLUDES--SI YO LE PASO UN VALOR POR PARAMETRO EL ME VA A DEVOLVER UN VALOR BOOLEANO INDICANDO SI ES TRUE OR FALSE

// const nombres =["Maria","Jesus","Josue","Roberto"]

// console.log(nombres.includes("Jesus"))
// console.log(nombres.includes("Franco"))
// console.log(nombres.includes("Maria"))

// 
// EJEMPLO APLICADO

// const nombres = ["Boll","Jesus","Josue","Roberto"]
// const names = ["Maria","Capulin"]

// const union = nombres.concat(names)

// console.log(union)

// const eliminarNombres = (nombres) => {

//         const indice = union.indexOf(nombres)
        
//         if (indice !== -1) {
//             union.splice(indice, 1)
//         }

// }

// eliminarNombres("Maria")

// console.log(union)

// 
// ARRAY PRODUCTOS

// const producto1 = {
//     nombre: "Arros",
//     id: 1,
//     precio: 100
// }

// const producto2 = {
//     nombre: "Pan",
//     id: 2,
//     precio: 30
// }

// const producto3 = {
//     nombre: "Frijol",
//     id: 3,
//     precio: 70
// }

// const productos = [producto1, producto2, producto3]

// 
// 

// const productos = [
//     {id: 1, nombre:"frijol", precio: 70},
//     {id: 2, nombre:"Pan", precio: 30},
//     {id: 3, nombre:"Arroz", precio: 100},

// ]

// console.log(productos[1].precio)

// 
// 


class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
    }
}

// const productos = [
//     new Producto(1, "chamara", 5000),
//     new Producto(2, "pantalon", 5000),

// ]




function addProducto() {
    let id = Number(prompt("Ingresa id del producto") )
    let nombre = prompt("Ingresa nombre del producto")
    let precio = Number(prompt("Ingresa precio del producto") )

    productos.push(new Producto(id, nombre, precio) )

}

// console.log(productos)

// addProducto()

// console.log(productos)

// 
// 

const productos = [
    new Producto(1, "chamara", 5000),
    new Producto(2, "pantalon", 700),
    new Producto(3, "zapato", 70),
    new Producto(4, "camisa", 120),
    new Producto(5, "short", 300),
    new Producto(6, "chaleco", 500),
]
// EN VEZ DE ESTOOOOOOO

// for (let i = 0; i < productos.length; i++ ) {
//     console.log(productos[i])
// }
// 
// HACER ESTOOOOOOO PARA RECORRER EL ARRAY DE PRINCIPIO A FIN-------item es cada elemento del array--- pero tembien se le puede dar un nombre mas descriptivo.

for (const item of productos) {
    console.log(item)
}
// console.log(productos)
