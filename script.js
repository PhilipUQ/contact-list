// se crea el array que contiene los elementos de la lista de contactos
/* let arrayContactos = ["David Urriago", "Juan Almario", "Daniel Piedrahita"]; */


// se define la funcion para imprimir los elementos del array, se agrega el bucle for para que recorra todo el array y que despues imprima los cambios en el array
/* function imprimirContactos() {
  console.log("Lista de contactos:");

 for (let i = 0; i < arrayContactos.length; i++) {
  console.log(arrayContactos[i]);



  }
} */


// se define la funcion agregarContactos para hacer un Push a la lista y de esta manera agregar elementos al array
/* function agregarContacto(nombre) {
  arrayContactos.push(nombre);

} */

// esta función quita un contacto existente del array, declaró la variable arrayContactosNuevos el método filter este va a crear un nuevo array filtrando todos los datos distintos a los que se le dio en nombre al principio de la variable 
/* function borrarContacto(nombre) {
  const arrayContactosNuevos = arrayContactos.filter(contacto => contacto !== nombre);
  const quitarContacto = arrayContactosNuevos.length < arrayContactos.length;
  
  if (quitarContacto) {
    arrayContactos = arrayContactosNuevos;



  }
}
 */


// ejercicio numero 2 ----------------------------------------------------------------------------------------------------------------------------------------------------------


//aquí se definió las variables, por defecto las que no están definidas son null, en espera de una futura modificación o simplemente se deja sin definir, estos son strings
let arrayContactos = [
  { id: 1, nombres: "David", apellidos: "Urriago", telefono: null, ubicaciones: null, ciudad: null, direccion: null },
  { id: 2, nombres: "Juan", apellidos: "Almario", telefono: null, ubicaciones: null, ciudad: null, direccion: null },
  { id: 3, nombres: "Daniel", apellidos: "Piedrahita", telefono: null, ubicaciones: null, ciudad: null, direccion: null }

];


// aqui se definió la función para imprimir el array
// esta funcion imprime el array, dejando en "null" las variables no definidas
function imprimirContactos() {
  console.log("Lista de contactos:");
  for (const contacto of arrayContactos) {
    const {id, nombres, apellidos, telefono, ubicaciones, ciudad, direccion} = contacto;
    console.log(`ID: ${id ?? "null"}, Nombres: ${nombres ?? "null"}, Apellidos: ${apellidos ?? "null"}, Teléfono: ${telefono ?? "null"}, Ubicaciones: ${ubicaciones ?? "null"}, Ciudad: ${ciudad?? "null"}, Dirección: ${direccion?? "null"}`);
  }
}
// aqui se definió la función para agregar contactos
// en esta función vamos a agregar un nuevo contacto, se usó el operador || para imprimir el valor de la variable si está definido, de lo contrario que imprima null, después se hace un push para agregar el nuevo contacto al array
function agregarContacto(contacto) {
  const nuevoContacto = {
    id: arrayContactos.length + 1,
    nombres: contacto.nombres || null,
    apellidos: contacto.apellidos || null,
    telefono: contacto.telefono || null,
    ubicaciones: contacto.ubicaciones || null,
    ciudad: contacto.ciudad || null,
    direccion: contacto.direccion || null
  };

  arrayContactos.push(nuevoContacto);
}
  

//aquí se definió la función para borrar contactos
// la función borrarContacto solamente va a responder al id, es decir, si quiero borrar un contacto tengo que especificar cuál mediante el id, por ejemplo, si quiero borrar el contacto número 3 especifico que el id es el 3
function borrarContacto(valor) {
  arrayContactos = arrayContactos.filter(contacto => !Object.values(contacto).includes(valor));
  
}


    



//aquí definí la función para actualizar un contacto, (este es para el ejercicio 3 asi que lo dejo aqui comentado peor funcional en la rama review-1)
// esta función se usa findIndex en el array arrayContactos para encontrar el índice del contacto, después guarda una referencia del contacto con el contactoIndex y después actualiza con los valores que se le da en campo
/* function actualizarContacto(valor, contactoActualizado, campo, nuevoValor) {
  const contactoIndex = arrayContactos.findIndex(contacto => Object.values(contacto).includes(valor));
  if (contactoIndex !== -1) {
    const contacto = arrayContactos[contactoIndex];
    contacto[campo] = nuevoValor !== undefined ? nuevoValor : contacto[campo];
    contacto.nombres = contactoActualizado.nombres !== undefined ? contactoActualizado.nombres : contacto.nombres;
    contacto.apellidos = contactoActualizado.apellidos !== undefined ? contactoActualizado.apellidos : contacto.apellidos;
    contacto.telefono = contactoActualizado.telefono !== undefined ? contactoActualizado.telefono : contacto.telefono;
    contacto.ubicaciones = contactoActualizado.ubicaciones !== undefined ? contactoActualizado.ubicaciones : contacto.ubicaciones;
    contacto.ciudad = contactoActualizado.ciudad !== undefined ? contactoActualizado.ciudad : contacto.ciudad;
    contacto.direccion = contactoActualizado.direccion !== undefined ? contactoActualizado.direccion : contacto.direccion;

    
  }
} */

// para usar se puede comenzar con dar la instrucción imprimirContactos();
// para agregar un contacto por ejemplo vamos a agregar un nuevo contacto llamado Pedro, se le da la instrucción agregarContacto({nombre: "Pedro"}); de esta manera se agrega un contacto con un id número 4, ya que la función agrega automáticamente el id haciendo el conteo del index del array. También se puede usar la instrucción con cualquier variable, agregarContacto({apellido: "salgado"}) para no agregar el nombre sino el apellido.
//para borrar un contacto se usa la instrucción borrarContacto(); por ejemplo, si quiero borrar el contacto número 2 se usa la instrucción borrarContacto(2); ya que borrar contacto busca el id del contacto

