let alarmTime = null;
let alarmTimeout = null;
const alarmInput = document.getElementById('alarm');
const setButton = document.getElementById('set');
const stopButton = document.getElementById('stop');
const alarmSound = document.getElementById('audio');

setButton.addEventListener('click', () => {
    const selectedTime = alarmInput.value;
    
    if (!selectedTime) {
        alert('Please set a valid alarm time.');
        return;
    }

    alarmTime = selectedTime;
    checkAlarm(); // Start checking immediately
    alert(`Alarm set for ${alarmTime}`);
});

stopButton.addEventListener('click', () => {
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alarmTimeout = null;
    }
    alarmTime = null;
    alarmSound.pause();
    alarmSound.currentTime = 0;
    alert('Alarm stopped');
});

function checkAlarm() {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0, 5); // Format: HH:MM

    if (alarmTime === currentTime) {
        audio.muted = false;
        audio.play().catch(error => {
            console.error("Audio playback failed:", error);
            alert("Audio playback blocked! Please allow autoplay.");
        });
        alarmTimeout = setTimeout(checkAlarm, 60000); // Repeat every minute
    } else {
        setTimeout(checkAlarm, 1000); // Check every second
    }
}

// Start checking the alarm continuously
setInterval(checkAlarm, 1000);
