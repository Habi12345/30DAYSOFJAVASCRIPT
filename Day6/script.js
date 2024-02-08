//Iterate 0 to 10 using for loop, do the same using while and do while loop
/*for(let i = 0; i <= 10; i++){
    console.log(i)
}
let i = 0;
do{
    console.log(i)

    i++
}while(i <= 10)*/

//Iterate 0 to n using for loop

//let n = Math.floor(Math.random( ))
//for (let i = 0; i <= n; i++){
  //  console.log(i)
//}

//Use loop to print the following pattern:
/*0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/

for (i = 0; i <= 10; i++){
    console.log(`${i} * ${1} = ${i * i}`)
}

//Using loop print the following pattern
/* i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000*/
 for(i = 0; i <= 10; i++){
    console.log(`${i}  ${i * i}  ${i * i * i}`)
 }
 //Use for loop to iterate from 0 to 100 and print the sum of all numbers.
 let sum = 0
 for(i = 0; i <= 100; i++){
    sum += i;
 }
 console.log(sum)

 //Develop a small script which generate array of 5 random numbers
 function generateRandomNumbers(){
    let randomNumbers = []
    for(i = 0; i <= 5; i++){
        randomNumbers.push(Math.floor(Math.random() * 100))
    }
    return randomNumbers;
 }

console.log(generateRandomNumbers())

//Develop a small script which generate a six characters random id:
function generateRandomId(){
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@$#'
    let id = '';
    for (i = 0; i <= 6; i++){
        id += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return id
}
console.log(generateRandomId())

//Write a script which generates a random hexadecimal number.
//Using the above countries array, create the following new array.
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newArry = []
for (const country of countries){
    newArry.push(country.toLowerCase())
}
console.log(newArry)