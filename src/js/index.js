const startButton = document.querySelector('#startButton')
const stopButton = document.querySelector('#stopButton')
const pomodoroButton = document.querySelector('#pomodoroButton')
const breakButton = document.querySelector('#breakButton')
const longBreakButton = document.querySelector('#longBreakButton')
const soundOnButton = document.querySelector('#soundOnButton')
const soundOffButton = document.querySelector('#soundOffButton')
const addTimeButton = document.querySelector('#addTimeButton')
const removeTimeButton = document.querySelector('#removeTimeButton')

const oneNightInTokyo = new Audio('src/music/ONE NIGHT IN ＴＯＫＹＯ (320 kbps).mp3')

const secondsDisplay = document.querySelector('#seconds')
const minutesDisplay = document.querySelector('#minutes')

const seconds = parseInt(secondsDisplay.textContent)
const minutes = parseInt(minutesDisplay.textContent)

let countDown;
let duration;

startButton.addEventListener('click', () => {
    const seconds = parseInt(secondsDisplay.textContent)
    const minutes = parseInt(minutesDisplay.textContent)
    let duration = (minutes * 60) + seconds;

    startCount(duration, seconds, minutes)
    toggleButtons()
})
stopButton.addEventListener('click', stopCount)
pomodoroButton.addEventListener('click', () => {
    minutesDisplay.textContent = 25;
    secondsDisplay.textContent = '00';

    clearTimeout(countDown)
    startButton.classList.remove('hide')
    stopButton.classList.add('hide')
})
breakButton.addEventListener('click', () => {
    minutesDisplay.textContent = '05';
    secondsDisplay.textContent = '00';
    
    clearTimeout(countDown)
    startButton.classList.remove('hide')
    stopButton.classList.add('hide')
})
longBreakButton.addEventListener('click', () => {
    minutesDisplay.textContent = 15;
    secondsDisplay.textContent = '00';

    clearTimeout(countDown)
    startButton.classList.remove('hide')
    stopButton.classList.add('hide')
})
soundOnButton.addEventListener('click', () => {
    oneNightInTokyo.play()
    oneNightInTokyo.volume = 0.2;
    toggleSoundButtons()
})
soundOffButton.addEventListener('click', () => {
    oneNightInTokyo.pause()
    toggleSoundButtons()
})
addTimeButton.addEventListener('click',() => {
    const minutes = parseInt(minutesDisplay.textContent);
    const seconds = parseInt(secondsDisplay.textContent);
    minutesDisplay.textContent = minutes + 1;
    duration = (minutes + 1) * 60 + seconds;
    clearTimeout(countDown)
    startButton.classList.remove('hide')
    stopButton.classList.add('hide')
})
removeTimeButton.addEventListener('click', () => {
    const minutes = parseInt(minutesDisplay.textContent);
    const seconds = parseInt(secondsDisplay.textContent);
    if (minutes > 1) {
        minutesDisplay.textContent = minutes - 1;
        duration = (minutes - 1) * 60 + seconds;
    } 
    clearTimeout(countDown)
    startButton.classList.remove('hide')
    stopButton.classList.add('hide')

})



function resetDisplay() {
    minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
    secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
}

function stopCount() {
    clearTimeout(countDown)
    toggleButtons()
}

function startCount(duration, seconds, minutes) {

    countDown = setTimeout( () => {
        minutes = Math.floor(duration / 60);
        seconds = Math.floor(duration % 60);
        
        secondsDisplay.textContent = seconds < 10 ? '0' + seconds : seconds;
        minutesDisplay.textContent = minutes < 10 ? '0' + minutes : minutes;
        
        duration--;
        
        if(duration >= 0 ) {
            startCount(duration, seconds, minutes)
        }
        else {
            resetDisplay()
            toggleButtons()
        }
    }, 1000)
}

function toggleButtons(){
    startButton.classList.toggle('hide')
    stopButton.classList.toggle('hide')
}
function toggleSoundButtons() {
    soundOnButton.classList.toggle('hide')
    soundOffButton.classList.toggle('hide')
}