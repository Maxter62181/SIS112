//Seleccionamos el canvas y el contexto 

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

var utilsObj = new Utils()

//Funcion para ajustar el tamaño del canvas a la ventana 

function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

    canvas.width = utilsObj.RoundTablero(canvas.width); 
    canvas.height = utilsObj.RoundTablero(canvas.height);


    
}

// Llamamos a la funcion al cargar la pagina 

resizeCanvas(); 

//Ajustamos el canvas cuando la ventana cambie tamaño.

window.addEventListener('resize', resizeCanvas); 

//Creamos un objeto en el juego 
const game = new Game(canvas.width, canvas.height, "start"); 

//Creamos un tanque de jugador y un tanque enemigo 
const playerTank = new Tank(100, 100, 'up', 3, game.ancho, game.alto); 

//Creamos un tanque para n cantidad de enemigos 
const enemyTank = new EnemyTank(500, 100, 'down', 3, game.ancho, game.alto); 
const enemyTank2 = new EnemyTank(400, 500, 'down', 3, game.ancho, game.alto); 
const enemyTank3 = new EnemyTank(10, 100, 'down', 3, game.ancho, game.alto); 
const enemyTank4 = new EnemyTank(700, 550, 'down', 3, game.ancho, game.alto); 

//Dibujamos los elementos del canvas 




//las teclas asiganadas para mover nuestro tanque 
window.addEventListener('keydown', function (e) {
    switch(e.key){
        case 'ArrowLeft':
            playerTank.moveLeft();
            break;
        case 'ArrowRight':
            playerTank.moveRight();
            break;
        case 'ArrowUp':
            playerTank.moveUp();
            break;
        case 'ArrowDown':
            playerTank.moveDown();
            break; 
        case 'a':
                playerTank.moveLeft();
                break;
        case 'd':
                playerTank.moveRight();
                break;
        case 'w':
                playerTank.moveUp();
                break;
        case 's':
                playerTank.moveDown();
                break; 


    }
});

//direcciones de movimiento aleatorio de los tanques enemigos 
function moveEnemyTankRandomly(enemyTank){
    const directions = ['left', 'right', 'up', 'down']; //POsibles direccione s
    const randomDirections = directions[Math.floor(Math.random() * directions.length)];

    //Movemos el tanque enemigo en la direccion elegida 

    switch(randomDirections){
        case 'left':
            enemyTank.moveLeft(); 
            break;
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;
    }
}
//Intervalo de tiempo en el que se movera cada tanque en milisegundos
setInterval(() => {
    
    moveEnemyTankRandomly(enemyTank3);
    moveEnemyTankRandomly(enemyTank4);
}, 650);

setInterval(() => {
    moveEnemyTankRandomly(enemyTank);
    moveEnemyTankRandomly(enemyTank2);
    
}, 400);


//Tablero de juego 
const escenario = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,0,1,1,1,0,0,0,0,1],
    [1,0,1,0,1,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
    [1,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,0,1,0,0,0,0,0,0,0,0,0,1],
    [1,0,1,0,1,0,0,0,0,0,1,0,0,0,1],
    [1,0,1,0,1,0,0,1,0,0,1,0,0,0,1],
    [1,0,0,0,1,0,0,1,0,0,1,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

function drawEscenario(ctx, escenario){
    console.log("drawEscenario")
    for (let row = 0; row < escenario.length; row++){
        for (let col = 0; col < escenario[row].length; col++){
            const cell = escenario[row][col]; 
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda; 
            console.log(cell)
            switch(cell) {
                case 0:
                    ctx.fillStyle = "orange"; 
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break; 
                
                case 1:
                    ctx.fillStyle = "gray";
                    ctx.fillRect(x, y, game.anchoCelda, game.altoCelda);
                    break;
                default:
                    break;
                    
            }
        }
    }
}

// 0 es de color #fb5f9a (rosa rojizo) Camino
// 1 es de color #d3f7f1 (celeste claro) Bloque normal de ladrillo
// 2 es de color #6b3c79 (Morado oscuro) Bloque de concreto
// El mapa es de 15 columnas y 12 Filas
const mapa = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const mapa2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 2, 2, 2, 2, 2, 2, 2, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 1, 1, 1, 2, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0],
]

function DibujarCero(ctx, x, y, x1, y1){
    ctx.fillStyle = "#fb5f9a";
    ctx.fillRect(x, y, x1, y1); 
}

function DibujarUno(ctx, x, y, x1, y1){
    ctx.fillStyle = "#d3f7f1";
    ctx.fillRect(x, y, x1, y1); 
}
function DibujarDos(ctx, x, y, x1, y1){
    ctx.fillStyle = "#6b3c79"; 
    ctx.fillRect(x, y, x1, y1); 
}

function DibujarMapa(ctx, mapa){
    for (let row = 0; row < mapa.length; row++){
        for(let col = 0; col < mapa[row].length; col++){
            const cell = mapa[row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda; 
            switch (cell){
                case 0:
                    DibujarCero(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                case 1:
                    DibujarUno(ctx, x, y, game.anchoCelda, game.altoCelda); 
                    break; 
                case 2:
                    DibujarDos(ctx, x, y, game.anchoCelda, game.altoCelda);
                    break;
                default:
                    break; 
            }
        }
        
    }
}

//Logica del juego (actualizacion de la pantalla)
function updateGame(){
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    //drawEscenario(ctx, escenario); //Dibujasmos el escenario en canvas 
    DibujarMapa(ctx,mapa2);
   /* playerTank.drawTank(ctx);

    enemyTank.drawEnemyTank(ctx);
    enemyTank2.drawEnemyTank(ctx); 
    enemyTank3.drawEnemyTank(ctx);
    enemyTank4.drawEnemyTank(ctx);
    //Repetimos el ciclo dibujando 
    requestAnimationFrame(updateGame); 
    */
}

//iniciamos el juego
updateGame(); 
