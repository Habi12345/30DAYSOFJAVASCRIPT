//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of Javascript';
//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase);

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase);

//Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(2, 21));

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.slice(0, 2));

//Check if the string contains a word Script using includes() method
console.log(challenge.includes('script'));

//Split the string into an array using split() method
console.log(challenge.split(' '));

//Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(''));

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split( ));

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(challenge.replace('Javascript', 'Python'));

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt([15]));

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('j'));

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a'));

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(' 30 Days Of JavaScript '.trim());

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30'));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Javascript'));

//Use match() method to find all the a’s in 30 Days Of JavaScript
let pattern = /a/gi
console.log(challenge.match(pattern));

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let emPty = ''
console.log(emPty.concat('30 Days of', ' Javascript'))

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2))

/*Using console.log() print out the following statement:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."*/
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same with charity you give love, so don't just give money but reach out your hand instead.")

//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let toCheck = '10';
console.log(+toCheck == 10);

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num = '9.81'
let numFloat = parseInt(num)
console.log(numFloat +1 == 10);

//Check if 'on' is found in both python and jargon
console.log('python'.includes('on'));
console.log('jargon'.includes('on'));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon'.includes('jargon'));

//Generate a random number between 0 and 100 inclusively.
let randomNumber = Math.random()
let generateRandomNum = randomNumber * 101
console.log(Math.floor(generateRandomNum))

//Generate a random number between 50 and 100 inclusively.
let randomNum = Math.random() * 51
let genRandomNum = randomNum + 50
console.log(Math.floor(genRandomNum))

//Generate a random number between 0 and 255 inclusively.
let randomNumb = Math.random()
let generateRandom = randomNumber * 256
console.log(Math.floor(generateRandom))

//Access the 'JavaScript' string characters using a random number.
let subject = 'Javascript'
let randomIndex = Math.floor(Math.random() * subject.length)
console.log(randomIndex)

/*Use console.log() and escape characters to print the following pattern. 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log('You cannot end a sentence with because because because is a conjunction');

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let match = 'love is the best thing in this world. Some found their love and some are still looking for their love.'
let ptn = /love/g
console.log(match.match(ptn));

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let test = 'You cannot end a sentence with because because because is a conjunction';
let bcs = /because/g
console.log(test.match(bcs));

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//'%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const sentence = 'I am a teacher, and I love teaching;. There is nothing; as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? This 30DaysOfJavaScript is also the result of love of teaching'
let fnd = /teaching/g
console.log(sentence.match(fnd))

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const calc = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
console.log(calc.match(/\d+/g))