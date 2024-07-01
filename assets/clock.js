function updateClockAndOS() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const userAgent = window.navigator.userAgent;
    let os = "Unknown OS";
    let osIcon = "";
    if (userAgent.indexOf("Win") !== -1) {
        os = "Windows";
        osIcon = "⊞"; // Windows emoji
    } else if (userAgent.indexOf("Mac") !== -1) {
        os = "MacOS/iOS";
        osIcon = ""; // MacOS emoji
    } else if (userAgent.indexOf("Android") !== -1) {
        os = "Android";
        osIcon = "🤖"; // Android emoji
    } else if (userAgent.indexOf("X11") !== -1 || userAgent.indexOf("Linux") !== -1) {
        os = "Linux/UNIX";
        osIcon = "🐧"; // Linux/UNIX emoji
    }
    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = `${timeString} | ${osIcon} ${os}`;
}

setInterval(updateClockAndOS, 1000);
updateClockAndOS(); // initial call to display clock and OS immediately
