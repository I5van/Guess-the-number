function RandomNumber(start, end) {
    let randomInt = start + Math.random() * (end - start + 1)
    return Math.floor(randomInt)


}
console.log(RandomNumber(0, 100))
let NumberAttempts = document.querySelector("#p")
let n = RandomNumber(0, 100)
let i = 0
while (true) {
    let guessNumber = prompt("Попробуйте угадать число от 0 до 100")
    if (n > guessNumber) {
        console.log("загаданное число больше")
    }
    else if (n < guessNumber) {
        console.log("загаданное число меньше")
    }
    else if (n == guessNumber) {
        console.log("Вы угадали число")
        break
    }
    NumberAttempts.innerHTML.style="Колличестов попыток:"+ i
}