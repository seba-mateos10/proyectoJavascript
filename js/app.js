// CARGA DATOS PARA REGISTRO //
alert("Te damos la bienvenida a Gatitos Felices.\nPor favor, regístrate para comenzar a comprar.");

let username = "";
let password = "";

while (username === ""){
    username = prompt("Ingresa un nombre de usuario: ");
}

while (password === "" || password.length < 8 || password.length > 14){
    password = prompt("Ingresa una contraseña (entre 8 y 14 caracteres): ");
}

alert("Registro exitoso.\nTe damos la bienvenida a nuestra tienda " + username);

alert("Guarda esta información en un lugar seguro para tus futuras compras.\nNombre de usuario: " + username + "\n" + "Contraseña: " + password) + "\n";


//! FILTRAR BÚSQUEDA Y STOCK DE PRODUCTO (FILTER/SOME)

const buscarProductos = [
    {
        nombre: "para gatos castrados",
        precio: 50
    },
    {
        nombre: "para gatos adultos sabor mix",
        precio: 60
    },
    {
        nombre: "sabor a pescado",
        precio: 35
    },
    {
        nombre: "sabor a pollo",
        precio: 35
    },
    {
        nombre: "para gato adulto todos los tamaños",
        precio: 35
    },
    {
        nombre: "para gatos de temprana edad",
        precio: 90
    },
    {
        nombre: "para gatos adultos",
        precio: 75
    },
    {
        nombre: "gourmet",
        precio: 10
    },
    {
        nombre: "sabor a salmon",
        precio: 10
    },
    {
        nombre: "sabor a mousse con pollo",
        precio: 10
    },
    {
        nombre: "sabor a pollo y arroz",
        precio: 90
    },
];

const nombres = buscarProductos.map(producto => producto.nombre);
const lista = nombres.join('\n');

let eligeProducto = prompt(`Ingresa el producto de esta lista que te interese buscar: \n${lista}`);
console.log(buscarProductos.filter((elem) => elem.nombre.includes(eligeProducto)));

let stockProducto = prompt(`Ingresa el producto que te interese consultar su stock:\n${lista}`);
let encontro = buscarProductos.some((elem) => elem.nombre === stockProducto);

if (encontro) {
    alert("Hay stock del producto ingresado.");
} else {
    alert("El producto ingresado no se encuentra disponible.");
    encontro = false;
}

console.log(encontro);


// REALIZANDO LA COMPRA DE LOS PRODUCTOS //
// LISTA DE PRODUCTOS //

let productos = [
    {
        nombre: "Royal canin para gato castrado",
        precio: 50
    },
    {
        nombre: "Royal canin para gato adulto",
        precio: 60
    },
    {
        nombre: "Whiskas sabor a pescado",
        precio: 35
    },
    {
        nombre: "Whiskas sabor a pollo",
        precio: 35
    },
    {
        nombre: "Pro plan para gato de temprana edad",
        precio: 90
    },
    {
        nombre: "Pro plan para gato adulto",
        precio: 75
    },
    {
        nombre: "Gourmet mousse con pollo",
        precio: 10
    },
    {
        nombre: "Gourmet terrine con salmon",
        precio: 10
    },
];

//MOSTRAR LISTA
function mostrarProductos() {
    console.log("--- LISTA DE PRODUCTOS ---");
    for (let i = 0; i < productos.length; i++) {
    console.log(`${i + 1}. ${productos[i].nombre} - S/ ${productos[i].precio}`);
        }
}

//COMPRAR PRODUCTOS
    function comprarProductos() {
        let carrito = [];
        let opcion;
    
        while (opcion !== "0") {
        mostrarProductos();
        opcion = prompt("Selecciona un número (del 1 al 8) para comprar. (0 PARA TERMINAR)\n1-Royal canin para gato castrado $/50\n2-Royal canin para gato adulto $/60\n3-Whiskas sabor a pescado $/35\n4-Whiskas sabor a pollo $/35\n5-Pro plan para gato de temprana edad $/90\n6-Pro plan para gato adulto $/75\n7-Gourmet mousse con pollo $/10\n8-Gourmet terrine con salmon $/10");
    
        if (opcion !== "0") {
            let productoIndex = Number(opcion) - 1;
    
            if (productoIndex >= 0 && productoIndex < productos.length) {
            let cantidad = Number(prompt(`¿Cuántos ${productos[productoIndex].nombre} quieres comprar?`));
            let producto = {
                ...productos[productoIndex],
                cantidad: cantidad
            };
            carrito.push(producto);
            alert(`Producto añadido al carrito: ${producto.nombre}`);
            alert(`La cantidad que compraste: ${producto.cantidad}`);
            } else {
            alert("Esa opción no es válida. Inténtalo nuevamente.")
            }
        }
        }

        // RESUMEN DE COMPRA //
        let total = 0;

        for (let i = 0; i < carrito.length; i++) {
        let producto = carrito[i];
        total = producto.precio * producto.cantidad;
        }
        alert(`Total a pagar : S/ ${total}`);
    }

  //EJECUTAR COMPRA DE PRODUCTOS
    comprarProductos();

// ESCOGE COLOR Y NOMBRE DEL COLLAR //

while(true){
    let color = prompt("Como regalo por tu compra te damos un collar para tu gato/a.\nElige un color (negro, azul, rosa, blanco o verde)");
    let nombreGato = prompt("Ahora, escribe el nombre de tu gato/a");

    switch (color) {
        case "negro":
            alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
            break;
        case "azul":
            alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
            break;
        case "rosa":
            alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
            break;
        case "blanco":
            alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
            break;
            case "verde":
            alert(`Has elegido el color ${color} con el nombre "${nombreGato}"`);
            break;
        default:
            alert("Ingresaste un color no válido");
        continue;
    }
    break;
}

alert ("Muchas gracias por tu compra " + username + ", estamos trabajando en el envio de tus productos, pronto tu gatito podra disfrutarlos.")

