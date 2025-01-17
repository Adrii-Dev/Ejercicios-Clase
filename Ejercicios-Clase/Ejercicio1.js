//Funcion JS que se encargue de conmutar la presencia de la clase activado en todos los elementos div

let elemento =document.getElementById('item')

let cambiarId = (element) => {
    if (element.classList.contains("item")){
        element.classList.replace("item","item-activado")
    }else{
        element.classList.replace("item-activado","item")
    }
}

cambiarId(elemento)

//Solución
function conmutar_clase(){
    let items = document.querySelectorAll("div.item") //Pillar todos los div que en clase contengan 'item'
    for (let item of items) {
        item.classList.toggle("activado") //Si ademas de item tiene 'activado' la quita y si no la tiene la pone
    }
}