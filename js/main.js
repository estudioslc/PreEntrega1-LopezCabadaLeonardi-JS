
// Función para verificar la edad y mostrar un mensaje
function verificarEdad(edad) {
    if (edad >= 18) {
        alert("Eres mayor de edad. Puedes ingresar.");
    } else {
        alert("Eres menor de edad. El acceso está restringido.");
    }
}

// Bucle para pedir la edad hasta que se ingrese un número válido
let edad;
do {
    // Solicitar la edad al usuario
    edad = prompt("Por favor, ingresa tu edad:");

    // Convertir un número:
    edad = parseInt(edad);

    // Verificar si lo ingresado es un número válido
    if (isNaN(edad)) {
        alert("Por favor, ingresa un número válido.");
    }
} while (isNaN(edad));

// Llamar a la función para verificar la edad
verificarEdad(edad);

