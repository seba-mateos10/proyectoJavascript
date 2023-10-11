// // CARGA DATOS PARA REGISTRO //
// alert("Te damos la bienvenida a Gatitos Felices.\nPor favor, regístrate para comenzar a comprar.");

// let username = "";
// let password = "";

// while (username === ""){
//     username = prompt("Ingresa un nombre de usuario: ");
// }

// while (password === "" || password.length < 8 || password.length > 14){
//     password = prompt("Ingresa una contraseña (entre 8 y 14 caracteres): ");
// }

// alert("Registro exitoso.\nTe damos la bienvenida a nuestra tienda " + username);

// alert("Guarda esta información en un lugar seguro para tus futuras compras.\nNombre de usuario: " + username + "\n" + "Contraseña: " + password) + "\n";


// //! FILTRAR BÚSQUEDA Y STOCK DE PRODUCTO (FILTER/SOME)

// const buscarProductos = [
//     {
//         nombre: "para gatos castrados",
//         precio: 50
//     },
//     {
//         nombre: "para gatos adultos sabor mix",
//         precio: 60
//     },
//     {
//         nombre: "sabor a pescado",
//         precio: 35
//     },
//     {
//         nombre: "sabor a pollo",
//         precio: 35
//     },
//     {
//         nombre: "para gato adulto todos los tamaños",
//         precio: 35
//     },
//     {
//         nombre: "para gatos de temprana edad",
//         precio: 90
//     },
//     {
//         nombre: "para gatos adultos",
//         precio: 75
//     },
//     {
//         nombre: "gourmet",
//         precio: 10
//     },
//     {
//         nombre: "sabor a salmon",
//         precio: 10
//     },
//     {
//         nombre: "sabor a mousse con pollo",
//         precio: 10
//     },
//     {
//         nombre: "sabor a pollo y arroz",
//         precio: 90
//     },
// ];

// const nombres = buscarProductos.map(producto => producto.nombre);
// const lista = nombres.join('\n');

// let eligeProducto = prompt(`Ingresa el producto de esta lista que te interese buscar: \n${lista}`);
// console.log(buscarProductos.filter((elem) => elem.nombre.includes(eligeProducto)));

// let stockProducto = prompt(`Ingresa el producto que te interese consultar su stock:\n${lista}`);
// let encontro = buscarProductos.some((elem) => elem.nombre === stockProducto);

// if (encontro) {
//     alert("Hay stock del producto ingresado.");
// } else {
//     alert("El producto ingresado no se encuentra disponible.");
//     encontro = false;
// }

// console.log(encontro);


// // REALIZANDO LA COMPRA DE LOS PRODUCTOS //
// // LISTA DE PRODUCTOS //

// let productos = [
//     {
//         nombre: "Royal canin para gato castrado",
//         precio: 50
//     },
//     {
//         nombre: "Royal canin para gato adulto",
//         precio: 60
//     },
//     {
//         nombre: "Whiskas sabor a pescado",
//         precio: 35
//     },
//     {
//         nombre: "Whiskas sabor a pollo",
//         precio: 35
//     },
//     {
//         nombre: "Pro plan para gato de temprana edad",
//         precio: 90
//     },
//     {
//         nombre: "Pro plan para gato adulto",
//         precio: 75
//     },
//     {
//         nombre: "Gourmet mousse con pollo",
//         precio: 10
//     },
//     {
//         nombre: "Gourmet terrine con salmon",
//         precio: 10
//     },
// ];

// //MOSTRAR LISTA
// function mostrarProductos() {
//     console.log("--- LISTA DE PRODUCTOS ---");
//     for (let i = 0; i < productos.length; i++) {
//     console.log(`${i + 1}. ${productos[i].nombre} - S/ ${productos[i].precio}`);
//         }
// }

// //COMPRAR PRODUCTOS
//     function comprarProductos() {
//         let carrito = [];
//         let opcion;
    
//         while (opcion !== "0") {
//         mostrarProductos();
//         opcion = prompt("Selecciona un número (del 1 al 8) para comprar. (0 PARA TERMINAR)\n1-Royal canin para gato castrado $/50\n2-Royal canin para gato adulto $/60\n3-Whiskas sabor a pescado $/35\n4-Whiskas sabor a pollo $/35\n5-Pro plan para gato de temprana edad $/90\n6-Pro plan para gato adulto $/75\n7-Gourmet mousse con pollo $/10\n8-Gourmet terrine con salmon $/10");
    
//         if (opcion !== "0") {
//             let productoIndex = Number(opcion) - 1;
    
//             if (productoIndex >= 0 && productoIndex < productos.length) {
//             let cantidad = Number(prompt(`¿Cuántos ${productos[productoIndex].nombre} quieres comprar?`));
//             let producto = {
//                 ...productos[productoIndex],
//                 cantidad: cantidad
//             };
//             carrito.push(producto);
//             alert(`Producto añadido al carrito: ${producto.nombre}`);
//             alert(`La cantidad que compraste: ${producto.cantidad}`);
//             } else {
//             alert("Esa opción no es válida. Inténtalo nuevamente.")
//             }
//         }
//         }

//         // RESUMEN DE COMPRA //
//         let total = 0;

//         for (let i = 0; i < carrito.length; i++) {
//         let producto = carrito[i];
//         total = producto.precio * producto.cantidad;
//         }
//         alert(`Total a pagar : S/ ${total}`);
//     }

//   //EJECUTAR COMPRA DE PRODUCTOS
//     comprarProductos();

// // ESCOGE COLOR Y NOMBRE DEL COLLAR //

// while(true){
//     let color = prompt("Como regalo por tu compra te damos un collar para tu gato/a.\nElige un color (negro, azul, rosa, blanco o verde)");
//     let nombreGato = prompt("Ahora, escribe el nombre de tu gato/a");

//     switch (color) {
//         case "negro":
//             alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
//             break;
//         case "azul":
//             alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
//             break;
//         case "rosa":
//             alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
//             break;
//         case "blanco":
//             alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
//             break;
//             case "verde":
//             alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
//             break;
//         default:
//             alert("Ingresaste un color no válido");
//         continue;
//     }
//     break;
// }

// alert ("Muchas gracias por tu compra " + username + ", estamos trabajando en el envio de tus productos, pronto tu gatito podra disfrutarlos.")



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