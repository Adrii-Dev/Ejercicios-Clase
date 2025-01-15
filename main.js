//javascript.info
//https://developer.mozilla.org/es/docs/Web/API
let tarjeta = document.createElement("div")//Crear el elemento div
tarjeta.classList.add("tarjeta")//Añadir una clase

let titulo = document.createElement("div")
titulo.classList.add("tarjeta-titulo")

let encabezado = document.createElement("h2")
encabezado.textContent = "Hola caracola, crack"
encabezado.style.color = "Red"

titulo.append(encabezado)
tarjeta.append(titulo)
//append añade un elemento al final de otro
//prepend añade un elemento al principio de otro
//before añade un elemento antes de otro
//after añade un elemento después de otro
//reomve elimina un elemento
//replaceWith reemplaza un elemento por otro

Element.hasAttribute("class")//Devuelve true si el elemento tiene el atributo class
Element.getAttribute("class")//Devuelve el valor del atributo class
Element.setAttribute("class","tarjeta")//Establece el valor del atributo class
Element.removeAttribute("class")//Elimina el atributo class
Element.classList.add("tarjeta")//Añade la clase tarjeta
Element.classList.remove("tarjeta")//Elimina la clase tarjeta
Element.classList.contains("tarjeta")//Devuelve true si el elemento tiene la clase tarjeta
Element.classList.replace("tarjeta","tarjeta-2")//Reemplaza la clase tarjeta por la clase tarjeta-2
Element.classList.toggle("tarjeta",true)//Añade la clase tarjeta
Element.classList.toggle("tarjeta",false)//Elimina la clase tarjeta
Element.classList.toggle("tarjeta")//Si tiene la clase la elimina y si no la tiene la añade


document.body.append(tarjeta)//llamar al body y meterle el elemento tarjeta que es un div