// Crear el canvas
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
// Clase para crear partículas
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * -1.5 - 0.5;

        // Paleta de colores: Naranja, rojizo, púrpura
        const colors = [
            'rgba(255, 94, 77, 0.8)', // Naranja fuerte
            'rgba(255, 140, 77, 0.8)', // Naranja claro
            'rgba(255, 51, 51, 0.8)',  // Rojizo
            'rgba(200, 70, 120, 0.8)', // Púrpura rojizo
            'rgba(160, 45, 105, 0.8)', // Púrpura oscuro
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.01;
        if (this.size <= 0 || this.y < 0) {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height;
            this.size = Math.random() * 3 + 1;
        }
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particlesArray = [];
    const numParticles = Math.floor(canvas.width * canvas.height * 0.0001);
    for (let i = 0; i < numParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

// Iniciar las partículas
initParticles();
animateParticles();

// Ajustar el tamaño del canvas al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});