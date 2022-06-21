// scrolling links

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

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

inputNombre.addEventListener("keydown", (event) => {
    if (inputNombre.value.length <= 7) {
        inputNombre.classList.add("border-danger")
        inputNombre.classList.remove("border-success")
    }
    else {
        inputNombre.classList.add("border-success")
        inputNombre.classList.remove("border_danger")
    }
})

inputUsuario.addEventListener("keydown", () => {
    if (inputUsuario.value.length <= 7) {
        inputUsuario.classList.add("border-danger")
        inputUsuario.classList.remove("border-success")
    }
    else {
        inputUsuario.classList.add("border-success")
        inputUsuario.classList.remove("border_danger")
    }
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)

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

const guardado = []

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
                <p><strong>Disponible:</strong><i class='bx bx-check-square' ></i></p>
                <button class="producto-guardar" onclick="agregarAlCarrito(${producto.id})">Guardar</button>
                </div>
            `

    productosHabitaciones.append(div)
})

const ageregarAlCarrito = (id) => {
    const item = productosHome.find( (producto) => producto.id === id)
    guardado.push(item)

    console.log(guardado)
    renderGuardado()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = guardado.find((producto) => producto.id === id)
    const indice = guardado.indexOf(item)
    guardado.splice(indice, 1)

    renderGuardado()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    guardado.length = 0

    renderGuardado()
    renderCantidad()
    renderTotal()
}

btnVaciar.addEventListener("click", vaciarCarrito)

const renderGuardado = () => {
    profile.innerHTML = ``

    guardado.forEach((item) => {
        const div = document.createElement("div")
        div.classList.add("productoEnGuardado")

        div.innerHTML = `
        <p>${item.nombre}</p>
        <p class="precioProducto">Precio Total: $${item.precio} <span id="precioTotal">0</span></p>
        <button id="vaciarCarrito"(${item.id}) class="boton-eliminar">Vaciar</button>`
            profile.append(div)
    })
}

const renderCantidad = () => {
    contadorCarrito.innerText = guardado.lenght
}

const renderTotal = () => {
    let total = 0
    guardado.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}