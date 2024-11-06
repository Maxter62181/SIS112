// Función para iniciar el juego basado en el modo seleccionado
function startGame(selectedMode) {
    if (selectedMode === 'normal') {
        window.location.href = 'normal_mode.html';
    } else if (selectedMode === 'timer') {
        window.location.href = 'timer.html';
    }
}
