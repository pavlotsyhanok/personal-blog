function animateEarthSpinner() {
    const spinnerElement = document.getElementById('earth-spinner');
    const spinnerFrames = [
        '🌍',
        '🌎',
        '🌏'
    ];
    let frameIndex = 0;
    setInterval(() => {
        spinnerElement.textContent = spinnerFrames[frameIndex];
        frameIndex = (frameIndex + 1) % spinnerFrames.length;
    }, 400);
}

document.addEventListener("DOMContentLoaded", animateEarthSpinner);
