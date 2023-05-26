// aqui definÍ el array, con parametros en null por defecto, para mas adelante poder modificar esos valores. 

let miArrayContactos = [
   
  { id: 4576, nombre: "David", apellido: "Urriago", telefono: null, ubicacion: { ciudad: null, direccion: null} },
  { id: 4567, nombre: "Juan", apellido: "Almario", telefono: null, ubicacion: { ciudad: null, direccion: null} }, 
  { id: 76426, nombre: "Daniel", apellido: "Piedrahita", telefono: null, ubicacion: { ciudad: null, direccion: null} },



];



// aqui definí la función para imprimir el array
// la función recorre todo el array con el for of y con el console.log imprime los contactos en cada iteración

function imprimirContactos() {


  for (let contacto of miArrayContactos) {
    console.log(contacto);




  }
}






// aqui definí la función para agregar contactos
// se toman varios parametros y se almacenan en un objeto nuevo que seria contactoNuevo, utilicé el operador de coalecencia || para que si no esta definido un valor imprima null


   function agregarContacto(id, nombre, apellido, telefono, ciudad, direccion) {


      const contactoNuevo = {};

            contactoNuevo.id = id || "null";
            contactoNuevo.nombre = nombre || "null";
            contactoNuevo.apellido = apellido || "null";
            contactoNuevo.telefono = telefono || "null";
            contactoNuevo.ubicacion =  {};
            contactoNuevo.ubicacion.direccion = direccion || "null";
            contactoNuevo.ubicacion.ciudad = ciudad || "null";


      
      miArrayContactos.push(contactoNuevo);

      return "agregado satisfactoriamente...";



}



//aquí definí la función para borrar contactos
// esta funcion va a tomar el parametro de id del contacto que se quiere eliminar, comienza en una cadena vacia y con el bucle forEach busca si el valor que le dimos en idContacto existe, si existe lo elimina con elmetodo splice, si no, imprime no existe
// 

  const borrarContacto = (idContacto) => {

    let contactoEliminado = "";

        miArrayContactos.forEach((contacto, index) => {


          if (contacto.id === idContacto) {


            contactoEliminado = contacto;
            miArrayContactos.splice(index, 1);


          }
        });

        if (contactoEliminado  !== "") {

          return "eliminado satisfactoriamente...";


        } 
        
        else {

          return "¡no existe!";


        }
      };






//aquí definí la función para actualizar un contacto
// con el método find se busca el contacto por el id, es decir que cada contacto debe tener su id, con if se comprueba si es válido el id, ya dentro del if se una los operadores para actualizar solo las variables que le definamos un valor, las demás se quedan con el valor existente 

  const actualizarContacto = (id, nombre, apellido, telefono, ciudad, direccion) => {


      
      const seleccionarContacto = miArrayContactos.find((contacto) => contacto.id === id);

        if (seleccionarContacto) {


          seleccionarContacto.nombre = nombre !== undefined ? nombre : seleccionarContacto.nombre;
          seleccionarContacto.apellido = apellido !== undefined ? apellido : seleccionarContacto.apellido;
          seleccionarContacto.telefono = telefono !== undefined ? telefono : seleccionarContacto.telefono;
          seleccionarContacto.ubicacion.ciudad = ciudad !== undefined ? ciudad : seleccionarContacto.ubicacion.ciudad;
          seleccionarContacto.ubicacion.direccion = direccion !== undefined ? direccion : seleccionarContacto.ubicacion.direccion;

  
          return "actualizado satisfactoriamente...";
          

      } 
      
            else {

              return "¡No existe!";



      }


};


///método de uso
    // para usar se puede comenzar con dar la instrucción imprimirContactos();
    // para agregar un contacto se le da la instrucción agregarContacto(id,"nombre","apellido",telefono,"ciudad","direccion"); por ejemplo agregarContacto(123878,"Pedro","Salgado",37896320,"Cali","Carrera 108 # 45 - 167"); de esta manera se agregan los valores que le dimos, si algun valor no se define se remplaza por "null"
    //para borrar un contacto se usa la instrucción borrarContacto(id); por ejemplo, si quiero borrar el contacto anterior mencionado, se usa la instrucción borrarContacto(123878);
    // para usar la función de actualizarContacto se debe especificar el id del contacto, luego modificar sus valores en orden, ejemplo actualizarContacto(id,"nombre","apellido", telefono,"ciudad","direccion",). un ejemplo es si se desea modificar el segundo contacto predeterminado se debe colocar: actualizarContacto(4567,"Roberto","Cabra"); y se modificarían el nombre y el apellido
