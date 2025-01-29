// Solicitudes AJAX: solicitar datos sin necesidad de recargar la pagina
// AJAX: Asynchronous JavaScript And XML

// API fetch: permite realizar peticiones http por javascript, es un conjunto de objetos y una funcion global fetch()
// es una funcion asincrona que devuelve una promesa
// fetch(recurso)   El recurso puede ser una URL, un objeto URL o un objeto Request

// Crear de manera dinamica URLs
let url1 = new URL("https://www.misitio.com/paginas/pagina1.php?id=123&name=name1")

console.log(url1.protocol)
console.log(url1.host)
console.log(url1.pathname)
console.log(url1.search)
console.log(url1.searchParams.get("id"))
console.log(url1.searchParams.get("name"))

url1.searchParams.append("nuevo", "cancion del verano")

console.log(url1.search)

// method. GET, POST, PUT, DELETE, HEAD, OPTIONS, PATCH
// headers. Objeto que contiene las cabeceras de la peticion
// body. JSON. formData 
// credencials.
// signal. Nos permite abortar la peticion mediante un objeto AbortController

// fetch nos devuelve un objeto Response
// Response tiene varias propiedades:
// - status. Codigo de estado de la respuesta
// - statusText. Mensaje asociado al codigo de estado
// - ok. Booleano que indica si la respuesta es correcta
// - type. Tipo de respuesta
// - headers. Cabeceras de la respuesta
// - body. Objeto de tipo ReadableStream que contiene el cuerpo de la respuesta

// Metodos del objeto Response:
// - text(). Devuelve una promesa que resuelve con el cuerpo de la respuesta como texto
// - json(). Devuelve una promesa que resuelve con el cuerpo de la respuesta como objeto JSON, seria como el json.parse()
// - formData(). Devuelve una promesa que resuelve con el cuerpo de la respuesta como objeto FormData
// - blob(). Devuelve una promesa que resuelve con el cuerpo de la respuesta como formato binario

// Promsesas que es necesario procesar al recibir datos fecth:
// - objeto Response. Se puede procesar con los metodos text(), json(), formData(), blob()
// - datos de la respuesta. Se pueden procesar con los metodos de la respuesta

// CRUD: Create, Read, Update, Delete

// Ejemplo con funcion asincrona
async function programaPrincipal() {
    let respuesta = await fetch("https://jsonplaceholder.typicode.com/posts")
    // Primera promesa resuelta, 'respuesta' es un objeto Response
    if (respuesta.ok){
        let datos = await respuesta.json()
        // Segunda promesa resuelta, 'datos' es un objeto JSON

        // tratamiento de datos
    }else{
        console.log("Error en la peticion")
    }
}

// Ejemplo con promesas
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(respuesta => {
        // Primera promesa resuelta
        if (respuesta.ok){
            // Segunda promesa resuelta
            return respuesta.json()
        }else{
            throw("Error en la peticion")
        }
    })
    .then(datos => {
        // tratamiento de datos
    })
    .catch(error => {
        console.log(error)
    })

// Construir URL
// let url = new URL("https://jsonplaceholder.typicode.com/posts")
// url.searchParams.append("userId", 1)
// fetch(url).then(...).catch(...)

// Peticion de tipo DELETE
fetch("https://www.miservidor.com/usuarios/usuario2", {
    method: "DELETE"
}).then(response => {
    if (response.ok){
        console.log("Usuario eliminado")
    }else{
        console.log("Error en la peticion")
    }
}).catch(error => {
    console.log(`Error: ${error.message}`)
})

// Ejemplo con POST
async function recibirDatos() {
    let usuario1 = {
        nombre: "Ash",
        apellido: "Ketchum"}

    let response = await fetch("https://www.miservidor.com/usuarios", { 
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(usuario1)})
    
    if (response.ok) {
        console.log("Usuario creado")
        let datos = await response.json()
    }else{
        console.log("Error en la peticion")
    }                                          
}

// Abortar peticiones
// se tiene que crear primero un objeto de AbortController y pasarle la propiedad signal.

const controlador = new AbortController()
fetch("https://www.miservidor.com/usuarios", {signal: controlador.signal})
    .then(response => {
        if (response.ok){
            console.log("Usuario creado")
        }else{
            console.log("Error en la peticion")
        }
    }).catch(error => {
        if (error.name === "AbortError"){
            console.log("Peticion abortada")}
    })

controlador.abort()// La funcion de fecth estaria funcionando en segundo plano, y cuando llega el abort, se cancela la peticion

// API de servidor
// CDN: Content Delivery Network
// Arquitectura REST(API RESTful)

// mecanismo CORS: Cross-Origin Resource Sharing
// PERMITE A LOS SERVIDORES SERVIR CONTENIDO DE OTRO SITIO WEB