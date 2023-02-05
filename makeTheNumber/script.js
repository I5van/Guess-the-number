let button = document.querySelector(".popup__button")
let popup = document.querySelector(".popup")
let timerId
let lessButton = document.querySelector("#less")
let moreButton = document.querySelector("#more")
let rightNumberButton = document.querySelector("#true")
let right = 100
let left = 0
let i = 0
let NumberOfAttempts=document.querySelector(".attempts-p")
function less() {
    if(timerId != null){
        return
    }
    if(left==right || Math.abs(left-right)==1){
        counter.innerHTML="Такого быть не может, перезапустите игру!"
        return
    }

    right = Math.floor((left + right) / 2)
    updateAttempts()
    animateNumbers()
}
function more() {
    if(timerId != null){
        return
    }
    if(left==right || Math.abs(left-right)==1){
        counter.innerHTML="Такого быть не может, перезапустите игру!"
        counter.style.fontSize = "20px"
        
        return
    }
    left = Math.floor((left + right) / 2)
    updateAttempts()
    animateNumbers()
 

}
function rightNumber() {
    
    counter.innerHTML = "Ура!!"
   
}

let counter = document.querySelector(".counter")
function RandomNumber(start, end) {
    let randomInt = start + Math.random() * (end - start + 1)
    return Math.floor(randomInt)



}
function timer() {
    counter.innerHTML = RandomNumber(1, 100)

}
function animateNumbers() {
    timerId = setInterval(timer, 100)
    let timerEnd = setTimeout(() => {
        clearInterval(timerId)
        timerId=null
        counter.innerHTML = Math.floor((left + right) / 2)
    }, 2000)
}
function showPopup() {
    popup.style.display = "flex"
    animateNumbers()

}
function closePopup() {
    popup.style.display = "none"
    clearInterval(timerId)
}
function updateAttempts(){
    i = i+1
    NumberOfAttempts.innerHTML="Колличестов попыток:"+i
}
button.addEventListener("click", showPopup)
let closed = document.querySelector(".close")
closed.addEventListener("click", closePopup)
lessButton.addEventListener("click", less)
moreButton.addEventListener("click", more)
rightNumberButton.addEventListener("click", rightNumber)
