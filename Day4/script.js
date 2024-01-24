/*Get user input using prompt(“Enter your age:”). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.*/

const currentYear = new Date().getFullYear();
//const birthYear = prompt("What year were you born??");

/*if (birthYear && !isNaN(birthYear)){
    const yearOld = currentYear - parseInt(birthYear, 10)

    if(yearOld >= 18) {
        //alert("You are old enough to drive!");
    } else{
        const yearsTowait = 18 - yearOld;
       // alert(`You are not old enough to drive. please wait ${yearsTowait} more years`)
    }
}else{
    //alert("Invalid input. Please enter a valid year")
}*/

/*Compare the values of myAge and yourAge using if … else. 
 on the comparison and log the result to console stating who is older (me or you). 
Use prompt(“Enter your age:”) to get the age as input.*/

/*let myAge = prompt('Enter your age')
//let yourAge = prompt("Enter my age")
let yearAv = yourAge - myAge;
let yourYearAv = myAge - yourAge;
if (myAge < yourAge){
    //alert(`I am ${yearAv} year older than you!!`)
}else if(myAge == yourAge){
    //alert("We are age mates")
}else{
   // alert(`You're ${yourYearAv} year older than me`)
}*/

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
/*using if else
ternary operator.*/

let a = 4
let b = 3

if (a > b) {
    console.log('a is greater than b')
}else{
    console.log('a is less than b')
}

/*Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F*/

function calculateGrade(score) {
    if (score >= 80 && score <= 100){
        return 'A'
    }else if (score >= 70 && score < 80){
        return 'B'
    }else if (score >=60 && score < 70){
        return 'C'
    }else if (score >= 50 && score < 60){
        return 'D'
    }else if (score >= 0 && score < 50){
        return 'F'
    }else{
        return 'Invalid score'
    }
}

let studentScore = prompt("Enter your score");
let studentGrade = calculateGrade(studentScore);
//console.log(`Student Grade ${studentGrade}`)

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

function checkSeason(season){
    if(['September', 'October', 'November'].includes(season)){
        return 'Autumn'
    }else if(['December', 'January', 'February'].includes(season)){
        return 'Winter'
    }else if(['March', 'April', 'May'].includes(season)){
        return 'Spring'
    }else if(['June', 'July', 'August'].includes(season)){
        return 'Summer'
    }else{
        return 'Invalid Input'
    }
}

//let month = prompt("Enter Month")
let getMonth = checkSeason(month)
//console.log(`We are in ${getMonth}`)

/*Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.*/

/*Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.*/

//Write a program which tells the number of days in a month, now consider leap year.
//Wil work on this later
