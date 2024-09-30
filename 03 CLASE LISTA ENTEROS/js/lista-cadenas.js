class ListaCadenas {
    constructor() {
        this.lista = [];
    }

    agregar(valor) {
        if (typeof valor === 'string') {
            this.lista.push(valor);
        } else {
            console.error("Error: Solo se pueden agregar cadenas.");
        }
    }

    eliminar(valor) {
        if (typeof valor === 'string') {
            const index = this.lista.indexOf(valor);
            if (index !== -1) {
                this.lista.splice(index, 1);
            } else {
                console.error("Error: La cadena no existe en la lista.");
            }
        } else {
            console.error("Error: Solo se pueden eliminar cadenas.");
        }
    }

    eliminarPorIndice(indice) {
        if (typeof indice === 'number' && indice >= 0 && indice < this.lista.length) {
            this.lista.splice(indice, 1);
        } else {
            console.error("Error: Índice fuera de rango.");
        }
    }

    buscarDato() {
        let valorBuscado;
        let posicion;
        do {
            valorBuscado = prompt("Ingresa la cadena que deseas buscar en la lista:");
            posicion = this.lista.indexOf(valorBuscado);
            if (posicion === -1) {
                alert("Error: La cadena no existe en la lista. Inténtalo de nuevo.");
            }
        } while (posicion === -1);

        alert(`La cadena "${valorBuscado}" fue encontrada en la posición ${posicion}.`);
    }

    ordenarAlfabeticamente() {
        this.lista.sort((a, b) => a.localeCompare(b));
    }

    obtenerLista() {
        return this.lista;
    }
}

const listaCadenas = new ListaCadenas();

document.addEventListener('DOMContentLoaded', () => {
    const cadenaInput = document.getElementById('cadenaInput');
    const indiceInput = document.getElementById('indiceInput');
    const agregarBtn = document.getElementById('agregarBtn');
    const eliminarBtn = document.getElementById('eliminarBtn');
    const eliminarPorIndiceBtn = document.getElementById('eliminarPorIndiceBtn');
    const buscarBtn = document.getElementById('buscarBtn');
    const ordenarBtn = document.getElementById('ordenarBtn');
    const listaElementos = document.getElementById('listaElementos');

    function actualizarListaDOM() {
        listaElementos.innerHTML = '';
        listaCadenas.obtenerLista().forEach(cadena => {
            const li = document.createElement('li');
            li.textContent = cadena;

            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = '❌';
            eliminarBtn.addEventListener('click', () => {
                listaCadenas.eliminar(cadena);
                actualizarListaDOM();
            });

            li.appendChild(eliminarBtn);
            listaElementos.appendChild(li);
        });
    }

    agregarBtn.addEventListener('click', () => {
        const valor = cadenaInput.value.trim();
        if (valor) {
            listaCadenas.agregar(valor);
            actualizarListaDOM();
            cadenaInput.value = '';
        } else {
            alert('Por favor, ingresa una cadena.');
        }
    });

    eliminarBtn.addEventListener('click', () => {
        const valor = cadenaInput.value.trim();
        if (valor) {
            listaCadenas.eliminar(valor);
            actualizarListaDOM();
        } else {
            alert('Por favor, ingresa una cadena a eliminar.');
        }
    });

    eliminarPorIndiceBtn.addEventListener('click', () => {
        const indice = parseInt(indiceInput.value.trim(), 10);
        if (!isNaN(indice)) {
            listaCadenas.eliminarPorIndice(indice);
            actualizarListaDOM();
            indiceInput.value = '';
        } else {
            alert('Por favor, ingresa un índice válido.');
        }
    });

    buscarBtn.addEventListener('click', () => {
        listaCadenas.buscarDato();
    });

    ordenarBtn.addEventListener('click', () => {
        listaCadenas.ordenarAlfabeticamente();
        actualizarListaDOM();
    });
});