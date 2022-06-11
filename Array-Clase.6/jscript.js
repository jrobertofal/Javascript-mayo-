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

const mascotas = ["Jorgito","Maca","Falcon","MadaM7"]
const masculinos = mascotas.slice(1, 4)

console.log(masculinos)

