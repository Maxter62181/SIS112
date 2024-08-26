namespace mi_primera_programa_en_c_;

class Program
{
    static void Main(string[] args)
    {
        //Primer metodo, mostrar un Hola Mundo
        HelloWorld();

        //Segundo metodo, mostrar la edad ingresada por el usuario
        ObtenerEdad();

        //Tercer metodo, mostrar la edad calculada a partir del anio de nacimiento
        CalcularEdad();
    }

    public static void HelloWorld()
    {
        Console.WriteLine("Hello, World!");
    }

    public static void ObtenerEdad()
    {
        Console.WriteLine("Introduzca su edad:");
        string? edadInput = Console.ReadLine();
        if (string.IsNullOrEmpty(edadInput))
        {
         Console.WriteLine("Introduzca un valor valido");
        }
        else
        {
            int edadInteger = Int32.Parse(edadInput);
            Console.WriteLine("Tu Edad es: " + edadInteger);
        }
    }

    public static void CalcularEdad()
    {
        Console.WriteLine("Introduzca su año de nacimiento:");
        string? anioNacimientoInput = Console.ReadLine();
        if (string.IsNullOrEmpty(anioNacimientoInput))
        {
            Console.WriteLine("Introduzca un valor valido");
        }
        else
        {
            int anioNacimiento = Int32.Parse(anioNacimientoInput);
            Console.WriteLine("Tu Edad Calculada es: " + (2024 - anioNacimiento));
        }
    }
}