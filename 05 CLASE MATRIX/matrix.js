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

    llenarMatrizSecuencialColumnas(){
        this.vaciarMatriz(); 
        for(let i = 0; i < this.filas; i++){
            for(let j = 0; j < this.columnas; j ++){
                this.matriz[i][j] = j % 3;
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
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#8e44ad"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e74c3c"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
    }
}