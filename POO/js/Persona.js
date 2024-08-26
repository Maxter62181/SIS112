class Persona {
    constructor(nombre, edad, carrera, universidad) {
      this.nombre = nombre;
      this.edad = edad;
      this.carrera = carrera;
      this.universidad = universidad;   
    }
  
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

    Modificar_Nombre(){
        this.nombre = prompt("porfavor ingrese su nuevo nombre")
        return "Hola, mi nuevo nombre es " + this.nombre;
    }

    Modificar_Edad(){
      this.edad = prompt("Porfavor ingrese su nueva edad")
      return "!Felicidades!, tu nueva edad es " + this.edad + " Años"; 
    }

    Modificar_Carrera(){
        this.carrera = prompt("Porfavor ingrese su carrera")
        return "Ahora estoy estudiando " + this.carrera; 
    }

    Modificar_Universidad(){
        this.universidad = prompt("Ingrese el nombre de su universidad porfavor.")
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

    Eliminar_Carrera(){
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
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const Universidad = document.getElementById("Universidad");
  
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
  

 

