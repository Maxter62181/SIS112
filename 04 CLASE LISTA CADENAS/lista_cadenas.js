class ListaCadenas {
    constructor() {
        this.lista = ['Hola', 'Mundo', 'UCB']; // Cadenas por defecto
        this.mostrarLista();
    }

    agregar(valor) {
        this.lista.push(valor);
        this.mostrarLista();
    }

    eliminar(valor) {
        const index = this.lista.indexOf(valor);
        if (index !== -1) {
            this.lista.splice(index, 1);
        }
        this.mostrarLista();
    }

    buscar(valor) {
        return this.lista.indexOf(valor);
    }

    // Ordenar alfabéticamente
    ordenar() {
        this.lista.sort(); // Ordena alfabéticamente
        this.mostrarLista();
    }

    // Nueva función para ordenar por longitud de mayor a menor
    ordenarPorLongitud() {
        this.lista.sort((a, b) => b.length - a.length); // Ordena por longitud de mayor a menor
        this.mostrarLista();
    }

    // Función para mostrar la lista actualizada en el HTML
    mostrarLista() {
        const listaElement = document.getElementById('listaCadenas');
        listaElement.innerHTML = '';
        this.lista.forEach(cadena => {
            const li = document.createElement('li');
            li.textContent = cadena;
            listaElement.appendChild(li);
        });
    }

    // Función para encontrar y mostrar la cadena con mayor cantidad de caracteres
    obtenerCadenaMayorCaracteres() {
        let mayor = 0;
        let posicion = -1;

        this.lista.forEach((cadena, index) => {
            const longitud = cadena.length;
            if (longitud > mayor) {
                mayor = longitud;
                posicion = index;
            }
        });

        return { mayor, posicion }; // Retorna un objeto con la longitud mayor y la posición
    }

    // Función para mostrar en la consola la cadena más larga
    mostrarMayorCadena() {
        const { mayor, posicion } = this.obtenerCadenaMayorCaracteres();

        if (posicion !== -1) {
            console.log('La mayor cantidad de caracteres tiene: ' + mayor);
            console.log('La CADENA con mayor cantidad de caracteres es: ' + this.lista[posicion]);
            alert(`La cadena más larga es: "${this.lista[posicion]}" con ${mayor} caracteres.`);
        } else {
            console.log('No hay cadenas en la lista.');
            alert('No hay cadenas en la lista.');
        }
    }
}

const listaCadenas = new ListaCadenas();

// Funcionalidad para agregar una cadena
document.getElementById('btnAgregar').onclick = () => {
    const valor = document.getElementById('inputValor').value.trim();
    if (valor) {
        listaCadenas.agregar(valor);
        document.getElementById('inputValor').value = '';
    }
};

// Funcionalidad para eliminar una cadena
document.getElementById('btnEliminar').onclick = () => {
    const valor = document.getElementById('inputEliminar').value.trim();
    if (valor) {
        listaCadenas.eliminar(valor);
        document.getElementById('inputEliminar').value = '';
    }
};

// Funcionalidad para buscar una cadena
document.getElementById('btnBuscar').onclick = () => {
    const valor = document.getElementById('inputBuscar').value.trim();
    const index = listaCadenas.buscar(valor);
    if (index !== -1) {
        alert(`Cadena encontrada en el índice: ${index}`);
    } else {
        alert('Cadena no encontrada.');
    }
};

// Funcionalidad para ordenar las cadenas alfabéticamente
document.getElementById('btnOrdenar').onclick = () => {
    listaCadenas.ordenar(); // Llama a la función de ordenar alfabéticamente
};

// Funcionalidad para ordenar las cadenas por longitud (de mayor a menor)
document.getElementById('btnOrdenarLongitud').onclick = () => {
    listaCadenas.ordenarPorLongitud(); // Llama a la función de ordenar por longitud
};

// Funcionalidad para mostrar la cadena más larga
document.getElementById('btnMostrarMayor').onclick = () => {
    listaCadenas.mostrarMayorCadena(); // Llama a la función para mostrar la cadena más larga
};



   
