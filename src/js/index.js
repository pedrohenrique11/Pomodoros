const startButton = document.querySelector('#startButton');
const stopButton = document.querySelector('#stopButton');
const pomodoroButton = document.querySelector('#pomodoroButton');
const breakButton = document.querySelector('#breakButton');
const longBreakButton = document.querySelector('#longBreakButton');
const soundOnButton = document.querySelector('#soundOnButton');
const soundOffButton = document.querySelector('#soundOffButton');
const addTimeButton = document.querySelector('#addTimeButton');
const removeTimeButton = document.querySelector('#removeTimeButton');

const oneNightInTokyo = new Audio('src/music/ONE NIGHT IN ＴＯＫＹＯ (320 kbps).mp3');

const secondsDisplay = document.querySelector('#seconds');
const minutesDisplay = document.querySelector('#minutes');

let countDown;

startButton.addEventListener('click', () => {
    const seconds = parseInt(secondsDisplay.textContent);
    const minutes = parseInt(minutesDisplay.textContent);
    let duration = (minutes * 60) + seconds;
    startCount(duration);
    toggleButtons();
});

stopButton.addEventListener('click', stopCount);
pomodoroButton.addEventListener('click', () => resetTimer(25, 0));
breakButton.addEventListener('click', () => resetTimer(5, 0));
longBreakButton.addEventListener('click', () => resetTimer(15, 0));
soundOnButton.addEventListener('click', () => {
    oneNightInTokyo.play();
    oneNightInTokyo.volume = 0.2;
    toggleSoundButtons();
});
soundOffButton.addEventListener('click', () => {
    oneNightInTokyo.pause();
    toggleSoundButtons();
});
addTimeButton.addEventListener('click', () => adjustTime(1));
removeTimeButton.addEventListener('click', () => adjustTime(-1));

function resetTimer(minutes, seconds) {
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
    clearInterval(countDown);
    toggleButtons();
}

function adjustTime(time) {
    let minutes = parseInt(minutesDisplay.textContent) + time;
    if (minutes < 1) return;
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    duration = minutes * 60 + parseInt(secondsDisplay.textContent);
    clearInterval(countDown);
    toggleButtons();
}

function stopCount() {
    clearInterval(countDown);
    toggleButtons();
}

function startCount(duration) {
    let remainingTime = duration;

    const updateDisplay = () => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = Math.floor(remainingTime % 60);

        secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
        minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;

        if (remainingTime > 0) {
            remainingTime--;
        } else {
            clearInterval(countDown);
            resetTimer(0, 0);
        }
    };

    updateDisplay();

    countDown = setInterval(updateDisplay, 1000);
}

function toggleButtons() {
    startButton.classList.toggle('hide');
    stopButton.classList.toggle('hide');
}

function toggleSoundButtons() {
    soundOnButton.classList.toggle('hide');
    soundOffButton.classList.toggle('hide');
}