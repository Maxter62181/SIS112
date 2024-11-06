// Definir las piezas con símbolos unicode
const pieces = {
    r: 'img/TorreNegra.png',
    n: 'img/CaballoNegro.png',
    b: 'img/ArfilNegro.png',
    q: 'img/ReinaNegra.png',
    k: 'img/ReyNegro.png',
    p: 'img/PeonNegro.png', // Piezas negras
    R: 'img/TorreBlanca.png',
    N: 'img/CaballoBlanco.png',
    B: 'img/ArfilBlanco.png',
    Q: 'img/ReinaBlanca.png',
    K: 'img/ReyBlanco.png',
    P: 'img/PeonBlanco.png'  // Piezas blancas
};

// Tablero inicial en formato FEN
let board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
];

let selectedPiece = null;
let turn = 'white'; // Empieza el jugador blanco
let enPassant = null; // Para manejar la captura al paso
let canCastle = {
    whiteKing: true,
    whiteRookA: true,
    whiteRookH: true,
    blackKing: true,
    blackRookA: true,
    blackRookH: true
}; // Para manejar el enroque
let cursorRow = 0; // Posición inicial del cursor
let cursorCol = 0;

let mode = 'normal'; // Variable para almacenar el modo de juego

// Temporizadores para los dos jugadores (solo para el modo con temporizador)
let whiteTime = 600; // 10 minutos en segundos
let blackTime = 600; // 10 minutos en segundos
let timerInterval = null; // Para manejar el temporizador

// Elementos visuales para los temporizadores y mensajes
const whiteTimerDisplay = document.getElementById('white-timer');
const blackTimerDisplay = document.getElementById('black-timer');
const messageDisplay = document.getElementById('message');

// Función para iniciar el juego basado en el modo
// Función para iniciar el juego basado en el modo
function startGame(selectedMode) {
    mode = selectedMode; // Establecer el modo seleccionado
    document.getElementById('mode-selection').style.display = 'none'; // Ocultar el menú
    document.getElementById('game-container').style.display = 'flex'; // Mostrar el juego
    document.getElementById('turn-indicator').style.display = 'flex'; // Mostrar el indicador de turno

    if (mode === 'normal') {
        whiteTimerDisplay.style.display = 'none';
        blackTimerDisplay.style.display = 'none';
    } else {
        // Modo con temporizador
        whiteTimerDisplay.style.display = 'block';
        blackTimerDisplay.style.display = 'block';
        startTimer(); // Iniciar el temporizador
    }

    renderBoard(); // Renderizar el tablero
    updateTurnIndicator(); // Mostrar el turno inicial
}

// Actualizar el mensaje y el GIF según el turno
function updateTurnIndicator() {
    const turnMessage = document.getElementById('turn-message');
    const turnGif = document.getElementById('turn-gif');

    if (turn === 'white') {
        turnMessage.textContent = 'Turno de las Blancas';
        turnGif.src = 'img/CaballeroBlanco.gif';  // Ruta del GIF para el turno de las blancas
        turnGif.alt = 'Turno de Blancas';
    } else {
        turnMessage.textContent = 'Turno de las Negras';
        turnGif.src = 'img/CaballeroNegro.gif';  // Ruta del GIF para el turno de las negras
        turnGif.alt = 'Turno de Negras';
    }
}

function toggleTurn() {
    turn = (turn === 'white') ? 'black' : 'white';
    updateTurnIndicator();
    if (mode === 'timer') {
        stopTimer(); // Pausar el temporizador actual
        startTimer(); // Iniciar el temporizador del siguiente jugador
    }
}


function renderBoard() {
    const chessBoard = document.getElementById('chess-board');
    chessBoard.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
            tile.setAttribute('data-row', row);
            tile.setAttribute('data-col', col);

            const piece = board[row][col];
            if (piece !== ' ') {
                const pieceImg = document.createElement('img');
                pieceImg.src = pieces[piece];
                pieceImg.classList.add('piece');
                tile.appendChild(pieceImg);
            }

            if (row === cursorRow && col === cursorCol) {
                tile.classList.add('selected'); // Resaltar casilla seleccionada
            }

            chessBoard.appendChild(tile);
        }
    }
    if (mode === 'timer') updateTimers(); // Actualizar temporizadores si es el modo con temporizador
}

