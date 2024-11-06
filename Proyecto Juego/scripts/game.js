// Definir las piezas con sus imágenes correspondientes
const pieces = {
    r: 'img/TorreNegra.png',
    n: 'img/CaballoNegro.png',
    b: 'img/ArfilNegro.png',
    q: 'img/ReinaNegra.png',
    k: 'img/ReyNegro.png',
    p: 'img/PeonNegro.png',
    R: 'img/TorreBlanca.png',
    N: 'img/CaballoBlanco.png',
    B: 'img/ArfilBlanco.png',
    Q: 'img/ReinaBlanca.png',
    K: 'img/ReyBlanco.png',
    P: 'img/PeonBlanco.png'
};

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
let turn = 'white';
let cursorRow = 0;
let cursorCol = 0;
let whiteCaptured = [];
let blackCaptured = [];

// Renderizar el tablero
function renderBoard() {
    const chessBoard = document.getElementById('chess-board');
    chessBoard.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const tile = document.createElement('div');
            tile.classList.add('tile', (row + col) % 2 === 0 ? 'white' : 'black');
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
                tile.classList.add('selected');
            }

            chessBoard.appendChild(tile);
        }
    }
    updateTurnIndicator();
    updateCapturedPieces();
}

// Alternar el turno entre blanco y negro
function toggleTurn() {
    turn = (turn === 'white') ? 'black' : 'white';
    updateTurnIndicator();
    if (isCheckmate(turn)) {
        showCheckmate(turn === 'white' ? 'black' : 'white');
    }
}

// Escuchar eventos de teclado
document.addEventListener('keydown', onKeyPress);

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
            return;
    }
    renderBoard();
}

function handleEnterPress() {
    const piece = board[cursorRow][cursorCol];

    if (selectedPiece) {
        if (selectedPiece.row === cursorRow && selectedPiece.col === cursorCol) {
            selectedPiece = null;
            renderBoard();
        } else if (isValidMove(selectedPiece.row, selectedPiece.col, cursorRow, cursorCol)) {
            const captured = movePiece(selectedPiece.row, selectedPiece.col, cursorRow, cursorCol);
            if (isKingInCheck(turn)) {
                undoMove();
                showMessage("No puedes dejar tu rey en jaque.");
            } else {
                // Solo agrega una pieza capturada si realmente hubo captura
                if (captured) addCapturedPiece(captured);
                toggleTurn();
            }
            selectedPiece = null;
        } else {
            showMessage("Movimiento inválido.");
        }
    } else {
        if (piece !== ' ' && isPieceTurn(piece) && canMoveInCheck(piece, cursorRow, cursorCol)) {
            selectedPiece = { row: cursorRow, col: cursorCol };
            renderBoard();
        } else {
            showMessage("Selecciona una pieza válida.");
        }
    }
}





// Verificar si es el turno correcto para la pieza seleccionada
function isPieceTurn(piece) {
    return (turn === 'white' && piece === piece.toUpperCase()) || (turn === 'black' && piece === piece.toLowerCase());
}

// Mover una pieza y actualizar el tablero
function movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];
    const target = board[toRow][toCol];
    board[toRow][toCol] = piece;
    board[fromRow][fromCol] = ' ';

    // Detectar promoción de peón
    if ((piece === 'P' && toRow === 0) || (piece === 'p' && toRow === 7)) {
        showPromotionOptions(toRow, toCol, piece); // Mostrar opciones de promoción
        return null;
    }
    
    return target !== ' ' && !isSameTeam(piece, target) ? target : null;
}

function showPromotionOptions(row, col, piece) {
    const promotionContainer = document.createElement('div');
    promotionContainer.id = 'promotion-options';
    promotionContainer.style.position = 'absolute';
    promotionContainer.style.top = `${row * 60}px`;
    promotionContainer.style.left = `${col * 60}px`;
    promotionContainer.style.display = 'flex';
    promotionContainer.style.gap = '10px';

    const team = piece === piece.toUpperCase() ? 'white' : 'black';
    const options = ['q', 'r', 'b', 'n']; // Reina, Torre, Alfil, Caballo

    options.forEach((opt, index) => {
        const option = document.createElement('img');
        option.src = pieces[opt.toUpperCase() === opt ? opt : opt.toLowerCase()];
        option.classList.add('promotion-option');
        option.setAttribute('data-piece', opt.toUpperCase() === opt ? opt : opt.toLowerCase());
        option.setAttribute('data-index', index);
        option.style.width = '50px';
        option.style.height = '50px';
        option.style.transform = 'scale(1)';

        promotionContainer.appendChild(option);
    });

    document.body.appendChild(promotionContainer);

    // Iniciar la selección en la primera opción
    let selectedIndex = 0;
    highlightPromotionOption(selectedIndex);

    // Manejar las teclas de selección y confirmación
    document.addEventListener('keydown', function handlePromotionSelection(event) {
        if (event.key === 'Enter') {
            const selectedPiece = options[selectedIndex];
            board[row][col] = team === 'white' ? selectedPiece.toUpperCase() : selectedPiece.toLowerCase();
            document.body.removeChild(promotionContainer);
            document.removeEventListener('keydown', handlePromotionSelection);
            renderBoard(); // Actualizar el tablero
        } else if (['w', 'a', 's', 'd'].includes(event.key.toLowerCase())) {
            selectedIndex = updatePromotionSelection(selectedIndex, event.key.toLowerCase(), options.length);
            highlightPromotionOption(selectedIndex);
        }
    });
}

function updatePromotionSelection(currentIndex, direction, optionsLength) {
    if (direction === 'w' || direction === 'a') {
        return (currentIndex - 1 + optionsLength) % optionsLength;
    } else if (direction === 's' || direction === 'd') {
        return (currentIndex + 1) % optionsLength;
    }
    return currentIndex;
}

