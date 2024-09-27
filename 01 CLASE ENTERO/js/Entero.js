
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

    esArmstrong() {
        let numStr = this.Num.toString(); 
        let numDigitos = numStr.length; 
        let suma = 0;
        
        for (let i = 0; i < numDigitos; i++) {
            suma += Math.pow(parseInt(numStr[i]), numDigitos); 
        }

        return suma === this.Num;
    }

    esPerfectoGeneralizado(k) {
        let suma = 0;
        for (let i = 1; i < this.Num; i++) {
            if (this.Num % i === 0) {
                suma += Math.pow(i, k);
            }
        }
        return suma === this.Num;
    }

    calcularFilaPascal() {
        const fila = [];
        for (let k = 0; k <= this.Num; k++) {
            fila.push(this.factorial(this.Num) / (this.factorial(k) * this.factorial(this.Num - k)));
        }
        return fila;
    }

    factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }

    cifrarCesar(desplazamiento) {
        const numStr = this.Num.toString(); // Convertir el número a string
        let resultado = '';

        for (let i = 0; i < numStr.length; i++) {
            const digito = parseInt(numStr[i], 10); // Obtener cada dígito
            const nuevoDigito = (digito + desplazamiento) % 10; // Desplazar dentro del rango 0-9
            resultado += nuevoDigito.toString(); // Concatenar el nuevo dígito
        }

        return resultado; // Devolver el número cifrado como string
    }

     tienePrimoGemelo() {
        if (!this.esNumeroPrimo()) return false;

        const esPrimo = (n) => {
            if (n < 2) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) {
                if (n % i === 0) return false;
            }
            return true;
        };

        return esPrimo(this.Num - 2) || esPrimo(this.Num + 2);
    }

    descomponerEnFactoresPrimos() {
        let n = this.Num;
        const factores = {};
        let divisor = 2;

        while (n > 1) {
            let potencia = 0;
            while (n % divisor === 0) {
                n /= divisor;
                potencia++;
            }
            if (potencia > 0) {
                factores[divisor] = potencia;
            }
            divisor++;
        }
        return factores;
    }

    calcularCatalan() {
        const factorial = (n) => {
            return n === 0 ? 1 : n * factorial(n - 1);
        };

        const catalan = factorial(2 * this.Num) / (factorial(this.Num + 1) * factorial(this.Num));
        return catalan;
    }

    esMersenne() {
        const log2p1 = Math.log2(this.Num + 1);
        return Number.isInteger(log2p1) && this.esNumeroPrimo(log2p1);
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

function esNumeroArmstrong() { 
    var respuesta = ClaseEntero.esArmstrong();
    var resp = respuesta ? "Es un número de Armstrong" : "No es un número de Armstrong";
    ClaseEntero.showResultado(resp);
}

function esNumeroPerfectoGeneralizado() {
    const k = parseInt(prompt("Ingrese el valor de k: "), 10);
    var respuesta = ClaseEntero.esPerfectoGeneralizado(k);
    var resp = respuesta ? `Es un número perfecto generalizado con respecto a k=${k}` : `No es un número perfecto generalizado con respecto a k=${k}`;
    ClaseEntero.showResultado(resp);
}

function mostrarFilaPascal() {
    const filaPascal = ClaseEntero.calcularFilaPascal();
    var resp = `Fila ${ClaseEntero.getNum()} del triángulo de Pascal: [${filaPascal.join(", ")}]`;
    ClaseEntero.showResultado(resp);
}

function mostrarCifradoCesar() {
    const desplazamiento = parseInt(prompt("Ingrese el valor del desplazamiento: "), 10);
    const resultadoCifrado = ClaseEntero.cifrarCesar(desplazamiento);
    var resp = `Número cifrado con desplazamiento ${desplazamiento}: ${resultadoCifrado}`;
    ClaseEntero.showResultado(resp);
}

function mostrarPrimoGemelo() {
    var resp = ClaseEntero.tienePrimoGemelo() ? `El número ${ClaseEntero.getNum()} tiene un primo gemelo.` : `El número ${ClaseEntero.getNum()} no tiene un primo gemelo.`;
    ClaseEntero.showResultado(resp);
}

function mostrarFactoresPrimos() {
    const factores = ClaseEntero.descomponerEnFactoresPrimos();
    var resp = `Descomposición en factores primos: ${JSON.stringify(factores)}`;
    ClaseEntero.showResultado(resp);
}

function mostrarCatalan() {
    var catalan = ClaseEntero.calcularCatalan();
    var resp = `El número de Catalan para ${ClaseEntero.getNum()} es: ${catalan}`;
    ClaseEntero.showResultado(resp);
}

function mostrarMersenne() {
    var resp = ClaseEntero.esMersenne() ? `El número ${ClaseEntero.getNum()} es un número de Mersenne.` : `El número ${ClaseEntero.getNum()} no es un número de Mersenne.`;
    ClaseEntero.showResultado(resp);
}