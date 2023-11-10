class BaseDeDatos{
    constructor(){
        this.productos = [];
    }
    async traerRegistros() {
        const response = await fetch('./js/productos.json');
        this.productos = await response.json();
        return this.productos;
    }
    registroPorId(id){
        return this.productos.find((producto) => producto.id === id);
    }
    registrosPorNombre(palabra){
        return this.productos.filter((producto) => producto.nombre.toLowerCase().includes(palabra));
    }
    registrosPorCategoria(categoria){
        return this.productos.filter((producto) => producto.categoria == categoria);
    }
}

//Clase carrito
class Carrito{
    constructor(){
        const carritoStorage = JSON.parse(localStorage.getItem("carrito"));
        this.carrito = carritoStorage || [];
        this.total = 0;
        this.totalProductos = 0;
        this.listar();
    }
    estaEnCarrito({ id }) {
        return this.carrito.find((producto) => producto.id === id);
    }
    agregar(producto){
        let productoEnCarrito = this.estaEnCarrito(producto);
        if(productoEnCarrito) {
            productoEnCarrito.cantidad++;
        } else {
            this.carrito.push({...producto, cantidad: 1});
        }
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        this.listar();

        Toastify({
            text: `${producto.nombre} fue agregado al carrito`,
            position: "center",
            className: "info",
            gravity: "center",
            style: {
            background: "linear-gradient(to top, #74471e, #6c461c, #64441b, #5c421a, #554019)",
                
            },
        }).showToast();
    }

    quitar(id){
        const indice = this.carrito.findIndex((producto) => producto.id === id);
        if(this.carrito[indice].cantidad>1){
            this.carrito[indice].cantidad--;
        } else{
            this.carrito.splice(indice, 1);
        }
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        this.listar();
    }

    vaciar() {
        this.carrito = [];
        localStorage.removeItem("carrito");
        this.listar();
    }

    aumentarCantidad(id) {
        const productoEnCarrito = this.estaEnCarrito({ id });
        if (productoEnCarrito) {
            productoEnCarrito.cantidad++;
        }
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        this.listar();
    }

    disminuirCantidad(id) {
        const productoEnCarrito = this.estaEnCarrito({ id });
        if (productoEnCarrito && productoEnCarrito.cantidad > 1) {
            productoEnCarrito.cantidad--;
        } else if (productoEnCarrito && productoEnCarrito.cantidad === 1) {
            this.quitar(id);
        }
        localStorage.setItem("carrito", JSON.stringify(this.carrito));
        this.listar();
    }

    listar(){
        this.total = 0;
        this.totalProductos = 0;
        divCarrito.innerHTML = "";
        for (const producto of this.carrito){
            divCarrito.innerHTML += `
                <div class="productoEnCarrito">
                    <img class="rounded-t-lg" src="img/${producto.imagen}" width="80px" />
                    <div class="">
                        <h2>${producto.nombre}</h2>
                        <p>S/.${producto.precio}</p>
                        <p>Cantidad:
                            <button class="btnmasymenos" onclick="carrito.disminuirCantidad(${producto.id})">-</button>
                            ${producto.cantidad}
                            <button class="btnmasymenos" onclick="carrito.aumentarCantidad(${producto.id})">+</button>
                        </p>
                        <a href="#" data-id="${producto.id}" class="btnQuitar inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-500 rounded-lg hover:bg-yellow-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Quitar del carrito</a>
                    </div>
                </div> 
            `;
            this.total += (producto.precio * producto.cantidad);
            this.totalProductos += producto.cantidad;
        }

        if (this.totalProductos > 0) {
            botonPagar.classList.remove("oculto"); // Muestro el botón
        } else {
            botonPagar.classList.add("oculto"); // Oculto el botón
        }
        //Botones de quitar
        const botonesQuitar = document.querySelectorAll(".btnQuitar");
        for (const boton of botonesQuitar){
            boton.onclick = (event) =>{
                event.preventDefault();
                this.quitar(Number(boton.dataset.id));
            }
        }
        spanCantidadProductos.innerText = this.totalProductos;
        spanTotalCarrito.innerText = this.total;
    }
}

class Producto{
    constructor(id, nombre, precio, categoria, imagen = false){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
    }
}

const bd = new BaseDeDatos();

const divProductos = document.querySelector("#productos");
const divCarrito = document.querySelector("#carrito");
const spanCantidadProductos = document.querySelector("#cantidadProductos");
const spanTotalCarrito = document.querySelector("#totalCarrito");
const formBuscar = document.querySelector("#formBuscar");
const inputBuscar = document.querySelector("#inputBuscar");
const botonPagar = document.querySelector("#botonPagar");
const botonesCategorias = document.querySelectorAll(".botonCategoria");

botonesCategorias.forEach((boton) =>{
    boton.addEventListener("click", (event) => {
        event.preventDefault();
        const botonSeleccionado = document.querySelector(".seleccionado");
        if (botonSeleccionado){
            botonSeleccionado.classList.remove("seleccionado");
        }
        boton.classList.add("seleccionado");
        const productosPorCategoria = bd.registrosPorCategoria(boton.innerText);
        cargarProductos(productosPorCategoria);
    });
});

document.querySelector("#btnTodos").addEventListener("click", (event) => {
    event.preventDefault();
    cargarProductos(bd.productos);
});


bd.traerRegistros().then((productos) => cargarProductos(productos));

//Muestra los registros de la base de datos en nuestro HTML
function cargarProductos(productos){
    divProductos.innerHTML ="";
    for (const producto of productos){
        divProductos.innerHTML += `
        <div class=" producto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="img/${producto.imagen}" width="300px" />
                </a>
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${producto.nombre}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-black-400">S/ ${producto.precio}</p>
                    <a href="#" class="btnAgregar inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-id="${producto.id}">Agregar al carrito</a>
                </div>
            </div>`;
    }
    //Botones de agregar al carrito
    const botonesAgregar = document.querySelectorAll(".btnAgregar");
    for (const boton of botonesAgregar) {
        boton.addEventListener("click", (event) => {
            event.preventDefault();
            const id = Number(boton.dataset.id);
            const producto = bd.registroPorId(id);
            carrito.agregar(producto);
        })
    }
}

//Evento buscador
formBuscar.addEventListener("submit", (event) => {
    event.preventDefault();
    const palabra = inputBuscar.value;
    cargarProductos(bd.registrosPorNombre(palabra.toLowerCase()));
})

inputBuscar.addEventListener("keyup", (event) => {
    event.preventDefault();
    const palabra = inputBuscar.value;
    cargarProductos(bd.registrosPorNombre(palabra.toLowerCase()));
})


// Mensaje de compra realizada con la librería Sweet Alert
botonPagar.addEventListener("click", (event) => {
    event.preventDefault();
    Swal.fire({
        title: "Pago Exitoso",
        text: "¡Tu compra está en camino, pronto tu gatito podra disfrutarlo!",
        icon: "success",
        confirmButtonText: "Aceptar",
    });
    // Vacíamos el carrito
    carrito.vaciar();
});

//Objeto carrito
const carrito = new Carrito();