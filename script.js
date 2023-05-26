// cree el array que contiene los elementos de la lista de contactos
    let miArrayContactos = ["David Urriago", "Juan Almario", "Daniel Piedrahita"]; 


// la función recorre todo el array con el for of y con el console.log imprime los contactos en cada iteración

function imprimirContactos() {


  for (let contacto of miArrayContactos) {

    console.log(contacto);




  }
}


// aaqui definí la función para agregarContactos, lo que hace es agregar al final de array un nuevo elemento con push

     function agregarContacto(nombre) {
        miArrayContactos.push(nombre);

        return "agregado satisfactoriamente..."



} 

// en esta función se toma el parámetro nombreContacto, con el método filter se crea un nuevo array llamado miArrayActualizada donde se filtraran todos los nombres menos el que definimos en nombreContacto

 const borrarContacto = (nombreContacto) => {
          
       const miArrayActualizada = miArrayContactos.filter((contacto) => contacto !== nombreContacto);

       if (miArrayActualizada.length < miArrayContactos.length) {



    miArrayContactos = miArrayActualizada;
    return "eliminado satisfactoriamente...";



    } 

      else {
        
        return "¡no existe!";





    
}
}; 

       




    

  //Método de uso:
      //para mostrar el array se le da la instrucción imprimirContactos();
      //para agregar se le da la instrucción agregarContacto("Nombre Apellido") para añadir un nuevo contacto
      //para eliminar se le da borrarContacto("Nombre Apellido") se debe escribir el nombre tal cual, de lo contrario, devuelve el texto: ¡no existe!
    






