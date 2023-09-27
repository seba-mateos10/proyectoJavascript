// Datos personales del cliente //
let nombre = prompt("Ingrese su nombre por favor")
let apellido = prompt("Ingrese su apellido por favor")
let edad = prompt("Ingrese su edad por favor(debe ser mayor de 18 para poder ingresar)")


// Si el cliente es mayor //
if (edad >= 18) {
    alert("Bienvenido a Gatitos felices " + nombre + " " + apellido + ".");

// Precio por kilo de cada marca
    const alimentoWhiskas = 200
    const alimentoProplan = 300
    const alimentoRoyalcanin = 400
    
    let cantidad; 
    let marcaAlimento;
    let resultado;

// Calculo para saber el precio total de la compra
    function costoTotal(valor1, valor2, valor3){
        const resultado = valor1 * valor2 + valor3;
        return resultado;
    }

    

    while (cantidad != 0){
        cantidad = parseInt(prompt(`Ingresa la cantidad de kilos de alimento que queres llevar para tu gatito:
        El envio es de $0 si compras 10 kilos o mas
        El envio es de $100 si compras entre 5 y 9 kilos
        El envio es de $200 si compras menos de 5 kilos
        `));
        
    
        if (cantidad === 0){
            break;
        }

    // Mientras la cantidad de kilos ingresada sea distinto a 0 //    
        else if (cantidad >= 10 ){ valorEnvio = 0
            alert("Su costo de envio es de $"+ valorEnvio);
        }
        else if (cantidad >=5 ){ valorEnvio = 100
            alert("Su costo de envio es de $"+ valorEnvio);
        }
        else { valorEnvio = 200
            alert("Su costo de envio es de $"+ valorEnvio);
        }
    
    
        marcaAlimento = prompt(`Ingrese la marca de alimento que desee (con numeros):
        1: Whiskas $200 por kilo (basico)
        2: Pro Plan $300 por kilo (standard)
        3: Royal canin $400 por kilo (Premium)
        `);
         
        switch (marcaAlimento){
            case "1":
               resultado = costoTotal(alimentoWhiskas, cantidad, valorEnvio);
               alert("El total a abonar es de $"+ resultado + " por su compra de "+ cantidad +"kg de alimento marca Whiskas");

               alert("Muchas gracias por tu compra " + nombre + " " + apellido + ", estamos trabajando en el envio de tus productos, pronto tu gatito podra disfrutarlos.")
            break;
            case "2":
               resultado = costoTotal(alimentoProplan, cantidad, valorEnvio);
               alert("El total a abonar es de $"+ resultado + " por su compra de "+ cantidad +"kg de alimento marca Pro Plan");

               alert("Muchas gracias por tu compra " + nombre + " " + apellido + ", estamos trabajando en el envio de tus productos, pronto tu gatito podra disfrutarlos.")
            break;
            case "3":
               resultado = costoTotal(alimentoRoyalcanin, cantidad, valorEnvio);
               alert("El total a abonar es de $"+ resultado + " por su compra de "+ cantidad +"kg de alimento marca Royal canin");

               alert("Muchas gracias por tu compra " + nombre + " " + apellido + ", estamos trabajando en el envio de tus productos, pronto tu gatito podra disfrutarlos.")
            break;
            default:
               alert("Operacion Invalida");
            break;
        }

        break;
    }

    // Si la cantidad de kilos ingresada es igual a 0 //
    if (cantidad === 0){
        alert("Operacion invalida")
    }

// Si el cliente es menor //
} else{
    alert("Sos menor de edad. No podes ingresar.")

}

