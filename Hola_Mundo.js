console.log("Hola, crack")
let a = function suma(a,b) { return a + b}
const b = (a,b) => { return a + b}
const c = (a,b) => a + b
i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}
console.log(n)
const F = (f) => { return f ?? 4}
const A =[1,2,3,4]
A.length
const AA =[1,[1,2,3],2,3]
A.concat(AA)//[...A,...AA]
const B =[1,2,3,"B"]
const C =[1,2,3,"C"]
B.concat(C)
for (let ele of B) { console.log(ele)}
C.forEach(ala => (console.log(ala)))//forEach acepta funcion flecha, el for no
B.push("BB")
B.indexOf("B")
B.includes(9)
B.some(ili => ili > 0)
B.every(ili => ili > 0)
B.find(ili => ili > 2)
B.findIndex(ili => ili > 2)
const sarray=[34,7,4,2,1,8,20]
sarray.sort((a,b) => a > b)
sarray.filter(ele => ele > 10)
sarray.map(ele => ele + 6)
sarray.reduce((suma,a) => suma + a)
//Gestion de eventos en javascript
//Eventos de raton: click, dblclick, mouseenter, mouseleave, mousedown, mouseup, mousemove
//Eventos de teclado: keydown, keyup, keypress
//Eventos de foco: focus, blur, focusin, focusout
//Eventos de formulario: submit, reset, change, input
//Eventos de documento: DOMContentLoaded, load, beforeunload, unload
/* 
<button id="boton">Haz click</button>
document.getElementById("boton").addEventListener("click",function() {
  alert("Has hecho click")})
document.getElementById("boton").onlick = function() {

boton.removeEventListener("click",function() --> Para eleminiar un evento

----En HTML----
<button id="boton">Haz click</button>
<script>
  function saludar(evento) {
    console.log("Hola desde el elemento $(this)")
    console.log("Hola desde el elemento $(evento.type)")
  }
</script>
--------------------------------

<div onlick="alert('Click')"> --------> currentTarget
  <p>Click aquí 1</p> ----------------> tarjet
  <p>Click aquí 2</p> ----------------> tarjet
  <p>Click aquí 3</p> ----------------> tarjet
</div>

---------------------------------

<a href="https://www.google.com" onclick="accion1(evento)">Click aquí</a>
<a href="https://www.google.com" onclick="accion2(evento)">Click aquí</a>

  function accion1(evento) {
    console.log("Se ejecuta el codigo y se va a google")
  }
  function accion2(evento) {
    evento.preventDefault()
    console.log("Se ejecuta el codigo pero NO se va a google")
  }
---------------------------------
  Formularios
  <form name="datos" id="formulario">
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre">
    <input type="text" name="apellido" id="apellido">
    <input type="submit" value="Enviar">
  </form>
  let datosPersonales = document.forms.datos ------> te pilla los valores de los inputs del formulario a traves de su "name"
  Se crea un array y se busca con document.forms[0] o document.forms["datos"]
  let nombre = datosPersonales.elements.nombre.value para el valor solo y sin el .value para el input entero

  Radio
  <form name="encuesta">
    Indica tu edad:
    <input type="radio" name="edad" value="menor18">
    <input type="radio" name="edad" value="mayor18" checked>
  </form>

  Checkbox
  <input type="checkbox" name="intereses" value="deporte">
  <input type="checkbox" name="intereses" value="cine">

  Select
  <select id="lenguaje">
    <option value="java">Java</option>
    <option value="javaS">JavaS</option>
  </select>

  Eventos de formularios:
  focus, blur, change, input, submit

  Validacion de formularios:
  form.checkValidity() form.reportValidity()

--------------------------------------------
  HTML personalizados

  Deben contener un guion en el nombre
  <mi-contador>
  customElements.define('nombre-elemento', ClaseElemento, { extends: 'NombreElementoBase' })

--------------------------------------------
  Almacenamiento local

  localStorage hay que eliminar de forma exlicita, no se borran por si solo
  sessionStorage se borra al cerrar la ventana

  localStorage.setItem("nombre", "valor")
  localStorage.getItem("nombre")
  localStorage.removeItem("nombre")
  localStorage.clear()
  localStorage.length
*/