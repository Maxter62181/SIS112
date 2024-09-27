class Cadena{

    constructor(cadena){
        this.cadena = cadena;

    }
 //Obtiene el valor asigando a la cadena
    getCadena(){
        return this.cadena; 
    }

    concatenar(otraCadena){ // unir una cadena con otra
        this.cadena += otraCadena; 
    }

    invertir(){ // invertir los caracteres de la cadena 
        let cadenaInvertida = " ";
        for (let i = this.cadena.length - 1; i > 0 ; i --){
            cadenaInvertida += this.cadena[i];
        }
        this.cadena = cadenaInvertida;
    }

    //Comparaciones 
    esVacia(){ //Compara si la cadena no tiene caracteres
        return this.cadena.length === 0; 
    }

    contiene(subcadena){  //Compara si la subcadena existe dentro de la cadena 
        return this.cadena.includes(subcadena);
    }

    comienzaCon(prefijo){ //Compara si la cadena empieza con el prefijo "caracter"
        return this.cadena.startsWith(prefijo); 
    }

    terminaCon(sufijo){ //Compara si la cadena termina con el sufijo "caracter" 
        return this.cadena.endsWith(sufijo); 
    }

    //Otras operaciones 
    longitud(){ //Obtiene la cantidad de caracteres que tiene la cadena 
        return this.cadena.length; 
    }

    aMayusculas(){ //Obtiene la cadena transformada a mayusculas 
        return this.cadena.toUpperCase();
    }

    aMinusculas(){ //Obtiene la cadena transformada a minusculas. 
        return this.cadena.toLowerCase();
    }

    convertirARomanoDesdeCadena() {
        // Intentar convertir la cadena a un número entero
        const numero = parseInt(this.cadena);

        // Verificar si es un número válido
        if (isNaN(numero)) {
            return "La cadena no es un número válido.";
        }

        if (numero <= 0 || numero >= 10000000) {
            return "Número fuera de rango. Ingrese un número entre 1 y 3999.";
        }

        const valoresRomanos = [
            { valor: 1000, simbolo: "M" },
            { valor: 900, simbolo: "CM" },
            { valor: 500, simbolo: "D" },
            { valor: 400, simbolo: "CD" },
            { valor: 100, simbolo: "C" },
            { valor: 90, simbolo: "XC" },
            { valor: 50, simbolo: "L" },
            { valor: 40, simbolo: "XL" },
            { valor: 10, simbolo: "X" },
            { valor: 9, simbolo: "IX" },
            { valor: 5, simbolo: "V" },
            { valor: 4, simbolo: "IV" },
            { valor: 1, simbolo: "I" }
        ];

        let resultado = "";
        let numeroRestante = numero;

        // Convertir el número a su representación romana
        for (const { valor, simbolo } of valoresRomanos) {
            while (numeroRestante >= valor) {
                resultado += simbolo;
                numeroRestante -= valor;
            }
        }

        return resultado;
    }

    generarTextoAleatorio(numeroPalabras) {
        const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';

        // Pedimos al usuario los valores mínimos y máximos
        const minimo = parseInt(prompt("Ingresa la longitud mínima de las palabras:"));
        const maximo = parseInt(prompt("Ingresa la longitud máxima de las palabras:"));

        if (isNaN(minimo) || isNaN(maximo) || minimo < 1 || maximo < minimo) {
            return "Por favor, ingrese valores válidos para el rango.";
        }

        let textoAleatorio = "";

        for (let i = 0; i < numeroPalabras; i++) {
            let palabra = "";
            let longitudPalabra = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

            for (let j = 0; j < longitudPalabra; j++) {
                const indiceCaracter = Math.floor(Math.random() * caracteres.length);
                palabra += caracteres.charAt(indiceCaracter);
            }

            textoAleatorio += palabra + " ";
        }

        return textoAleatorio.trim();
    }

    convertirAASCII(numero) {
        if (numero >= 0 && numero <= 127) {
            return String.fromCharCode(numero);
        } else {
            return "El número debe estar entre 0 y 127.";
        }
    }

}

let cadena = new Cadena("");

        function mostrarCadena() {
            document.getElementById("resultado").textContent = cadena.getCadena();
        }

        function concatenar() {
            const otraCadena = document.getElementById("otraCadena").value;
            cadena.concatenar(otraCadena);
            mostrarCadena();
        }

        function invertir() {
            cadena.invertir();
            mostrarCadena();
        }

        function esVacia() {
            document.getElementById("resultado").textContent = cadena.esVacia() ? "La cadena está vacía" : "La cadena no está vacía";
        }

        function contiene() {
            const subcadena = document.getElementById("otraCadena").value;
            document.getElementById("resultado").textContent = cadena.contiene(subcadena) ? "La cadena contiene la subcadena" : "La cadena no contiene la subcadena";
        }

        function comienzaCon() {
            const prefijo = document.getElementById("prefijo").value;
            document.getElementById("resultado").textContent = cadena.comienzaCon(prefijo) ? "La cadena comienza con el prefijo" : "La cadena no comienza con el prefijo";
        }

        function terminaCon() {
            const sufijo = document.getElementById("sufijo").value;
            document.getElementById("resultado").textContent = cadena.terminaCon(sufijo) ? "La cadena termina con el sufijo" : "La cadena no termina con el sufijo";
        }

        function longitud() {
            document.getElementById("resultado").textContent = "La longitud de la cadena es: " + cadena.longitud();
        }

        function aMayusculas() {
            document.getElementById("resultado").textContent = cadena.aMayusculas();
        }

        function aMinusculas() {
            document.getElementById("resultado").textContent = cadena.aMinusculas();
        }

        // Instanciar la clase Cadena al cambiar el valor del input de cadena principal
        document.getElementById("cadena").addEventListener("input", function() {
            cadena = new Cadena(this.value);
        });

        function convertirARomano() {
            // Llama al método para convertir el número en la cadena a romano
            const resultadoRomano = cadena.convertirARomanoDesdeCadena();
            document.getElementById("resultado").textContent = resultadoRomano;
        }

        function generarTextoAleatorio() {
            const numeroPalabras = parseInt(prompt("Ingrese el número de palabras que desea generar:"));
            const textoAleatorio = cadena.generarTextoAleatorio(numeroPalabras);
            document.getElementById("resultado").textContent = textoAleatorio;
        }

        function convertirAASCII() {
            const numero = parseInt(prompt("Ingrese un número entre 0 y 127:"));
            const resultadoASCII = cadena.convertirAASCII(numero);
            document.getElementById("resultado").textContent = resultadoASCII;
        }

        