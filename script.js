let startbtn = document.querySelector("#start")
let resetbtn = document.querySelector("#reset")
let timer = document.querySelector(".timer")


let sec = 0;
let min = 0
let hr = 0


let leadingSec = 0
let leadingMin = 0
let leadingHr = 0

let timerInterval = null;
let timerStatus = "Stopped"

function stopWatch() {
   
    sec++

    if(sec/60 === 1){
        sec = 0
        min++

        if(min/60 === 1){
            min = 0
            hr++
        }
    }

    if(sec < 10) {
        leadingSec = `0${sec.toString()}`
    }else{
        leadingSec = sec
    }

    if(hr < 10) {
        leadingHr = `0${hr.toString()}`
    }else{
        leadingHr = hr
    }
    if(min<10) {
        leadingMin = `0${min.toString()}`
    }else{
        leadingMin= min
    }

    let displaytimer = document.querySelector('.timer').textContent = `${leadingHr} : ${leadingMin} : ${leadingSec}`
}


startbtn.addEventListener("click" , ()=>{
    if(timerStatus === "Stopped"){
        timerInterval = window.setInterval(stopWatch, 1000)
        startbtn.textContent = "Pause"
        timerStatus ="started"
    } else{
        window.clearInterval(timerInterval)
        startbtn.textContent ="Start"
        timerStatus="Stopped"
    }
})

resetbtn.addEventListener('click' , ()=>{
    window.clearInterval(timerInterval)
    sec= 0
    min = 0
    hr = 0
    timer.textContent= "Start Timer"
})