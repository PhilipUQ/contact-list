// aqui definÍ el array, con parametros en null por defecto, para mas adelante poder modificar esos valores. 

let miArrayContactos = [
  { id: 1, nombre: "David", apellido: "Urriago", telefono: null, ubicacion: null, ciudad: null, direccion: null },
  { id: 2, nombre: "Juan", apellido: "Almario", telefono: null, ubicacion: null, ciudad: null, direccion: null },
  { id: 3, nombre: "Daniel", apellido: "Piedrahita", telefono: null, ubicacion: null, ciudad: null, direccion: null }

];


// aqui definí la función para imprimir el array
// esta funcion imprime el array, dejando en "null" las variables no definidas se usa el operador || para asignar null en caso de que el valor de nombre, apellido, etc... sea falso, de lo contrario lo remplaza por el valor agregado.

function imprimirContactos() {
  console.log("Contactos:");
    miArrayContactos.forEach(
      (contacto) => console.log(

      `id: ${contacto.id}, nombre: ${contacto.nombre || "null"},  apellido: ${contacto.apellido || "null"},  telefono: ${contacto.telefono || "null"}, ubicacion: ${contacto.ubicacion || "null"},  ciudad: ${contacto.ciudad || "null"},  direccion: ${contacto.direccion || "null"},`


    )

    )


}





// aqui definí la función para agregar contactos
// en esta función vamos a agregar un nuevo contacto, se usó el operador ternario ? para imprimir el valor de la variable si está definido, de lo contrario que imprima null, después se hace un push para agregar el nuevo contacto al array
    function agregarContacto(contacto) {
      const contactoNuevo = {
         id: miArrayContactos.length + 1,  nombre: contacto.nombre ? contacto.nombre : null,  apellido: contacto.apellido ? contacto.apellido : null, telefono: contacto.telefono ? contacto.telefono : null, ubicacion: contacto.ubicacion ? contacto.ubicacion : null,  ciudad: contacto.ciudad ? contacto.ciudad : null, direccion: contacto.direccion ? contacto.direccion : null


};
    console.log("Agregado con exito")
      miArrayContactos.push(contactoNuevo);



}






//aquí definí la función para borrar contactos
// la función borrarContacto solamente va a responder al id, es decir, si quiero borrar un contacto tengo que especificar cuál mediante el id, por ejemplo, si quiero borrar el contacto número 3 especifico que el id es el 3
// la funcion lo que hace es primero tomar el parametro id que le asignemos, el index comienza en -1 para que sea mas facil la comprobaion, ya que al hacer el bucle for, si el valor de index es distinto a -1 significa que si encontró el id en el array

function borrarContacto(id)  {

      let index = -1; 
      
      for (let i = 0; i < miArrayContactos.length; i++) {
        if (miArrayContactos[i].id == id) {

          index = i;
            break;

        }


      }

      if (index !== -1) {

        console.log("Eliminado con exito");
        miArrayContactos.splice(index, 1);


      }

          else {

            console.log("contacto no encotrado");


          }





}

//método de uso
    // para usar se puede comenzar con dar la instrucción imprimirContactos();
    // para agregar un contacto por ejemplo vamos a agregar un nuevo contacto llamado Pedro, se le da la instrucción agregarContacto({nombre: "Pedro"}); de esta manera se agrega un contacto con un id número 4, ya que la función agrega automáticamente el id haciendo el conteo del index del array. También se puede usar la instrucción con cualquier variable, agregarContacto({apellido: "salgado"}) para no agregar el nombre sino el apellido.
    //para borrar un contacto se usa la instrucción borrarContacto(); por ejemplo, si quiero borrar el contacto número 2 se usa la instrucción borrarContacto(2); ya que borrar contacto busca el id del contacto

