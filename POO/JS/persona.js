class Persona {
    constructor(nombre, edad, carrera,universidad) {
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
      return 'Estoy estudiando ' + this.carrera ;
    }
    Universidad() {
      return 'estudia en ' + this.universidad;
    }
    Modificarsaludar() {
      this.nombre =prompt("ingrese su nombre");
      return 'Hola, mi nombre es ' + this.nombre + ' y tengo ' + this.edad + ' años.'
    }
    Modificarcumpleanios() {
      this.nombre =prompt("ingrese su edad","19");
       return '¡Felicidades! tienes ' + this.edad + ' años.'
    }
    
  
  
    
  }
  
  // Crear una instancia de la clase Persona
  const persona = new Persona('Mel', 19, 'Ingeniería industrial','en la universidad Catolica ');
  
  // Inicializar los elementos HTML
  const saludar = document.getElementById('saludar');
  const edad = document.getElementById('edad');
  const carrera = document.getElementById('carrera');
  const universidad= document.getElementById('universidad');

  

  
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
   // Función para estudiar
   function botonUniversidad() {
    universidad.textContent = persona.Universidad();
  }




