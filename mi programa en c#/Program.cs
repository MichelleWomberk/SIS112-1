using System.Security.Cryptography;

namespace mi_programa_en_c_;

class Program
{
    static void Main(string[] args)
    {
        //primer metodo
        //HelloWord();

        //segundo metodo mostrar la edad ingresada por el usuario
        //obteneredad();

        //TERCER METODO,MOSTRAR LA EDAD CALCULADA A PARTIR DEL ANION DE NACIMIENTO
        CalcularEdad();
    }
    public static void HelloWord(){
        Console.WriteLine("Hello, World!");
    }
    public static void obteneredad ()
    {
        Console.WriteLine("intruduzca su edad");
        string? edadInput = Console.ReadLine();
        if(string.IsNullOrEmpty(edadInput)) 
        {
           Console.WriteLine("introduzca el valor");
       
        
       }else{
        int edadInteger =Int32.Parse(edadInput);
        Console.WriteLine("tu edad es :"+ edadInteger);
          
      }
        
    }
    public static void CalcularEdad()
    {
        Console.WriteLine("introduzca su año de nacimiento ");
        string? anioNacimientoInput =Console.ReadLine();
        if (string.IsNullOrEmpty(anioNacimientoInput))
        {
            Console.WriteLine("introduzca un valor valido");
        }
        else 
        {
            int anionNacimiento = Int32.Parse(anioNacimientoInput);
            Console.WriteLine("tu edada es :"+ (2024 - anionNacimiento));
        }
    }
}
