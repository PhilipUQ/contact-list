// cree el array que contiene los elementos de la lista de contactos
    let miArrayContactos = ["David Urriago", "Juan Almario", "Daniel Piedrahita"]; 


// definí la función para imprimir los elementos del array, se agrega el bucle for para que recorra todo el array y que después imprima los cambios en el array
 function mostrarContactos() {
  

    for (let i = 0; i <   miArrayContactos.length; i++) {
    console.log(miArrayContactos[i]);



  }
} 


// aaqui definí la función para agregarContactos, lo que hace es agregar al final de array un nuevo elemento

     function agregarContacto(nombre) {
      console.log("Agregado con exito");
        miArrayContactos.push(nombre);


} 

// esta es la función para borrar un contacto, lo que hace la función es buscar en el array el elemento que le di en nombre, si el index existe se sitúa en un elemento que no existe, muestra la cadena de texto: el contacto no existe, de lo contrario si el index existe lo borra con splice y muestra el texto: borrado con éxito.

    function borrarContacto (nombre) {
        let index = miArrayContactos.indexOf(nombre);
         if (index === -1)  { 
          console.log("Contacto no existe");}
          else { 
            console.log("Borrado con exito")
            miArrayContactos.splice (index, 1);}
         
       




    }

  //Método de uso:
      //para mostrar el array se le da la instrucción mostrarContactos();
      //para agregar se le da la instrucción agregarContacto("Nombre Apellido") para añadir un nuevo contacto
      //para eliminar se le da borrarContacto("Nombre Apellido") se debe escribir el nombre tal cual, de lo contrario, devuelve el texto: Contacto no existe
    