function onKeyPress(event) {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'w':
            if (cursorRow > 0) cursorRow--;
            break;
        case 's':
            if (cursorRow < 7) cursorRow++;
            break;
        case 'a':
            if (cursorCol > 0) cursorCol--;
            break;
        case 'd':
            if (cursorCol < 7) cursorCol++;
            break;
        case 'enter':
            handleEnterPress();
            break;
        default:
            return; // Ignorar otras teclas
    }
    renderBoard(); // Actualizar la visualización
}

function handleEnterPress() {
    const piece = board[cursorRow][cursorCol];

    if (selectedPiece) {
        // Intentar mover la pieza seleccionada
        if (isValidMove(selectedPiece.row, selectedPiece.col, cursorRow, cursorCol)) {
            const previousBoard = JSON.parse(JSON.stringify(board)); // Guardar estado previo para verificar jaque

            movePiece(selectedPiece.row, selectedPiece.col, cursorRow, cursorCol);

            // Verificar si el rey del jugador sigue en jaque
            if (isKingInCheck(turn)) {
                // Si el rey está en jaque después del movimiento, revertir el movimiento
                board = previousBoard;
                showMessage("No puedes dejar tu rey en jaque.");
                renderBoard();
            } else {
                // Verificar si el movimiento pone al oponente en jaque mate
                if (isCheckmate(turn === 'white' ? 'black' : 'white')) {
                    showCheckmate(turn === 'white' ? 'black' : 'white'); // Cambiar el parámetro a 'black' si 'white' gana y viceversa
                } else {
                    toggleTurn();
                }
            }
        }
        selectedPiece = null; // Desmarcar la pieza seleccionada
    } else {
        // Seleccionar una pieza si es el turno del jugador correcto
        if (piece !== ' ' && isPieceTurn(piece)) {
            selectedPiece = { row: cursorRow, col: cursorCol };
        }
    }
}

function isPieceTurn(piece) {
    return (turn === 'white' && piece === piece.toUpperCase()) || (turn === 'black' && piece === piece.toLowerCase());
}

function movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];

    // Si un peón alcanza la última fila, se promueve automáticamente a reina
    if (piece === 'P' && toRow === 0) {
        board[toRow][toCol] = 'Q';
    } else if (piece === 'p' && toRow === 7) {
        board[toRow][toCol] = 'q';
    } else {
        board[toRow][toCol] = piece;
    }

    board[fromRow][fromCol] = ' ';
    enPassant = null;

    // Si el peón se mueve dos casillas, habilitar captura al paso
    if (piece === 'P' && fromRow === 6 && toRow === 4) {
        enPassant = [5, fromCol];
    } else if (piece === 'p' && fromRow === 1 && toRow === 3) {
        enPassant = [2, fromCol];
    }

    renderBoard();
}

function isValidMove(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];
    const target = board[toRow][toCol];

    // Verificar si la casilla destino contiene una pieza del mismo equipo
    if (target !== ' ' && isSameTeam(piece, target)) {
        return false;
    }

    // Lógica básica de movimiento para cada pieza
    switch (piece.toLowerCase()) {
        case 'p':
            return validatePawnMove(fromRow, fromCol, toRow, toCol, piece);
        case 'r':
            return validateRookMove(fromRow, fromCol, toRow, toCol);
        case 'n':
            return validateKnightMove(fromRow, fromCol, toRow, toCol);
        case 'b':
            return validateBishopMove(fromRow, fromCol, toRow, toCol);
        case 'q':
            return validateQueenMove(fromRow, fromCol, toRow, toCol);
        case 'k':
            return validateKingMove(fromRow, fromCol, toRow, toCol);
        default:
            return false;
    }
}



