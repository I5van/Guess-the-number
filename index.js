function RandomNumber(start, end) {
    let randomInt = start + Math.random() * (end - start + 1)
    return Math.floor(randomInt)


}
// console.log(RandomNumber(0, 100))
// let NumberAttempts = document.querySelector("#p")
// let n = RandomNumber(0, 100)
// let i = 0
// let attempts=0
// while (true) {
//     let guessNumber = prompt("Попробуйте угадать число от 0 до 100")
//     if (n > guessNumber) {
//         console.log("загаданное число больше")
//     }
//     else if (n < guessNumber) {
//         console.log("загаданное число меньше")
//     }
//     else if (n == guessNumber) {
//         console.log("Вы угадали число")
//         break
//     }
// i++
// attempts=attempts+1

//     NumberAttempts.innerHTML.style="Колличестов попыток:"+ i
// }
// let x = 1222;
// x = x.toString()
// let Output = false;
// for(let i = 0; i<x.length/2; i++){
//     if(x[i]==x[x.length-1-i]){
//         Output=true
//     }
//     else{
//         Output = false
//         break
//     }
// }
// console.log (`${Output}`)

// var convertTemperature = function(celsius) {
  
//     let kelvin = celsius + 273.15
//     let faren = celsius * 1.8 + 32
//      return [kelvin,faren]
    

// };
//     let a = convertTemperature(36.5)
// console.log(a)
// var isCorrectNumber= function (n,multiply){
//     if (multiply % 2 ==0 && multiply % n == 0){
//         return true
//     }
//     else{
//         return false
//     }
// }
// var smallestEvenMultiple = function(n) {
//     for(let i = n; i<=n*2;i++){
//         if(isCorrectNumber(n,i)==true){

//             return i 
//         }
//     }
// };
// let a = smallestEvenMultiple(6)
// console.log(a)
// let matches = 0
// let n = prompt("Введите число команд")
// var numberOfMatches = function(n) {
//    for(let i =0;i<n&& n!==1; i++)
//     if(n%2==0){
//         matches = matches+ n/2
//         n= n/2
//     }
//     else{
//         matches= matches + ((n-1)/2)
//         n = n/2+1
//     }
    
//         return matches
    
// };
// var numberOfSteps = function(num) {
    
//     for(let i = 0;num>i&& num!=0;i++){
//         if(num%2 == 0){
//             num = num/2
//         }
//         else{
//             num = num-1
//         }
       
//     }
//     return i
// };
var subtractProductAndSum = function(n) {
    n=n.toString()
    let plus = 0
    let sum = 0
    let dif = sum - plus
    for(let i = 0;i<n.length; i++){
         let sum = sum*n[i]
         let plus = sum+n[i]      

    }
    return dif 
}