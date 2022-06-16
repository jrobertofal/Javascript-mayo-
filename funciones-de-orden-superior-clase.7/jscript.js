





// HOF


// function mayorQue(m) {
    // return (m) => {
        // return m < n
    // }
// }


// const MayorQueDiez = mayorQue(10)

// const MayorQueDiez = (m) => {
    // return (m) > 10
// }

// TRUE
// console.log(MayorQueDiez(27))

// FALSE
// console.log(MayorQueDiez(7))


// RECIBIR FUNCIONES POR PARAMETRO

const numeros = [1, 23 , 27, 47, 7]
const nombres = ["Maria", "Jeusu", "Josue", "Roberto"]

const porCadaUno = (array, fn) => {
    for( const element of array) {
        fn(element)
    }
}

// porCadaUno(numeros, alert)
// porCadaUno(nombres, console.log)

// const duplicar = (num) => {
//     console.log(num * 2)
// }

// porCadaUno(numeros, duplicar)