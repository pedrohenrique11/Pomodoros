// Variaveis
const startButton = document.querySelector('#startButton')
const stopButton = document.querySelector('#stopButton')
const secondsDisplay = document.querySelector('#seconds')
const minutesDisplay = document.querySelector('#minutes')
const seconds = parseInt(secondsDisplay.textContent)
const minutes = parseInt(minutesDisplay.textContent)


// Objetos


// Eventos
startButton.addEventListener('click', () => {
    const seconds = parseInt(secondsDisplay.textContent)
    const minutes = parseInt(minutesDisplay.textContent)
    let duration = (minutes * 60) + seconds;

    startCount(duration, seconds, minutes)
})

// funçoes
function resetDisplay() {
    secondsDisplay.textContent = seconds < 10 ? '0' + minutes : minutes;
    minutesDisplay.textContent = minutes < 10 ? '0' + seconds : seconds;
}

function startCount(duration, seconds, minutes) {

    let countDown = setTimeout( () => {
        minutes = Math.floor(duration / 60);
        seconds = Math.floor(duration % 60);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        secondsDisplay.textContent = seconds
        minutesDisplay.textContent = minutes

        duration--;
        
        if(duration >= 0 ) {
            startCount(duration, seconds, minutes)
        }
        if(duration < 0) {
            resetDisplay()
        }
    }, 1000)
}