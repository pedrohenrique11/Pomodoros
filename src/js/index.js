const startButton = document.querySelector('#startButton')
const stopButton = document.querySelector('#stopButton')
const number = document.querySelector('h1')

startButton.addEventListener('click', startCount)


function updateDisplay() {
    number.textContent = 76
}

function startCount() {
    const countDown = setTimeout( function() {
        let seconds = Number(number.textContent)

        if(seconds > 0) {
            seconds--
    
            number.textContent = seconds
    
            startCount()
        }
        else  console.log('cabouu')
    }, 1000
    )
}