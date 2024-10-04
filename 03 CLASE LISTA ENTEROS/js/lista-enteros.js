class ListaEnteros {
    constructor(){
        this.lista = [];
    }

    agregar(valor){
        this.lista.push(valor);
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
    }

    eliminarPorIndice(indice) {
        if (indice >= 0 && indice < this.lista.length) {
            this.lista.splice(indice, 1); // Elimina el valor en el índice específico
        }
    }

    buscarDato() {
        let valorBuscado;
        let posicion;
        do {
            valorBuscado = parseInt(prompt("Ingresa el número que deseas buscar en la lista:"));
            posicion = this.lista.indexOf(valorBuscado);
            if (posicion === -1) {
                alert("Error: El número no existe en la lista. Inténtalo de nuevo.");
            }
        } while (posicion === -1); // Repite mientras el número no exista en la lista

        alert(`El número ${valorBuscado} fue encontrado en la posición ${posicion}.`);
    }

    esParOImpar(indice) {
        if (indice >= 0 && indice < this.lista.length) {
            const valor = this.lista[indice];
            return valor % 2 === 0 ? 'par' : 'impar';
        } else {
            return 'Índice fuera de rango';
        }
    }

    // Función para determinar si un número es perfecto
    esNumeroPerfecto(indice) {
        if (indice >= 0 && indice < this.lista.length) {
            const valor = this.lista[indice];
            let sumaDivisores = 0;
            for (let i = 1; i < valor; i++) {
                if (valor % i === 0) {
                    sumaDivisores += i;
                }
            }
            return sumaDivisores === valor ? 'perfecto' : 'no perfecto';
        } else {
            return 'Índice fuera de rango';
        }
    }

    // Función para imprimir la fila del triángulo de Pascal correspondiente al índice
    imprimirTrianguloPascal(indice) {
        if (indice >= 0 && indice < this.lista.length) {
            const n = this.lista[indice];
            return this.generarFilaTrianguloPascal(n);
        } else {
            return 'Índice fuera de rango';
        }
    }

    // Función auxiliar para generar una fila del triángulo de Pascal
    generarFilaTrianguloPascal(n) {
        const fila = [1];
        for (let k = 1; k <= n; k++) {
            fila[k] = (fila[k - 1] * (n - k + 1)) / k;
        }
        return fila;
    }
}



let miLista = new ListaEnteros();

        // Función para agregar un valor a la lista
        function agregarValor() {
            const valor = parseInt(document.getElementById('inputValor').value);
            if (!isNaN(valor)) {
                miLista.agregar(valor);
                actualizarLista();
            }
        }

        // Función para eliminar un valor de la lista
        function eliminarValor() {
            const valor = parseInt(document.getElementById('inputValor').value);
            if (!isNaN(valor)) {
                miLista.eliminar(valor);
                actualizarLista();
            }
        }

        // Función para actualizar la visualización de la lista
        function actualizarLista() {
            const listaDiv = document.getElementById('listaEnteros');
            listaDiv.textContent = `Lista: [${miLista.lista.join(', ')}]`;
        }

        function eliminarPorIndice() {
            let indice;
            do {
                indice = parseInt(prompt("Ingresa el índice positivo que deseas eliminar:"));
            } while (isNaN(indice) || indice < 0 || indice >= miLista.lista.length); // Verifica si es un índice válido
            
            miLista.eliminarPorIndice(indice);
            actualizarLista();
        }

        function buscarDato() {
            miLista.buscarDato();
        }

        function verificarParOImpar() {
            const indice = parseInt(prompt("Ingresa el índice para verificar si el número es par o impar:"));
            alert(`El número en el índice ${indice} es ${miLista.esParOImpar(indice)}`);
        }
        
        // Función para mostrar si el número en el índice es perfecto o no
        function verificarNumeroPerfecto() {
            const indice = parseInt(prompt("Ingresa el índice para verificar si el número es perfecto:"));
            alert(`El número en el índice ${indice} es ${miLista.esNumeroPerfecto(indice)}`);
        }
        
        // Función para mostrar la fila del triángulo de Pascal para el índice dado
        function mostrarTrianguloPascal() {
            const indice = parseInt(prompt("Ingresa el índice para obtener la fila del triángulo de Pascal:"));
            const filaPascal = miLista.imprimirTrianguloPascal(indice);
            alert(`La fila ${indice} del triángulo de Pascal es: [${filaPascal.join(', ')}]`);
        }


miLista.agregar(21);
miLista.agregar(12);
miLista.agregar(11);
miLista.agregar(15);
miLista.agregar(30);

var a = miLista.lista[0]; 
var b = miLista.lista[1];
var c = miLista.lista[2];
var d = miLista.lista[3];
var e = miLista.lista[4];


console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 

console.log(miLista.lista); //Imprime: [5, 2]

//RETORNAR EL ELEMENTO MENOR DE LA LISTA SIEMPRE Y CUANDO SEA POSITIVO 
/*
var datoMenor = -1;
var a = miLista.lista[0];
if(a > datoMenor){
    datoMenor = a; 
}

console.log("Dato Menor: " + datoMenor); 

//---------------------------------------------------------------------------------

var b = miLista.lista[1]; 
if (a > b){
    datoMenor = b; 
}

console.log("Dato Menor: " + datoMenor); 

//---------------------------------------------------------------------------------

var c = miLista.lista[2]
if (b > c){
    datoMenor = c;
}

console.log("Dato Menor: " + datoMenor); 

//---------------------------------------------------------------------------------

var d = miLista.lista[3]
if (c > d){
    datoMenor = d; 
}

console.log("Dato Menor: " + datoMenor); 
*/
//---------------------------------------------------------------------------------

var datoMenor = miLista.lista[0]; 

for (var i = 1; i < miLista.lista.length; i++) {
    if (miLista.lista[i] < datoMenor) {
        datoMenor = miLista.lista[i];
    }

    console.log("Dato Menor: " + datoMenor);
}

//---------------------------------------------------------------------------------


var datoMayor = miLista.lista[0]; 

for (var i = 1; i < miLista.lista.length; i++) {
    if (miLista.lista[i] > datoMayor) {
        datoMayor = miLista.lista[i];
    }

    console.log("Dato Mayor: " + datoMayor);
}

