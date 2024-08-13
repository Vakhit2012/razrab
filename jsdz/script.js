let myName = "Vakhit"
function greet(){
  alert(`Hello , ${myName}`)
}
greet()

function celsiusToFahrenheit(tc){
  let tf = (tc * 9 / 5) + 32;  
  return tf;
}
let x = prompt('какая температура?')
alert(`Тумпература ${x} С в Фаренгейтах = ` + celsiusToFahrenheit(x))


function calculateFallDistance(t) {
  const g =9.8 ;
  let d = (1/2) * g * t**2
  return d;
}
let t = prompt('падение в секундах ')
let d = calculateFallDistance(t)
alert ('Пройденное растояние' + d)

function calculateAverage(a,b,c){
  let result = (a + b + c ) / 3; 
  return result
}
console.log(calculateAverage(12,33,44))


function concatStrings(s1,s2) {
return `Первое слово - ${s1}, Второе слово - ${s2}`;
}
let newStrig = concatStrings(
  prompt('первая строка'), 
  prompt('Вторая строка'));
alert(newStrig)