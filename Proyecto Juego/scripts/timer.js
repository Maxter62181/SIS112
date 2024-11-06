let timerInterval = null; // Almacena el intervalo del temporizador
let whiteTime = 600; // Tiempo de las blancas en segundos (10 minutos)
let blackTime = 600; // Tiempo de las negras en segundos (10 minutos)
let isFirstTurn = true; // Variable para rastrear el primer turno



// Función para iniciar el temporizador
function startTimer() {
    stopTimer(); // Detener cualquier temporizador en curso

    if (isFirstTurn) {
        // Si es el primer turno, aplicar un retraso de 4 segundos
        setTimeout(() => {
            startTurnTimer(); // Iniciar el temporizador para el turno actual
            isFirstTurn = false; // Marcar que el primer turno ya ha pasado
        }, 4000);
    } else {
        // En turnos siguientes, iniciar el temporizador de inmediato
        startTurnTimer();
    }
}

// Función auxiliar para iniciar el temporizador sin retraso
function startTurnTimer() {
    if (turn === 'white') {
        timerInterval = setInterval(() => {
            whiteTime--;
            updateTimers();
            if (whiteTime <= 0) {
                gameOver("black", "El tiempo de las blancas ha terminado.");
            }
        }, 1000);
    } else {
        timerInterval = setInterval(() => {
            blackTime--;
            updateTimers();
            if (blackTime <= 0) {
                gameOver("white", "El tiempo de las negras ha terminado.");
            }
        }, 1000);
    }
}

// Función para detener el temporizador
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Función para actualizar los temporizadores en pantalla
function updateTimers() {
    const whiteTimerDisplay = document.getElementById('white-timer');
    const blackTimerDisplay = document.getElementById('black-timer');
    if (whiteTimerDisplay && blackTimerDisplay) {
        whiteTimerDisplay.textContent = formatTime(whiteTime);
        blackTimerDisplay.textContent = formatTime(blackTime);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Llama a startTimer después de que el turno cambie
function toggleTurn() {
    // Cambia el turno
    turn = (turn === 'white') ? 'black' : 'white';

    // Actualiza el indicador visual del turno
    updateTurnIndicator();

    // Verifica si hay jaque mate antes de iniciar el temporizador
    if (isCheckmate(turn)) {
        showCheckmate(turn === 'white' ? 'black' : 'white'); // Muestra el ganador
        stopTimer(); 
    } else {
        // Si no hay jaque mate, inicia el temporizador para el siguiente turno
        startTimer();
    }
}


// Finalizar el juego si el tiempo se agota
function gameOver(winner, reason) {
    stopTimer(); // Detener cualquier temporizador activo

    const overlay = document.getElementById('checkmate-overlay');
    const message = document.getElementById('checkmate-message');
    const leftCelebration = document.getElementById('celebration-left');
    const rightCelebration = document.getElementById('celebration-right');

    if (message) {
        message.textContent = `${reason} El ganador es ${winner === 'white' ? 'BLANCO' : 'NEGRO'}.`;
    }

    if (overlay) {
        overlay.style.display = 'flex'; // Muestra la pantalla de fin del juego
    }

    // Mostrar los GIFs de celebración
    if (leftCelebration && rightCelebration) {
        leftCelebration.style.display = 'block';
        rightCelebration.style.display = 'block';
    }
}

