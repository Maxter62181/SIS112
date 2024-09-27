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

miLista.agregar(5);
miLista.agregar(2);
console.log(miLista.lista); //Imprime: [5, 2]