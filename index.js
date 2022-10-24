function addition(num1, num2) {
    return num1 + num2 
}

console.log(addition(3,5));

function hoursIntoSeconds (hours) {
    return hours * 60 * 60
}

console.log(hoursIntoSeconds(2))

function calcParimeter(length, width) {
    return 2 * length + 2 * width;
}

console.log(calcParimeter(6,7))

function areaOfTriangle(base, height) {
    return .5 * base * height;
}

console.log(areaOfTriangle(10, 10))

function appendFrontend(string) {
    return string + 'Frontend';
}

console.log(appendFrontend('Banana'))

function greaterThan100(num1, num2) {
 return num1 + num2 >= 100;
  
}

console.log(greaterThan100(50, 49))

function lessThanOrEqualToZero(num1) {
    return num1 <=0;
}

console.log(lessThanOrEqualToZero(-2))

function oppositeBoolean(bool) {
    return !bool;
   }
   
console.log(oppositeBoolean(true))

function isNotZero(num) {
    return num !== 0 
}

console.log(isNotZero(0))

function calcRemainder(num1, num2) {
    return num1 % num2;
}

console.log(calcRemainder(4, 2))

function isOdd(num) {
 return num % 2 !== 0  
 return false
}

console.log(isOdd(6))

function booleanInteger(num) {
 return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(2))

function isLoggedInAndSubscribed(loggedIn, subscribed) {
   return loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED' 
}
   


console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))

function isLoggedInAndSubscribed(loggedIn, subscribed) {
   return loggedIn === 'LOGGED_IN' || subscribed === 'SUBSCRIBED' 
}
   


console.log(isLoggedInAndSubscribed('!LOGGED_IN', '!SUBSCRIBED'))









