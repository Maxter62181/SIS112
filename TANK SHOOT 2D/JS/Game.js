class Game{

    ancho; 
    alto;
    cantColumnas;
    cantFilas; 
    anchoCelda;
    altoCelda;
    estadoJuego;

    constructor(_ancho, _alto, _estadoJuego){
        this.ancho = _ancho;
        this.alto = _alto;
        this.estadoJuego = _estadoJuego;
        
        var utilsObj = new Utils();
        this.cantColumnas = CANT_COLUMNAS; 
        this.cantFilas = CANT_FILAS; 

        this.anchoCelda = utilsObj.Redondear(this.ancho / this.cantColumnas); 
        this.altoCelda = utilsObj.Redondear(this.alto / this.cantFilas); 

        console.log("cantidad de columnas", this.cantColumnas);
        console.log("cantidad de filas", this.cantFilas)

        console.log("anchoCelda", this.anchoCelda); 
        console.log("altoCelda", this.altoCelda);
    }


    start(){
        this.estadoJuego = "playing";
        //Iniciar otros elementso como tanques, puntuacion, etc. 
    }

    reset(){
        this.estadoJuego = "reset";
        //Reiniciar las posiciones de los tanques, puntuaciones, etc. 
    }

    
}