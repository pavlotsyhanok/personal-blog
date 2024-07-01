 function animateFrequencyWave() {
  const waveElement = document.getElementById("frequency-wave");
  const waveFrames = [
    "010010",

    "001100",

    "100101",

    "111010",

    "111101",

    "010111",

    "101011",

    "111000",

    "110011",

    "110101",
  ];
  let frameIndex = 0;
  setInterval(() => {
    waveElement.innerHTML = waveFrames[frameIndex];
    frameIndex = (frameIndex + 1) % waveFrames.length;
  }, 300);
}

document.addEventListener("DOMContentLoaded", animateFrequencyWave);



