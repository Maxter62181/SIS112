
class Entero {
    //Atributos 
    Num;
    //Construtor 
    constructor(Numero) {
        this.Num = Numero;
    }

    // Class ---> Cargar Numero

    setNum() {
        const input = document.getElementById("enteroInput"); 
        if (input.value == ""){
            return 0; 
        }
        this.Num = parseInt(input.value, 10); 
      
    }

    //Class ---> Mostrar el valor de numero 
    getNum() {
        return this.Num;

    }



    //Class ---> Obtener el valor de Numero   
    showNum() {
        const resultadoDiv = document.getElementById("resultado")
        resultadoDiv.textContent = this.getNum();

    }

    showResultado(respuesta){
        const resultadoDiv = document.getElementById("resultado"); 
        resultadoDiv.textContent = respuesta; 
    }

    IngrementarNum(){
        this.Num = this.Num + 1 ;
    }

    DecrementarNum(){
        this.Num = this.Num - 1 ;
    }


    esParOesInpar(){
        return (this.Num % 2 ==0) 
    }

    esNegaesPosi(){
        return(this.Num > 0 )
    }

    esNumeroPerfecto() {
        let suma = 0;
        // Sumamos los divisores propios del número
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                suma += i;
            }
        }
        // Retornamos true si la suma de los divisores es igual al número
        return suma === this.Num;
    }

    esNumeroPrimo() {
        if (this.Num < 2) return false; 
        for (let i = 2; i <= Math.sqrt(this.Num); i++) {
            if (this.Num % i === 0) {
                return false;
            }
        }
        return true;
    }

    fibonacci() {
        let a = 0, b = 1;
        while (a <= this.Num) {
            if (a === this.Num) {
                return true;
            }
            [a, b] = [b, a + b];
        }
        return false;
    }

    Generarfibonacci() {
        let serie = [0, 1];
        for (let i = 2; i < this.Num; i++) {
            serie.push(serie[i - 1] + serie[i - 2]);
        }
        return serie.slice(0, this.Num);
    }
}

//Las Funciones = Button HTML 
var ClaseEntero = new Entero(0);

//CREAR EL OBJETO
function cargarNum() {
    ClaseEntero.setNum();
    alert("ok")
}

//Mostrar el Objeto 

function MostrarNum() {
    ClaseEntero.showNum();
}

function IngrementarNumero(){
    ClaseEntero.IngrementarNum(); 
    ClaseEntero.showNum(); 
}

function DecrementarNumero(){
    ClaseEntero.DecrementarNum();
    ClaseEntero.showNum(); 
}

function esParImparNum(){
    var respuesta = ClaseEntero.esParOesInpar(); 
    var resp = respuesta ? "Es Num Par":"Es Num Impar"
    ClaseEntero.showResultado(resp);
}

function PositiveNegative(){
    var respuesta = ClaseEntero.esNegaesPosi(); 
    var resp = respuesta ? "Es Positivo":"Es Negativo"
    ClaseEntero.showResultado(resp); 
}

function esNumeroPerfecto() {
    var respuesta = ClaseEntero.esNumeroPerfecto();
    var resp = respuesta ? "Es un número perfecto" : "No es un número perfecto";
    ClaseEntero.showResultado(resp);
}

function esNumeroPrimo() {
    var respuesta = ClaseEntero.esNumeroPrimo();
    var resp = respuesta ? "Es un número primo" : "No es un número primo";
    ClaseEntero.showResultado(resp);
}

function PillarFibonacci() {
    var pertenece = ClaseEntero.fibonacci();
    var resp = pertenece ? `El número ${ClaseEntero.getNum()} pertenece a la serie de Fibonacci.` : `Error: El número ${ClaseEntero.getNum()} no pertenece a la serie de Fibonacci.`;
    ClaseEntero.showResultado(resp);
}

function generarFibonacci() {
    var serie = ClaseEntero.Generarfibonacci();
    var resp = "Serie de Fibonacci: " + serie.join(", ");
    ClaseEntero.showResultado(resp);
}