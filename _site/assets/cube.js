document.addEventListener('mousemove', (event) => {
    const cube = document.querySelector('.cube');
    if (!cube) {
        console.error('Cube element not found');
        return;
    }
    const xAxis = (event.clientX / window.innerWidth) * 360; // Calculate rotation based on cursor position
    const yAxis = (event.clientY / window.innerHeight) * 360; // Calculate rotation based on cursor position
    cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; // Apply rotation
});