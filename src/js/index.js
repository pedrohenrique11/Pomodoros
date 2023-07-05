// Variaveis
const startButton = document.querySelector('#startButton')
const stopButton = document.querySelector('#stopButton')
const secondsDisplay = document.querySelector('#seconds')
const minutesDisplay = document.querySelector('#minutes')

const seconds = parseInt(secondsDisplay.textContent)
const minutes = parseInt(minutesDisplay.textContent)

let countDown;

// Eventos
startButton.addEventListener('click', () => {
    const seconds = parseInt(secondsDisplay.textContent)
    const minutes = parseInt(minutesDisplay.textContent)
    let duration = (minutes * 60) + seconds;

    startCount(duration, seconds, minutes)
    toggleButtons()
})
stopButton.addEventListener('click', stopCount)

// funçoes
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
        else {resetDisplay()}
    }, 1000)
}

function toggleButtons(){
    startButton.classList.toggle('hide')
    stopButton.classList.toggle('hide')
}