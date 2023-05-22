// se crea el array que contiene los elementos de la lista de contactos
let arrayContactos = ["David Urriago", "Juan Almario", "Daniel Piedrahita"];


// se define la funcion para imprimir los elementos del array, se agrega el bucle for para que recorra todo el array y que despues imprima los cambios en el array
function imprimirContactos() {
  console.log("Lista de contactos:");

 for (let i = 0; i < arrayContactos.length; i++) {
  console.log(arrayContactos[i]);



  }
}


// se define la funcion agregarContactos para hacer un Push a la lista y de esta manera agregar elementos al array
function agregarContacto(nombre) {
  arrayContactos.push(nombre);

}

// esta funcion quita un contacto existente del array
function borrarContacto(nombre) {
  const quitarContacto = contactos.filter(contacto => contacto !== nombre);
  contactos = quitarContacto;
  

}
