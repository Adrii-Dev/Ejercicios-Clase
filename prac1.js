let contenedor = document.createElement("div")
contenedor.classList.add("contenedor")

let titulo = document.createElement("h3")
let parrafo = document.createElement("p")

titulo.textContent = "2º de FP DAW"
parrafo.textContent = "Lista de alumnos"

let lista = document.createElement("ul")
let alumno1 = document.createElement("li")
let alumno2 = document.createElement("li")
let alumno3 = document.createElement("li")

alumno1.textContent = "Alumno 1"
alumno2.textContent = "Alumno 2"
alumno3.textContent = "Alumno 3"

lista.appendChild(alumno1)
lista.appendChild(alumno2)
lista.appendChild(alumno3)

let pie = document.createElement("footer")
pie.textContent = "Este es mi pie de página"

contenedor.appendChild(titulo)
contenedor.appendChild(parrafo)
contenedor.appendChild(lista)
contenedor.appendChild(pie)

document.body.appendChild(contenedor)