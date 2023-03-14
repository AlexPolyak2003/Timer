const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
// const miliseconds = document.querySelector('.miliseconds')

const startButton = document.querySelector('.btn1')
const pauseButton = document.querySelector('.btn2')
const stopButton = document.querySelector('.btn3')


let hour = 00,
    minute = 00,
    second = 00,
    // milisecond = 00,

    interval

startButton.addEventListener('click', ()=>{
    clearInterval(interval)
    interval = setInterval(startTimer, 1000)
})

pauseButton.addEventListener('click', () =>{
    clearInterval(interval)
})

stopButton.addEventListener('click', () =>{
    clearInterval(interval)
    hour = 00
    minute = 00
    second = 00
    hours.innerText = '00'
    minutes.innerText = '00'
    seconds.innerText = '00'
})



function startTimer(){

    // miliseconds

    // milisecond++
    // if (milisecond < 9) {
    //     miliseconds.innerText = '0' + milisecond
    // }

    // if (milisecond > 9){
    //     miliseconds.innerText = milisecond
    // }

    // if (milisecond > 99){
    //     second++
    //     seconds.innerText = '0' + second
    //     milisecond = 0
    //     miliseconds.innerText = '0' + milisecond
    // }

    // seconds
    second++
    if (second < 10){
        seconds.innerText = '0' + second
        
    }

    if(second > 9){
        seconds.innerText = second
       
    }

    if(second > 59){
        minute++
        minutes.innerText = '0' + minute
        second = 0
        seconds.innerText = '0' + second
        
    }

    // minutes

    if (minute < 10){
        minutes.innerText = '0' + minute
    }

    if (minute > 9){
        minutes.innerText = minute
    }

    if (minute > 59){
        hour++
        hours.innerText = '0' + hour
        minute = 0
        minutes.innerText = '0' + minute
    }

    // hours

    if (hour > 9){
        hours.innerText = hour
    }
    
}