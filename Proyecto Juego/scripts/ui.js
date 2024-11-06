// Función para mostrar/ocultar las reglas del ajedrez
function toggleChessRules() {
    const rules = document.getElementById('chess-rules');
    if (rules.style.display === 'none' || rules.style.display === '') {
        rules.style.display = 'block';
    } else {
        rules.style.display = 'none';
    }
}

// Función para actualizar el indicador de turno y cambiar la imagen
function updateTurnIndicator() {
    const turnMessage = document.getElementById('turn-message');
    const turnGif = document.getElementById('turn-gif');

    if (turn === 'white') {
        turnMessage.textContent = 'Turno de las Blancas';
        turnGif.src = 'img/CaballeroBlanco.gif';
        turnGif.alt = 'Turno de Blancas';
    } else {
        turnMessage.textContent = 'Turno de las Negras';
        turnGif.src = 'img/CaballeroNegro.gif';
        turnGif.alt = 'Turno de Negras';
    }
}

// Mostrar mensajes de error o información al usuario
function showMessage(message) {
    const messageDisplay = document.getElementById('message');
    if (messageDisplay) {
        messageDisplay.textContent = message;
    }
}