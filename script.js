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

// esta función quita un contacto existente del array, declaró la variable arrayContactosNuevos el método filter este va a crear un nuevo array filtrando todos los datos distintos a los que se le dio en nombre al principio de la variable 
function borrarContacto(nombre) {
  const arrayContactosNuevos = arrayContactos.filter(contacto => contacto !== nombre);
  const quitarContacto = arrayContactosNuevos.length < arrayContactos.length;
  
  if (quitarContacto) {
    arrayContactos = arrayContactosNuevos;



  }
}

