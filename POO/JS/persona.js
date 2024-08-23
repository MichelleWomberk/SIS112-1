class Persona{
    constructor(nombre,edad,carrera){
        this.nombre = nombre;
        this.edad = edad ;
        this.carrera =carrera ;

    }

    saludar (){
        console.log('hola ,mi nombre es' +this.nombre+'y tengo '+this.nombre+ 'años ');
    }

    cumpleaños(){
        this.edad = this.edad + 1;
        console.log('!feliz cumpleaños ! ahora tengo '+this.edad+' años ');
    }

    estudiar(){
        console.log('estoy estudiando'+this.carrera+);
    }
}
function SaludoPersona1(){
     //crear una instancia de la clase persona
const persona1 = new Persona("Ana",22,"ingeniera informatica");
// llamar a los metodos
persona1.saludar();  
}




