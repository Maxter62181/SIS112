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

miLista.agregar(5);
miLista.agregar(2);
console.log(miLista.lista); //Imprime: [5, 2]