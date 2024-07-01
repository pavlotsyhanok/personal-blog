let idleTimer;
let autoRotateInterval;
let isUserActive = true;
let currentX = 0;
let currentY = 0;

const cube = document.querySelector('.cube');

function resetIdleTimer() {
    clearTimeout(idleTimer);
    clearInterval(autoRotateInterval);

    idleTimer = setTimeout(() => {
        isUserActive = false;
        startAutoRotate();
    }, 10); // Set idle time (3 seconds in this case)

    if (!isUserActive) {
        isUserActive = true;
    }
}

function startAutoRotate() {
    autoRotateInterval = setInterval(() => {
        currentX += 1;
        currentY += 1;
        cube.style.transform = `rotateY(${currentX}deg) rotateX(${currentY}deg)`;
    }, 50); // Rotate every 100ms
}

document.addEventListener('mousemove', (event) => {
    if (!cube) {
        console.error('Cube element not found');
        return;
    }
    const deltaX = (event.clientX / window.innerWidth) * 360;
    const deltaY = (event.clientY / window.innerHeight) * 360;
    currentX = deltaX;
    currentY = deltaY;
    cube.style.transform = `rotateY(${currentX}deg) rotateX(${currentY}deg)`; // Apply rotation
    resetIdleTimer();
});

// Initialize the idle timer
resetIdleTimer();
