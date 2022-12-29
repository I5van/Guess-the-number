function RandomNumber(start, end) {
    let randomInt = start + Math.random() * (end - start + 1)
    return Math.floor(randomInt)


}
function ClearContent(){
    less.style.display="none"
    lose.style.display="none"
    correctMassage.style.display="none"
    more.style.display="none"
    incorrect.style.display="none"
}
function isNumber (s){
    let correctNumber = parseInt(s)
    if(isNaN(correctNumber)){
        return false
    }
    else{
        return true
    }
}
function buttonClick(){
    ClearContent()
   if(!isNumber(inputNumber.value)){
    incorrect.style.display="block"
    return
   }
    console.log("click")
    let value = Number(inputNumber.value)
    console.log(`${value}`)
    if(n==value){
        correctMassage.style.display="block"
    }
    if(n>value){
        more.style.display="block"
    }
    if(n<value){
        less.style.display="block"
    }
   
    attempts=attempts-1
    numberAttempts.innerHTML=`Число попыток: ${attempts}`
    if(attempts==0){
        ClearContent()
        lose.style.display = "block"
        button.onclick=null
        console.log("Вы проиграли")
     }
}


let numberAttempts = document.querySelector("#attempts")
let button = document.querySelector(".block-button")
let inputNumber = document.querySelector("#form")
let correctMassage = document.querySelector(".correct")
let less = document.querySelector(".less")
let more = document.querySelector(".more")
let lose = document.querySelector(".lose")
let incorrect=document.querySelector(".incorrect")
let n = RandomNumber(0, 10)
console.log(`${n}`)
let attempts = 5 


button.onclick=buttonClick

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
// var subtractProductAndSum = function(n) {
//     n=n.toString()
//     let plus = 0
//     let sum = 0
//     let dif = sum - plus
//     for(let i = 0;i<n.length; i++){
//          let sum = sum*n[i]
//          let plus = sum+n[i]      

//     }
//     return dif 
// }
// let n = prompt("Введите число")
// var isThree = function(n) {
//     for(let i=0;i<=n;i++){
//         if(k%i==0){
//             i=i+1
//         }
//         else {
//             i=i
//         }
       
//     }
//     if(i==3){
//         return true;
//     }
//     else{
//         return false;
//     }
// };
