// Async modificador que se utiliza cuando definimos una funcion para declarar que es asincrona
// Convierte la funcion en una promesa
async function multiplicar(a,b) {
    return a*b
}

let a = multiplicar(2,5)
console.log(a)

a.then(resultado => console.log(resultado))

// Await, palabra reservada, se utiliza para esperar a la respuesta que devuelve una promsea cuando se resuelve o devuelve error

async function programaPrincipal() {
    function temporizador(tiempo){
        return new Promise(function(resolver, rechazar){
            setTimeout(function(){
                resolver(`Temporizador de ${tiempo} ms terminado`)
            }, tiempo)
        })
    }

    let aa = await temporizador(3000)// Hace que el codigo se pare hasta que se resuelva la funcion temporizador
    console.log(aa)
}

// programaPrincipal()
// Suponemos que la funcion esta definida

programaPrincipal().then(function(a){// si programaPrincipal fuese asincrono, esperaria que terminase su ejecucion y despues haria el .then()
    console.log(a)
})

async function programa() {
    // llamada a funcion con await
    let a = await programaPrincipal()

}

// Trarar errores con async/await

async function programita() {
    try {
        let a = await funcionAsincrona()
    } catch (error) {
        // procesamiento del error
        console.log(error)
    }
}

// await solo se puede utilizar en modulos y dentro de funciones async, nunca puedes poner un await en el programa principal
// las promesas y sus metodos then y catch si que pueden usarse en cualquier tipo de funcion
// se puede combinar el uso de await y los metodos then y catch de las promesas

async function programitis() {
    let respuesta = await fetch("http://Le pasamos una URL")// fetch hace una peticion get a la url, con await te aseguras que se espere hasta que devuelva la consulta
    respuesta.json().then(datos => {
        console.log(datos.login)
    })
}