function highlightPromotionOption(index) {
    const options = document.querySelectorAll('.promotion-option');
    options.forEach((option, i) => {
        option.style.transform = i === index ? 'scale(1.2)' : 'scale(1)'; // Efecto de acercamiento
    });
}


// Añadir la pieza capturada a la lista
function addCapturedPiece(piece) {
    if (piece === piece.toUpperCase()) {
        whiteCaptured.push(piece);
    } else {
        blackCaptured.push(piece);
    }
    updateCapturedPieces();
}

//Actualiza el estado de las piezas atrapadas
function updateCapturedPieces() {
    const whiteCapturesContainer = document.getElementById('white-captured');
    const blackCapturesContainer = document.getElementById('black-captured');
    whiteCapturesContainer.innerHTML = '';
    blackCapturesContainer.innerHTML = '';

    const maxItemsPerRow = 8; // Máximo de piezas por fila

    // Mostrar piezas capturadas blancas en disposición diagonal
    whiteCaptured.forEach((piece, index) => {
        const pieceImg = document.createElement('img');
        pieceImg.src = pieces[piece];
        pieceImg.classList.add('captured-piece');
        pieceImg.style.gridColumnStart = (index % maxItemsPerRow) + 1;
        pieceImg.style.gridRowStart = Math.floor(index / maxItemsPerRow) + 1;
        whiteCapturesContainer.appendChild(pieceImg);
    });

    // Mostrar piezas capturadas negras en disposición diagonal
    blackCaptured.forEach((piece, index) => {
        const pieceImg = document.createElement('img');
        pieceImg.src = pieces[piece];
        pieceImg.classList.add('captured-piece');
        pieceImg.style.gridColumnStart = (index % maxItemsPerRow) + 1;
        pieceImg.style.gridRowStart = Math.floor(index / maxItemsPerRow) + 1;
        blackCapturesContainer.appendChild(pieceImg);
    });
}

// Validación de movimiento en caso de jaque
function canMoveInCheck(piece, fromRow, fromCol) {
    if (isKingInCheck(turn)) {
        return piece.toLowerCase() === 'k' || canProtectKing(piece, fromRow, fromCol);
    }
    return true;
}

// Verificar si dos piezas son del mismo equipo (blancas o negras)
function isSameTeam(piece1, piece2) {
    return (piece1 === piece1.toUpperCase() && piece2 === piece2.toUpperCase()) ||
           (piece1 === piece1.toLowerCase() && piece2 === piece2.toLowerCase());
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

// Validación del movimiento del peón
function validatePawnMove(fromRow, fromCol, toRow, toCol, piece) {
    const direction = (piece === 'P') ? -1 : 1;
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

    return false;
}

// Verificar si el camino está bloqueado entre la posición inicial y la final
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

function isValidMove(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol];
    const target = board[toRow][toCol];
    if (target !== ' ' && isSameTeam(piece, target)) return false;
    switch (piece.toLowerCase()) {
        case 'p': return validatePawnMove(fromRow, fromCol, toRow, toCol, piece);
        case 'r': return validateRookMove(fromRow, fromCol, toRow, toCol);
        case 'n': return validateKnightMove(fromRow, fromCol, toRow, toCol);
        case 'b': return validateBishopMove(fromRow, fromCol, toRow, toCol);
        case 'q': return validateQueenMove(fromRow, fromCol, toRow, toCol);
        case 'k': return validateKingMove(fromRow, fromCol, toRow, toCol);
        default: return false;
    }
}

function isKingInCheck(player) {
    const king = (player === 'white') ? 'K' : 'k';
    let kingPos = null;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (board[row][col] === king) {
                kingPos = { row, col };
                break;
            }
        }
    }

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            if (piece !== ' ' && !isSameTeam(piece, king) && isValidMove(row, col, kingPos.row, kingPos.col)) {
                return true;
            }
        }
    }
    return false;
}

// Verificar si es jaque mate
function isCheckmate(player) {
    if (!isKingInCheck(player)) return false;

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const piece = board[row][col];
            if (piece !== ' ' && isPieceTurn(piece)) {
                for (let newRow = 0; newRow < 8; newRow++) {
                    for (let newCol = 0; newCol < 8; newCol++) {
                        const previousBoard = JSON.parse(JSON.stringify(board));
                        if (isValidMove(row, col, newRow, newCol)) {
                            movePiece(row, col, newRow, newCol);
                            if (!isKingInCheck(player)) {
                                board = previousBoard;
                                return false;
                            }
                            board = previousBoard;
                        }
                    }
                }
            }
        }
    }
    return true;
}

function showCheckmate(winner) {
    const overlay = document.getElementById('checkmate-overlay');
    const content = document.getElementById('checkmate-content');
    const message = document.getElementById('checkmate-message');
    const leftCelebration = document.getElementById('celebration-left');
    const rightCelebration = document.getElementById('celebration-right');

    if (message) {
        message.textContent = `JAQUE MATE, GANAN LOS ${winner === 'white' ? 'BLANCOS' : 'NEGROS'}`;
    }

    if (overlay) {
        overlay.style.display = 'flex'; // Muestra todo el overlay
    }

    if (content) {
        content.style.display = 'flex'; // Muestra el contenido de checkmate solo en este momento
    }

    // Asegúrate de mostrar los GIFs de celebración
    if (leftCelebration && rightCelebration) {
        leftCelebration.style.display = 'block';
        rightCelebration.style.display = 'block';
    }
}




function restartGame() {
    location.reload();
}

function goToMenu() {
    window.location.href = 'index.html';
}
