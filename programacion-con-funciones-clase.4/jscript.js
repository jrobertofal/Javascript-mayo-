// FUNCIONES




// DECLARACION


// function holamundo(){
//     console.log("hola mundo")
//     console.log("hola")
//     console.log("mundo")
//     alert("Holaaaaaaa")
// }


// function saludar(){
//     let nombre = prompt("Ingresa tu nombre");
//     alert("Bienvenido " + nombre + " a Javascript")
// }


// LLAMADO


// saludar()
// holamundo()

// 

// function saludaruser(usuario) {
//     console.log("Bienvenido "+ usuario)
// }

// saludaruser("Roberto")
// saludaruser("Jhonny")
// saludaruser("Franco")

// function infousuario() {

//     let nombre = prompt("Ingresa tu nombre:")
//     let edad = Number(prompt("Ingresa tu edad:"))
//     let dedicacion = prompt("Ingresa a que te dedicas???????")

//     console.log("Nombre: " + nombre)
//     console.log("edad: " + edad + " años")
//     console.log("Dedicacion: " + dedicacion)

//  Esto tambien se podria usar pero mejor no yo creo/// evaluarEdad(edad)
// }

//  infousuario()






// infousuario("Roberto", 19, "Estudiar")

// 

// function evaluarEdad(edad){
//     if(edad < 18){
//         alert("Acceso denegado")
//     } 
//     else{
//         alert("Bienvenido.......")
//     }
// }

// let edad = Number(prompt("Ingresa tu edad:"))

// evaluarEdad(edad)



// 

// function sumar(num1, num2) {
//     console.log(num1 + num2)
// }

// sumar(200, 500)
// sumar(20, 70)
// sumar(700, 50)

// 

// let resultado

// function sumar (num1, num2){
//     resultado = num1 + num2
// }

// sumar(10, 20)

// console.log(resultado)

// 

// function sumar (num1, num2) {
//    return num1 + num2
// }
// console.log( sumar(10, 5) )
// console.log( prompt("ingresa un string"))

// 

// function sumar(num1, num2) {
//     let suma = num1 + num2
//     return suma
// }

// let resultado = (10 + 10)

// console.log(resultado)



// 



// function sumar(num1, num2) {
//     return  num1 + num2
// }

// function restar(a, b) {
//     return (a - b)
// }

// function multiplicar(a, b) {
//     return (a * b)
// }

// let resultado = sumar(100, 200) 
//     resultado = restar(resultado, 150)
//     resultado = multiplicar(resultado, 4)

// console.log(resultado)


// CALCULADORA

// function calculadora(num1, num2, operacion) {
//     switch (operacion) {
//         case "+":
//             return num1 + num2;
//             break;
         
//         case "-":
//             return num1 - num2;
//             break;
            
//         case "*":
//             return num1 * num2;
//             break;
                
                
//         case "/":
//             return num1 / num2;
//             break;
            
//         default:
//             return 0;
//             break;    
//     }
// }

// console.log(calculadora(5, 7, "*"));



// SCOPE

// la variable estando fuera del bloque sera GLOBAL.......
// let nombre = "carlos";

// function saludar() {
//     console.log( nombre )
// }

// saludar()

// La variable estando dentro del bloque sera una variable LOCAL.......

// SI LA FUNCION NO ENCUENTRA A LA VARIABLE EN EL AMBITO LOCAL SALDRA A BUSCARLA AL AMBITO GLOBAL

// function saludar() {
//     let name = "carlos";
//     console.log( name )
// }

// saludar()



//OTRA FORMA DE USAR FUNCTION ES DE FORMA ANONIMA.
//Son variables que almacenan funciones.

// ESTO SE IGNIFICA QUE ES UNA FUNCION DE TIPO FLECHA =>

// const suma = function (num1, num2) {
//     return (num1 + num2)
// }

// console.log(suma(12,12))


// 

// const suma = (num1, num2) => {
//     return (num1 + num2)
// }

// console.log(suma(27, 27))

// 

// const suma = (num1, num2) => {return (num1 + num2)}
// console.log(suma(12,87))