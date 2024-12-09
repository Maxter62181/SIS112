// Activar o desactivar contenido al hacer clic en un botón
document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', () => {
        const contentId = `content${button.id.replace('btn', '')}`;
        const content = document.getElementById(contentId);
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            // Ocultar otros contenidos
            document.querySelectorAll('.content').forEach((c) => (c.style.display = 'none'));
            content.style.display = 'block';
        }
    });
});