// Detección de jaque mate
function isCheckmate(player) {
    // Verificar si el rey del jugador está en jaque
    if (!isKingInCheck(player)) {
        return false;
    }

    // Verificar si alguna pieza del jugador tiene un movimiento válido
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            if (piece !== ' ' && isPieceTurnForPlayer(piece, player)) {
                for (let newRow = 0; newRow < 8; newRow++) {
                    for (let newCol = 0; newCol < 8; newCol++) {
                        if (isValidMove(row, col, newRow, newCol)) {
                            const previousBoard = JSON.parse(JSON.stringify(board)); // Guardar el estado
                            movePiece(row, col, newRow, newCol); // Intentar el movimiento
                            const isStillInCheck = isKingInCheck(player); // Verificar si sigue en jaque
                            board = previousBoard; // Revertir el movimiento
                            if (!isStillInCheck) {
                                return false; // El jugador tiene un movimiento válido
                            }
                        }
                    }
                }
            }
        }
    }

    return true; // No hay movimientos válidos, es jaque mate
}
/*
// Mostrar mensaje de jaque mate y ganador
function showCheckmate(winner) {
    const team = winner === 'white' ? 'blancos' : 'negros';
    const message = `JAQUE MATE, GANAN LOS ${team.toUpperCase()}`;

    // Mostrar el mensaje en el overlay
    document.getElementById('checkmate-message').textContent = message;

    // Mostrar el overlay
    document.getElementById('checkmate-overlay').style.display = 'block';

    // Detener el juego y temporizadores
    stopTimer();
}
*/

function showCheckmate(loser) {
    const winner = loser === 'white' ? 'black' : 'white'; // Cambiar la lógica
    const team = winner === 'white' ? 'blancos' : 'negros';
    const message = `JAQUE MATE, GANAN LOS ${team.toUpperCase()}`;

    // Mostrar el mensaje en el overlay
    document.getElementById('checkmate-message').textContent = message;

    // Mostrar el overlay
    document.getElementById('checkmate-overlay').style.display = 'block';

    // Detener el juego y temporizadores
    stopTimer();
}


function createResetButton() {
    const buttonContainer = document.createElement('div');
    const restartButton = document.createElement('button');
    const menuButton = document.createElement('button');

    restartButton.textContent = 'Reiniciar Partida';
    menuButton.textContent = 'Volver al Menú';

    restartButton.onclick = () => {
        // Reiniciar la partida
        location.reload(); // Reiniciar la página completa para reiniciar todo
    };

    menuButton.onclick = () => {
        // Volver al menú principal
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('mode-selection').style.display = 'block';
    };

    buttonContainer.appendChild(restartButton);
    buttonContainer.appendChild(menuButton);
    messageDisplay.appendChild(buttonContainer); // Añadir los botones al mensaje
}

