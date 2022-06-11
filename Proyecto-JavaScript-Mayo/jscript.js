



// // PRIMER ENTREGA JS MAYO

// let ingresarNumero = Number(prompt("Ingresa un Numero para Multiplicarlo"));
//     // ESTO ES UN CONTADOR
// for (let i = 1; i <= 10; i++) {
//     let resultado = ingresarNumero * i;
//     alert("Esto es la tabla del " + ingresarNumero +" X "+ i +" = "+ resultado);
//     console.log( resultado )   
// };

// let number = prompt("Ingresa tu numero favorito")

// if(number <= 9){
//     alert("Tu numero favorito es de 1 cifra")
// }
// else if(number <= 99){
//     alert("Tu numero favorito es de 2 cifras")
// }
// else if(number <= 999){
//     alert("Tu numero favorito es de 3 cifras")
// }
// else if(number <= 9999){
//     alert("Tu numero favorito es de 4 cifras")
// }
// else if(number <= 99999){
//     alert("Tu numero favorito es de 5 cifras")
// }
// else if(number <= 999999){
//     alert("Tu numero favorito es de 6 cifras")
// }
// else if(number >= 1000000){
//     alert("Wow tu numero ya es mas de 7 cifras.......")
// };

// function saludar() {
//      let nume = Number(prompt("Divide tu numero favorito entre 7")); 
     
//      alert("El resultado es: " + nume / 7 );
// }
    
// saludar();

// function Usuario(nombre, apellido, user) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.user = user;
// }

// function crearUsuario() {
//     let nombre = prompt("Ingresa tu Nombre");
//     let apellido = prompt("Ingresa tu apellido");
//     let user = prompt("Ingresa tu nombre de usuario");

//     const usuario1 = new Usuario(nombre, apellido, user);
//     console.log(usuario1);
// }

// crearUsuario();



const mascota = ["Perro","Gato","Elefante","Gaviota","Zorro"]

mascota.push("Paloma","Rino")

mascota.splice(2, 3, "Tortuga")

console.log(mascota.join("////"))