// MODAL QUESTION

const modalUpside = document.querySelector('#modal-upside')
const openModal = document.querySelector('#iniciar-modal')
const closeModal = document.querySelector('#cerrar-modal')

openModal.addEventListener('click', () => {
    modalUpside.classList.add('modal-upside--visible')
})

closeModal.addEventListener('click', () => {
    modalUpside.classList.remove('modal-upside--visible')
})

// FORMULARIO

const formulario = document.querySelector("#my-form")
const inputNombre = document.querySelector("#name")
const inputUsuario = document.querySelector("#user")
const enviarForm = document.querySelector("#form__enviar")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()

    const userDatos = {
        nombre: inputNombre.value,
        usuario: inputUsuario.value,
        password: inputPassword.value
    }

    console.log(userDatos)
})

const inputPassword = document.querySelector("#form-pass")
const btnPass = document.querySelector("#btn-pass")

btnPass.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputPassword.type === "password") {
        inputPassword.type = "text"
    }
    else {
        inputPassword.type = "password"
    }
})

// PRODUCTOS X# 
// GUARDAR
// SELECTORES
const productosHabitaciones = document.querySelector("#prodhome")
const profile = document.querySelector("#profile")
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector("#precioTotal")
const btnVaciar = document.getElementById("vaciarCarrito")

let guardado = JSON.parse(localStorage.getItem("guardado")) ? JSON.parse(localStorage.getItem("guardado")) : []


// DOM PRODUCTOS
productosHome.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")

    div.innerHTML = `
                <div class= "contenido">
                <h4>${producto.nombre}</h4>
                <figure>
                <img src="${producto.img}" alt="">
                </figure>
                <p><strong>Precio:</strong>${producto.precio}</p>
                <p><strong>Disponible:</strong><i class='bx bx-check-square'></i></p>
                <button onclick="agregarAlGuardado(${producto.id})" class="producto-guardar">Guardar</button>
                </div>
            `

    productosHabitaciones.append(div)
})

const agregarAlGuardado = (id) => {
    const item = productosHome.find( (producto) => producto.id === id)
    guardado.push(item)

    guardadoMensaje(item.nombre)

    localStorage.setItem("guardado", JSON.stringify(guardado))

    console.log(guardado)
    renderGuardado()
}

const eliminarGuardado = (id) => {
    const item = guardado.find((producto) => producto.id === id)
    const indice = guardado.indexOf(item)
    guardado.splice(indice, 1)

    localStorage.setItem("guardado", JSON.stringify(guardado))
    
    renderGuardado()
}

const vaciarGuardado = () => {
    guardado.length = 0

    localStorage.setItem("guardado", JSON.stringify(guardado))

    renderGuardado()
}

btnVaciar.addEventListener("click", vaciarGuardado)

const renderGuardado = () => {
    profile.innerHTML = ''

    guardado.forEach((item) => {
        const div = document.createElement("div")
        div.classList.add("productoEnGuardado")

        div.innerHTML = `
        <p><strong>${item.nombre}</strong></p>
        <p class="precioProducto">Precio Total: $${item.precio} <span id="precioTotal"></span></p>
        <button onclick="eliminarGuardado"(${item.id}) class="boton-eliminar">Eliminar</button>`

        profile.append(div)
        profile.querySelector(".boton-eliminar").addEventListener("click", eliminarItem)
    })
}

function eliminarItem(e) {
    const buttonEliminar = e.target;
    buttonEliminar.closest(".productoEnGuardado").remove();
    localStorage.setItem("guardado", JSON.stringify(guardado))
}

const guardadoMensaje = (producto) => {
    Toastify({
        text: `Se a agregado ${producto} al guardado`,
        duration: 3000,
        style: {
            background: "linear-gradient(to right, orange, orange, white, white)",
            color:'black',
        }
    }).showToast()
}

const eliminarMensaje = (producto) => {
    Toastify({
        text: `Se a agregado ${producto} al guardado`,
        duration: 3000,
        style: {
            background: "linear-gradient(to right, orange, orange, white, white)",
            color:'black',
        }
    }).showToast()
}