





// DESAFIO COMPLEMENTARIO

const usuario = prompt("Ingresar Usuario")
const contraseña = Number(prompt("Ingresar Contraseña"))

if (usuario == "Falcon" && contraseña == 1234567){
        alert("Welcome")
}
else{
    alert("Acceso denegado")
}


let numero1 = Number(prompt("Ingresa un numero para multiplicar"))
let numero2 = Number(prompt("Ingresa un numero para multiplicar"))
let resultado = numero1 * numero2

if (numero1 * numero2 == resultado){
    alert(resultado)
}

const banco = prompt("Escoge un banco-Scotiabank-BBVA-American Express")
const cantidad = Number(prompt("Ingresa cantidad deseada"))

let interes

switch (banco) {
    case "scotiabank":
        interes = .15
        break
    
    case "bbva":
        interes = .20
        break
        
    case "american express":
        interes = .25
        break

   default: alert("Ingresa un banco valido")     
}

alert("Tu pago del banco" + " " + banco + " tendra un interes " + cantidad * interes)

alert("Welcome")