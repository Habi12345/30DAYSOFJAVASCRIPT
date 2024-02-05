//import{contries} from './contries.js'
//import {web_techs} from './web_techs.js'

//Declare an empty array;
let emptyArray = [];

//Declare an array with more than 5 number of elements
let numbers = [1,2,3,4,5,6];

//Find the length of your array
console.log("Length: " + numbers.length);

//Get the first item, the middle item and the last item of the array
console.log("First Item: "+numbers[0]);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['Array', 'Strings', 'Bolean', 'Number', 'Null']
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Print the array using console.log()
console.log(itCompanies)

//Print the number of companies in the array
console.log('Number of Companies: '+ itCompanies[0].split)

//Print the first company, middle and last company
console.log(itCompanies[0])

//Change each company name to uppercase one by one and print them out
console.log(itCompanies.toUpperCase)

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join())

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let index = itCompanies.indexOf('Amazon')
console.log(index)
index === -5 ? console.log('this those not exist') : console.log('This exist')

//Sort the array using sort() method
console.log(itCompanies.sort())

//Reverse the array using reverse() method
console.log(itCompanies.reverse())

//Slice out the first 3 companies from the array
console.log(itCompanies.slice(3, 3, 7, 8))

//const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd + backEnd
console.log(fullStack)

//
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())
