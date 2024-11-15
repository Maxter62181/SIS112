class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();
    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

    // Ejemplo 1: Patrón Aleatorio
    llenarMatrizAleatorio() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = Math.floor(Math.random() * 3); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }

    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizDiagonalIzquierda() {
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    // Ejemplo 3: Patrón de Bordes
    llenarMatrizBordes() {
        this.vaciarMatriz(); 
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizSBordeinferior() {
        this.vaciarMatriz(); 
        // Recorremos cada fila de la matriz
        for (let i = 1; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 1; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if ((i === 1 || i === this.filas - 2) && (j >= 1 && j <= this.columnas - 2) || (j === 1 || j === this.columnas - 2) && (i >= 1 && i <= this.filas - 2)) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizPiramide() {
        this.vaciarMatriz(); 
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Limpiamos la matriz inicializando con ceros
                this.matriz[i][j] = 0;
    
                // Condiciones para dibujar la pirámide
                if (i <= this.filas / 2 - 1 && j >= (this.columnas / 2 - 1) - i && j <= (this.columnas / 2 - 1) + i) {
                    this.matriz[i][j] = 2; // 2 representa un bloque de la pirámide
                }
            }
        }
    
        // Después de llenar la matriz con el patrón de la pirámide, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizCuatroBordes() {
        this.vaciarMatriz(); 
        const mitadCol = Math.floor(this.columnas / 2);
        const mitadFil = Math.floor(this.filas / 2);
    
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Dibujamos los bordes exteriores
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 2;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior
                    this.matriz[i][j] = 0;
                }
    
                // Dibujamos las líneas divisorias centrales
                if (j === mitadCol || j === mitadCol - 1) {
                    this.matriz[i][j] = 2;
                }
                if (i === mitadFil || i === mitadFil - 1) {
                    this.matriz[i][j] = 2;
                }
            }
        }
    
        // Llamamos a la función para dibujar la matriz
        this.dibujarMatriz();
    }
    
    //Llenar la fila 1 con 2 y lo demas con 0 
    llenarMatrizPrimeraFila(){
        this.vaciarMatriz(); 
        for (let i = 0; i < this.filas; i++){ ;
            for (let j = 0; j < this.columnas; j++){ 
                if (i == 2){
                    this.matriz[i][j] = 2; 
                }else{
                    this.matriz[i][j] = 0; 
                }
                
            }
        }
        this.dibujarMatriz();    
    }
    
    //llenar la primera columna con 2 
    llenarMatrizPrimeraColumna(){
        this.vaciarMatriz(); 
        for (let i = 0; i < this.filas; i++){ ;
            for (let j = 0; j < this.columnas; j++){ 
                if (j == 0){
                    this.matriz[i][j] = 2; 
                }else{
                    this.matriz[i][j] = 0; 
                }
                
            }
        }
        this.dibujarMatriz();    
    }

    llenarMatrizSecuencial(){
        this.vaciarMatriz(); 
        for(let i = 0; i < this.filas; i++){
            for(let j = 0; j < this.columnas; j ++){
                this.matriz[i][j] = i % 3;
            }
        }
        this.dibujarMatriz(); 
    }

    llenarMatrizSecuencia_1_7() {
        this.vaciarMatriz(); 
        let valor = 0; // Variable para el valor que llenará la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = valor % 8; // Ciclo de valores entre 0 y 7
                valor++; // Incrementa el valor para el siguiente elemento
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia_0_7EnColumna() {
        this.vaciarMatriz(); 
        let valor = 0; // Variable para el valor que llenará la matriz
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[j][i] = valor % 8; // Ciclo de valores entre 0 y 7
                valor++; // Incrementa el valor para el siguiente elemento
            }
        }
        this.dibujarMatriz();
    }

    LlenarMatrizSecuencia3() {
        this.vaciarMatriz(); 
        let valor = 7; // Inicia el valor descendente desde 7
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = valor; // Asigna el valor actual a la celda
                valor--; // Disminuye el valor
                if (valor < 0) { // Si el valor llega a -1, reinicia a 7
                    valor = 7;
                }
            }
        }
        this.dibujarMatriz();
    }

    LlenarMatrizSecuencia4() {
        this.vaciarMatriz();
        var intercambio = "Disminuir"; 
        var puntero = 7; 
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                ///////////////////////////////////////////////////////////// 7 al 0 
                if (intercambio == "Disminuir") {
                    puntero = puntero - 1;
                    if (puntero < 0) { // Verifica si puntero llegó a -1
                        puntero = 0; // Ajusta puntero al mínimo
                        intercambio = "incrementar"; // Cambia la dirección
                    }
                }
                ///////////////////////////////////////////////////////////// 0 al 7
                else if (intercambio == "incrementar") {
                    puntero = puntero + 1;
                    if (puntero > 7) { // Verifica si puntero llegó a 8
                        puntero = 7; // Ajusta puntero al máximo
                        intercambio = "Disminuir"; // Cambia la dirección
                    }
                }
            }
        }
        this.dibujarMatriz();
    }
    

    llenarMatrizSecuencialColumnas(){
        this.vaciarMatriz(); 
        for(let i = 0; i < this.filas; i++){
            for(let j = 0; j < this.columnas; j ++){
                this.matriz[i][j] = j % 3;
            }
        }
        this.dibujarMatriz(); 
    }

    ////////////////////////////////////////////////////////////////////////////////////
    //Ejercicios de la tarea. 
    LlenarMatrizCuadradoRelleno() {
        this.vaciarMatriz(); 
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1; // Asignar el valor 1 a cada celda
            }
        }
        this.dibujarMatriz(); 
    }

    LlenarMatrizMarcoInterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Si es un borde (primera o última fila, primera o última columna)
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0; // bordes
                } else {
                    this.matriz[i][j] = 1; // interior
                }
            }
        }
        this.dibujarMatriz(); 
    }

    LlenarMatrizCruces() {
        this.vaciarMatriz();
        const filaCentral = Math.floor(this.filas / 2); 
        const columnaCentral = Math.floor(this.columnas / 2); 
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === filaCentral || j === columnaCentral) {
                    this.matriz[i][j] = 1; 
                } else {
                    this.matriz[i][j] = 0; 
                }
            }
        }
        this.dibujarMatriz(); 
    }

    LlenarMatrizBordesYDiagonales() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    
                    this.matriz[i][j] = 1;
                } else if (i === j || i === this.columnas - j - 1) {
                    
                    this.matriz[i][j] = 2;
                } else {
                    
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz(); 
    }

    LlenarMatrizBandera() {
        this.vaciarMatriz();
        const franja = Math.floor(this.filas / 3); 
    
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i < franja) {
                    // Primera franja
                    this.matriz[i][j] = 1;
                } else if (i < franja * 2) {
                    // Segunda franja
                    this.matriz[i][j] = 2;
                } else {
                    // Tercera franja
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz(); // Actualizar y mostrar la matriz
    }
    
    LlenarMatrizRellenoAlterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) {
                    
                    this.matriz[i][j] = 1;
                } else {
                    
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz(); 
    }

    LlenarMatrizZigZagHorizontal() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j === i) {
                    
                    this.matriz[i][j] = 1;
                } else {
                    
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz(); 
    }

    llenarMatrizEspiral() {
        this.vaciarMatriz();
        let valor = 1;
        let inicioFila = 0, finFila = this.filas - 1;
        let inicioCol = 0, finCol = this.columnas - 1;
    
        while (inicioFila <= finFila && inicioCol <= finCol) {
            
            for (let j = inicioCol; j <= finCol; j++) {
                this.matriz[inicioFila][j] = valor;
            }
            inicioFila++;
    
            
            for (let i = inicioFila; i <= finFila; i++) {
                this.matriz[i][finCol] = valor;
            }
            finCol--;
    
            
            if (inicioFila <= finFila) {
                for (let j = finCol; j >= inicioCol; j--) {
                    this.matriz[finFila][j] = valor;
                }
                finFila--;
            }
    
            
            if (inicioCol <= finCol) {
                for (let i = finFila; i >= inicioFila; i--) {
                    this.matriz[i][inicioCol] = valor;
                }
                inicioCol++;
            }
    
            
            valor = (valor === 1) ? 0 : 1;
        }
        this.dibujarMatriz();
    }

    llenarMatrizTrianguloSuperiorIzquierdo() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas - i; j++) {
                
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz(); 
    }

    llenarMatrizTrianguloInferiorDerecho() {
        this.vaciarMatriz(); 
        for (let i = 0; i < this.filas; i++) {
            for (let j = this.columnas - i - 1; j < this.columnas; j++) {
                
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz(); 
    }
    
    llenarMatrizCuadricula() {
        this.vaciarMatriz(); 
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) {
                    
                    this.matriz[i][j] = 1;
                } else {
                    
                    if (j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
        }
        this.dibujarMatriz(); 
    }
    
    llenarMatrizTrianguloCentral() {
        this.vaciarMatriz();
        const centroFila = Math.floor(this.filas / 2);
        const centroColumna = Math.floor(this.columnas / 2);
    
        for (let i = 0; i <= centroFila; i++) {
            for (let j = centroColumna - i; j <= centroColumna + i; j++) {
                this.matriz[i][j] = 1;
            }
        }
    
        this.dibujarMatriz();
    }
    
    llenarMatrizRombosConcentricos() {
        this.vaciarMatriz();
        const centroFila = Math.floor(this.filas / 2);
        const centroColumna = Math.floor(this.columnas / 2);
    
        for (let d = 0; d <= centroFila; d++) {
            for (let i = Math.max(0, centroFila - d); i <= Math.min(this.filas - 1, centroFila + d); i++) {
                for (let j = Math.max(0, centroColumna - d); j <= Math.min(this.columnas - 1, centroColumna + d); j++) {
                    if (Math.abs(i - centroFila) + Math.abs(j - centroColumna) === d) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
        }
    
        this.dibujarMatriz();
    }
    
    llenarMatrizCrucesConcentricas() {
        this.vaciarMatriz();
        const filas = this.filas;
        const columnas = this.columnas;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (
                    (i === 0 && j >= 1 && j <= columnas - 2) ||
                    (i === filas - 1 && j >= 1 && j <= columnas - 2) ||
                    (i === 1 && (j === 0 || j === columnas - 1)) ||
                    (i === filas - 2 && (j === 0 || j === columnas - 1)) ||
                    (i === 2 && j >= 2 && j <= columnas - 3) ||
                    (i === filas - 3 && j >= 2 && j <= columnas - 3) ||
                    (i === 3 && (j === 2 || j === columnas - 3)) ||
                    (i === filas - 4 && (j === 2 || j === columnas - 3)) ||
                    (i === 4 && j >= 3 && j <= columnas - 4) ||
                    (i === filas - 5 && j >= 3 && j <= columnas - 4) ||
                    (i === 5 && (j === 3 || j === columnas - 4)) ||
                    (i === filas - 6 && (j === 3 || j === columnas - 4))
                ) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }
    
    
    
    
    
    
    llenarMatrizBanderaDiagonal() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j <= i) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }
    
    llenarMatrizCuadradoDentroCuadrado() {
        this.vaciarMatriz();
        const capas = Math.min(Math.floor(this.filas / 2), Math.floor(this.columnas / 2));
        for (let capa = 0; capa < capas; capa++) {
            let valor;
            if (capa % 2 === 0) {
                valor = 1;
            } else {
                valor = 0;
            }
            if (capa === 2) {
                valor = 2;
            }
    
            const limiteSuperior = capa;
            const limiteInferior = this.filas - capa - 1;
            const limiteIzquierdo = capa;
            const limiteDerecho = this.columnas - capa - 1;
    
            for (let j = limiteIzquierdo; j <= limiteDerecho; j++) {
                this.matriz[limiteSuperior][j] = valor;
                this.matriz[limiteInferior][j] = valor;
            }
    
            for (let i = limiteSuperior; i <= limiteInferior; i++) {
                this.matriz[i][limiteIzquierdo] = valor;
                this.matriz[i][limiteDerecho] = valor;
            }
        }
        this.dibujarMatriz();
    }
    
    llenarMatrizBordesYCentro() {
        this.vaciarMatriz();
    
        const filas = this.filas;
        const columnas = this.columnas;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (i === 0 || i === filas - 1 || j === 0 || j === columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (
                    i >= Math.floor(filas / 3) &&
                    i < filas - Math.floor(filas / 3) &&
                    j >= Math.floor(columnas / 3) &&
                    j < columnas - Math.floor(columnas / 3)
                ) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }

    llenarMatrizLineasParalelas() {
        this.vaciarMatriz();
    
        const filas = this.filas;
        const columnas = this.columnas;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (i % 2 === 0 || j === 0 || j === columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }
    
    llenarMatrizMarcasCruz() {
        this.vaciarMatriz();
    
        const filas = this.filas;
        const columnas = this.columnas;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (j % 4 === i % 4 || (j + i) % 4 === 0) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }
    
    llenarMatrizRomboEsquinas() {
        this.vaciarMatriz();
    
        const filas = this.filas;
        const columnas = this.columnas;
        const tamRombo = Math.floor(Math.min(filas, columnas) / 4);
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (
                    (i + j < tamRombo && i < tamRombo && j < tamRombo) || // Rombo superior izquierdo
                    (i + (columnas - j - 1) < tamRombo && i < tamRombo && j >= columnas - tamRombo) || // Rombo superior derecho
                    ((filas - i - 1) + j < tamRombo && i >= filas - tamRombo && j < tamRombo) || // Rombo inferior izquierdo
                    ((filas - i - 1) + (columnas - j - 1) < tamRombo && i >= filas - tamRombo && j >= columnas - tamRombo) // Rombo inferior derecho
                ) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }
    
    llenarMatrizAjedrez() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Alterna entre 1 y 0 para crear el patrón de ajedrez
                this.matriz[i][j] = (i + j) % 2 === 0 ? 1 : 0;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizRelojDeArena() {
        this.vaciarMatriz();
    
        const filas = this.filas;
        const columnas = this.columnas;
    
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                if (
                    (j >= i && j < columnas - i) || // Parte superior
                    (j >= columnas - i - 1 && j <= i) // Parte inferior
                ) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
    
        this.dibujarMatriz();
    }
    

    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#8e44ad"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e74c3c"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }

    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "#50aa69"; // Color para valor 3
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#50aa69";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("3", x + ancho /2 , y + alto / 2 );
    }

    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 4
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#6ca6b2";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("4", x + ancho /2 , y + alto / 2 );
    }

    DibujarCinco(x, y, ancho, alto) {
        this.ctx.fillStyle = "#1d3235"; // Color para valor 5
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#1d3235";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("5", x + ancho /2 , y + alto / 2 );
    }

    DibujarSeis(x, y, ancho, alto) {
        this.ctx.fillStyle = "#5c9da6"; // Color para valor 6
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#5c9da6";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("6", x + ancho /2 , y + alto / 2 );
    }

    DibujarSiete(x, y, ancho, alto) {
        this.ctx.fillStyle = "#a65c78"; // Color para valor 7
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#a65c78";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("7", x + ancho /2 , y + alto / 2 );
    }
}