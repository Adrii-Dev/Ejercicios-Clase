// Funciones de callback
// let alumnos = [
//     "alumno1", "alumno2", "alumno3"
// ]

// let letrasMayusculas = alumnos.map(function(alumno){
//     console.log(`Convirtiendo el nombre del alumno ${alumno} en MAYUSCULAS: `)
//     return alumno.toUpperCase()
// })

// console.log("Esto se ejecutará despues de que termine el map")

// for (alumno in letrasMayusculas){
//     console.log(`Este es el nombre del alumno: ${letrasMayusculas[alumno]}`)
// }
// Las funciones asincronas consisten en funciones que no devuelven el valor de manera inmediata
// ---------------------------------------------------------------------------------------------
// function saludar(){
//     console.log("Hola crack")
// }

// setTimeout(saludar, 2000) // Ejecuta una vez con delay de 2 segundos

// Pyramid of Doom
// setTimeout(function(){
//     console.log("Hola crack")
//     setTimeout(function(){
//         console.log("Segundo mensaje!")
//         setTimeout(function(){
//             console.log("Tercer mensaje!")
//         }, 1000)
//     },3000)
// }, 2000)
// ---------------------------------------------------------------------------------------------
// let usuario = {
//     nombre: "Pikachu",
//     // Metodo, funciones enlazadas a un objeto
//     saludarConRetardo: function(){
//         setTimeout(() => {
//             // Funcion flecha: no tiene 'this', por tanto el 'this' se coge del contexto léxico
//             // Del cuerpo de la función 'saludarConRetardo'
//             console.log(`Hola, soy ${this.nombre}`)
//         }, 2000)
//     }
// }

// usuario.saludarConRetardo()
// -----------------------------------------------------------------------------------------------
// Las promesas son objetos que definen funciones especiales dentro de un objeto
// Puede encontrarse en estados: pending(pendiente, por defecto), fulfilled(resuelta) y rejected(rechazada)

// Metodos que tienen las promesas:
// then((funcion si se resuelve), (funcion si se rechaza))
// Catch(funcion que se ejecuta cuando la promesa se rechaza y devuelve un error)
// finally(funcion que se ejecuta siempre tanto si se resuelve como si no)

// Lanzamiento del proceso asincrono
// IMPORTANTE: 'a' almacena una promesa, no el resultado

// let a = funcionQueDevuelvePromesa(parametros)

// Procesamiento de los resultados

// a.then (
//     function(resultado){
//         // Aqui procesamos el resultado si no hay error
//     },
//     function(error){
//         // Aqui procesamos el error si se produce
//     }
// )

// a.finally (
//     function(){
//         // Este mensaje se muestra siempre, antes del resultado o error
//         console.log("Primer finally")
//     }
// ).then(function ...).finally(function ...)

// Función que devuelve una promesa
function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (numero > 0) {
            resolve("El número es positivo.");
        } else {
            reject("El número no es positivo.");
        }
    });
}

// Llamada a la función
let a = verificarNumero(5); // Cambia el valor a -3 para probar el caso de error

// Procesamiento de los resultados
a.then(
    function (resultado) {
        console.log("Éxito:", resultado);
    },
    function (error) {
        console.error("Error:", error);
    }
);
