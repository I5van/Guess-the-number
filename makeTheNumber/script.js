let button=document.querySelector(".popup__button")
let popup = document.querySelector(".popup")
function showPopup(){
    popup.style.display ="flex"

}
button.addEventListener("click",showPopup)
let closed = document.querySelector(".close")
closed.onclick.popup.style.display="none"