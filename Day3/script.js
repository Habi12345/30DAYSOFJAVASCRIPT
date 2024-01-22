//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = 'Habib'
const lastName = 'Abdulkareem'
const country = ' Nigeria'
const city = 'Okene'
const age = 19
const isMarried = false
const year = 2024
console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isMarried)

//Check if type of '10' is equal to 10
let chck = '10'
console.log('10' === 10)

//Check if parseInt('9.8') is equal to 10
let chck2 = '9.8'
let num = parseInt(chck2)
console.log(num == 10)

/*Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.*/
//Already done that in line 14 to 20

//Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length > 'jargon'.length)

/*Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.*/

let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now)
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getTime()) 

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/*Enter base: 20
Enter height: 10
The area of the triangle is 100*/
//let txt = prompt('Enter Base')
//let txt2 = prompt('Enter Height')
//let total = alert( Number(txt * txt2) * 100)
//console.log(total)

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
//let hrs = prompt('Enter the Hours')
//let hrs2 = prompt('Enter the Rate')
//sumUp = alert(hrs * hrs2)
//console.log(sumUp)  

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive 
//if not tell the user to wait a certain amount of years.

const currentYear = new Date().getFullYear();
const birthYear = prompt("What year were you born??");

if (birthYear && !isNaN(birthYear)){
    const yearOld = currentYear - parseInt(birthYear, 10)

    if(yearOld >= 18) {
        alert("You are old enough to drive!");
    } else{
        const yearsTowait = 18 - yearOld;
        alert(`You are not old enough to drive. please wait ${yearsTowait} more years`)
    }
}else{
    alert("Invalid input. Please enter a valid year")
}

//Write a script that prompt the user to enter number of years. 
//Calculate the number of seconds a person can live. Assume some one lives just hundred years

let years = prompt("Enter the number of years")
let secondsInYear = 365.25 * 24 * 60 * 60
let totalSeconds = years * secondsInYear

console.log(`A person can live approximatly ${totalSeconds} seconds in ${years} years`)

