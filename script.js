// aqui definÍ el array, con parametros en null por defecto, para mas adelante poder modificar esos valores. 

let miArrayContactos = [
   
  { id: null, nombre: "David", apellido: "Urriago", telefono: null, ubicacion: { ciudad: null, direccion: null} },
  { id: null, nombre: "Juan", apellido: "Almario", telefono: null, ubicacion: { ciudad: null, direccion: null} }, 
  { id: null, nombre: "Daniel", apellido: "Piedrahita", telefono: null, ubicacion: { ciudad: null, direccion: null} },



];



// aqui definí la función para imprimir el array
// la función recorre todo el array con el for of y con el console.log imprime los contactos en cada iteracion

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




//método de uso
    // para usar se puede comenzar con dar la instrucción imprimirContactos();
    // para agregar un contacto se le da la instrucción agregarContacto(id,"nombre","apellido",telefono,"ciudad","direccion"); por ejemplo agregarContacto(123878,"Pedro","Salgado",37896320,"Cali","Carrera 108 # 45 - 167"); de esta manera se agregan los valores que le dimos, si algun valor no se define se remplaza por "null"
    //para borrar un contacto se usa la instrucción borrarContacto(id); por ejemplo, si quiero borrar el contacto anterior mencionado, se usa la instrucción borrarContacto(123878);