// Temporizadores
function startTimer() {
    stopTimer(); // Asegurarse de que no haya temporizadores previos activos

    if (turn === 'white') {
        timerInterval = setInterval(() => {
            whiteTime--;
            if (whiteTime <= 0) {
                gameOver("black", "El tiempo de las blancas ha terminado.");
            }
            updateTimers();
        }, 1000);
    } else {
        timerInterval = setInterval(() => {
            blackTime--;
            if (blackTime <= 0) {
                gameOver("white", "El tiempo de las negras ha terminado.");
            }
            updateTimers();
        }, 1000);
    }
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Mostrar los temporizadores en el tablero
function updateTimers() {
    whiteTimerDisplay.textContent = formatTime(whiteTime);
    blackTimerDisplay.textContent = formatTime(blackTime);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Mostrar mensajes en pantalla
function showMessage(message) {
    messageDisplay.textContent = message;
}

function gameOver(winner, reason) {
    stopTimer();
    showMessage(`${reason} El ganador es ${winner === 'white' ? 'blanco' : 'negro'}.`);
    createResetButton();
}

// Validación del movimiento del peón
function validatePawnMove(fromRow, fromCol, toRow, toCol, piece) {
    const direction = (piece === 'P') ? -1 : 1; // Blancos suben (-1), negros bajan (+1)
    const startRow = (piece === 'P') ? 6 : 1;

    // Movimiento hacia adelante
    if (fromCol === toCol && board[toRow][toCol] === ' ') {
        if (toRow === fromRow + direction) {
            return true; // Mover una casilla
        } else if (fromRow === startRow && toRow === fromRow + 2 * direction && board[fromRow + direction][toCol] === ' ') {
            return true; // Mover dos casillas desde la posición inicial
        }
    }

    // Captura en diagonal
    if (Math.abs(fromCol - toCol) === 1 && toRow === fromRow + direction && board[toRow][toCol] !== ' ') {
        return true;
    }

    // Captura al paso
    if (enPassant && toRow === enPassant[0] && toCol === enPassant[1]) {
        return true;
    }

    return false;
}

// Validación del movimiento de la torre
function validateRookMove(fromRow, fromCol, toRow, toCol) {
    if (fromRow === toRow || fromCol === toCol) {
        return !isBlocked(fromRow, fromCol, toRow, toCol);
    }
    return false;
}

// Validación del movimiento del caballo
function validateKnightMove(fromRow, fromCol, toRow, toCol) {
    const dRow = Math.abs(toRow - fromRow);
    const dCol = Math.abs(toCol - fromCol);
    return (dRow === 2 && dCol === 1) || (dRow === 1 && dCol === 2);
}

// Validación del movimiento del alfil
function validateBishopMove(fromRow, fromCol, toRow, toCol) {
    if (Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol)) {
        return !isBlocked(fromRow, fromCol, toRow, toCol);
    }
    return false;
}

// Validación del movimiento de la reina
function validateQueenMove(fromRow, fromCol, toRow, toCol) {
    return validateRookMove(fromRow, fromCol, toRow, toCol) || validateBishopMove(fromRow, fromCol, toRow, toCol);
}

// Validación del movimiento del rey
function validateKingMove(fromRow, fromCol, toRow, toCol) {
    if (Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1) {
        return true;
    }
    return false;
}

// Verifica si hay piezas bloqueando el camino entre la posición inicial y la final
function isBlocked(fromRow, fromCol, toRow, toCol) {
    const rowDirection = Math.sign(toRow - fromRow);
    const colDirection = Math.sign(toCol - fromCol);

    let row = fromRow + rowDirection;
    let col = fromCol + colDirection;

    while (row !== toRow || col !== toCol) {
        if (board[row][col] !== ' ') {
            return true;
        }
        row += rowDirection;
        col += colDirection;
    }
    return false;
}

// Verifica si las piezas son del mismo equipo
function isSameTeam(piece1, piece2) {
    return (piece1 === piece1.toUpperCase() && piece2 === piece2.toUpperCase()) ||
           (piece1 === piece1.toLowerCase() && piece2 === piece2.toLowerCase());
}

// Verifica si las piezas son del jugador actual
function isPieceTurnForPlayer(piece, player) {
    return (player === 'white' && piece === piece.toUpperCase()) || (player === 'black' && piece === piece.toLowerCase());
}

// Verifica si el rey de un jugador está en jaque
function isKingInCheck(player) {
    const king = (player === 'white') ? 'K' : 'k';
    let kingPosition = null;

    // Encontrar la posición del rey
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (board[row][col] === king) {
                kingPosition = [row, col];
                break;
            }
        }
    }

    // Verificar si alguna pieza del oponente amenaza al rey
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            if (piece !== ' ' && !isSameTeam(piece, king)) {
                if (isValidMove(row, col, kingPosition[0], kingPosition[1])) {
                    return true; // El rey está en jaque
                }
            }
        }
    }

    return false;
}
// Mostrar mensaje de jaque mate y ganador


// Reiniciar la partida en el mismo modo
function restartGame() {
    // Reiniciar el tablero y tiempos
    location.reload(); // Reinicia toda la página (puedes cambiar esto si prefieres reiniciar el juego sin recargar)
}

// Volver al menú principal
function goToMenu() {
    // Ocultar el contenedor del juego
    document.getElementById('game-container').style.display = 'none';
    
    // Mostrar el menú de selección de modo
    document.getElementById('mode-selection').style.display = 'block';

    // Ocultar el overlay de jaque mate
    document.getElementById('checkmate-overlay').style.display = 'none';
}





// Escuchar eventos de teclado
document.addEventListener('keydown', onKeyPress);
