class Utils{


    Redondear(valor){
        return Math.round(valor); 
    }

    //antes
    //canvas.height = Math.round(canvas.height/50) * 50;

    //Ahora

    RoundTablero(lado){
        return Math.round(lado/50)*50; 
    }
    //Redondea el parametro y lo multiplica por 50 para hacerlo un multiplo del mismo. 

    
}