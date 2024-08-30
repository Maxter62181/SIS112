class Persona {
    constructor(nombre, edad, carrera, universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;   
    }
  //Crear las funfiones respectivas para las variables. 
    saludar() {
      return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    }
  
    cumpleanios() {
      return '¡Felicidades! tienes ' + this.edad + ' años.';
    }
  
    estudiar() {
      return 'Estoy estudiando ' + this.carrera;
    }

    institucion_educativa(){
        return 'Hola!, mi nombre es ' + this.nombre + " Y yo estudio en la universidad " + this.universidad; 
    }
// Los botones de modificacion de nombre, universidad, edad, carrera. 
    Modificar_Nombre(){

      let nombrevalido = false; 
      let nuevonombre; 
//El formato Let tiene como objetivo el asignar variables de uso limitado para poder cumplir con las especificaciones. 
      while (!nombrevalido){
        nuevonombre = prompt("porfavor ingrese su nuevo nombre");
        if (!parseInt(nuevonombre) && nuevonombre.trim()!== ""){
          nombrevalido = true; //Se hace uso de datos y requisitos booleanos y numericos o de deteccion de tipo de dato para 
        }else{                 //poder cumplir con los requisitos logicos de una variable, se repite lo mismo en las otras modificaciones. 
          alert("Porfavor ingrese un nombre Valido.")
        }
      }
        this.nombre = String(nuevonombre)
        return "Hola, mi nuevo nombre es " + this.nombre;
    }

    Modificar_Edad() {
      let nuevaEdad;
      let esNumeroValido = false;
  
      while (!esNumeroValido) {
          nuevaEdad = prompt("Por favor, ingrese su nueva edad");
          if (!isNaN(nuevaEdad) && nuevaEdad.trim() !== "" && Number(nuevaEdad) > 0) {
              esNumeroValido = true;
          } else {
              alert("Por favor, ingrese un número válido mayor que 0 para la edad.");
          }
      }
  
      this.edad = Number(nuevaEdad);
      return "!Felicidades!, tu nueva edad es " + this.edad + " años";
  }

    Modificar_Carrera(){
      let nuevacarrera;
      let argumentovalido = false; 

      while (!argumentovalido){
        nuevacarrera = prompt("Porfavor ingrese su carrera");
        if (!parseInt(nuevacarrera) && nuevacarrera.trim() !== ""){
          argumentovalido = true; 
        }else{
          alert("Porfavor ingrese una carrera valida.")
        }
      }
        this.carrera = String(nuevacarrera) 
        return "Ahora estoy estudiando " + this.carrera; 
    }

    Modificar_Universidad(){
      let nuevauniversidad;
      let UniversidadValida = false; 

      while (!UniversidadValida){
        nuevauniversidad = prompt("Ingrese el nombre de su universidad porfavor.");
        if (!parseInt(nuevauniversidad) && nuevauniversidad.trim() !== ""){
          UniversidadValida = true; 
        }else{
          alert("Porfavor ingrese una institucion edicativa valida.")
        }
      }
        this.universidad = String(nuevauniversidad)
        return "Hola! me llamo " + this.nombre + " y actualmente estoy estudiando en la " + this.universidad; 
    }

    Eliminar_Nombre(){
      //this.nombre = prompt("Porfavor solo dele a la tecla enter")
      alert("Se procedio a eliminar el nombre")
      this.nombre = ""
      return this.nombre
    }

    Eliminar_Edad(){
      //this.edad = prompt("Porfavor solo dele a la tecla enter")
      alert("Se procedio a eliminar la edad")
      this.edad = ""
      return this.edad 
    }
//Las funciones de eliminación se dedican fribola y unicamente a llenar la variable del inicio con un vacio y la alerta 
    Eliminar_Carrera(){  //de que claramente los datos fueron eliminados con exito. 
     //this.carrera = prompt("Porfavor solo dele a la tecla enter")
     alert("Se procedio a eliminar la carrera")
     this.carrera = ""
     return this.carrera 
    }

    Eliminar_Universidad(){
      //this.universidad = prompt("Porfavor solo dele a la tecla enter")
      alert("Se procedio a eliminar la universidad")
      this.universidad = ""
      return this.universidad 
    }
  } 
  
  
  // Crear una instancia de la clase Persona
  const persona = new Persona('Mateo Zambrana', 18, 'Ingeniería Industrial', "Católica Boliviana San Pablo sede Santa Cruz de la sierra");
  //mediante una lista se crea la instancia para la clase "persona" con los datos pregrabados para los primeros botones
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const Universidad = document.getElementById("Universidad");
  //Estas funciones seran llamadas en el HTML para ejecutar su funcion en botones que se mostraran en la pagina web 
  // Función para saludar
  function botonSaludar() {
    saludar.textContent = persona.saludar();
  }
  
  // Función para cumpleaños
  function botonCumpleanios() {
    edad.textContent = persona.cumpleanios();
  }
  
  // Función para estudiar
  function botonEstudiar() {
    carrera.textContent = persona.estudiar();
  }

  //Funcion para universidad 
  function botonUniversidad(){
    Universidad.textContent = persona.institucion_educativa();
  }

  // Función para modificar saludar
  function botonModificarSaludar() {
    saludar.textContent = persona.Modificar_Nombre();
  }

  //funcion para modificar compleaños 
  function botonModificarEdad(){
    edad.textContent = persona.Modificar_Edad();
  }

  //Funcion para modificar Carrera 
  function botonModificarCarrera(){
    carrera.textContent = persona.Modificar_Carrera();
  }
  
  //Funcion para modificar Universidad 
  function botonModificarUniversidad(){
    Universidad.textContent = persona.Modificar_Universidad();
  }

   //Funcion para eliminar nombre 
   function botonEliminarNombre(){
    saludar.textContent = persona.Eliminar_Nombre();
  }

  //Funcion para eliminar edad 
  function botonEliminarEdad(){
    edad.textContent = persona.Eliminar_Edad(); 
  }

  //Funcion para eliminar Carrera 
  function botonEliminarCarrera(){
    carrera.textContent = persona.Eliminar_Carrera();
  }

  //FUncion para eliminar Universidad 
  function botonEliminarUniversidad(){
    Universidad.textContent = persona.Eliminar_Universidad(); 
  }
  

 

