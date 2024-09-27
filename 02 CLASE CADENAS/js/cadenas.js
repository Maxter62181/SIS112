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