// BUILT-IN JAVASCRIPT METHODS
// console.log() , Math.random() , prompt() 
/*let s="Hello";
alert(
s.concat(" there!")
.toUpperCase()
.replace("THERE", "you")
.concat(" You're amazing!")
)*/

//Global methods
/*let x=10;
alert(isNaN(x));
    //Decoding and encoding URIs (uniform resource identifiers)
    // decodeUri() and encodeUri()
    let uri1 = "https://www.example.com/submit?name=maaike van putten";
    let encoded_uri1 = encodeURI(uri1);
    console.log("Encoded:", encoded_uri1);
    let decoded_uri1 = decodeURI(encoded_uri1);
    console.log("Decoded:", decoded_uri1);
    // decodeUriComponent() and encodeUriComponent()
    let uri2 = "https://www.example.com/submit?name=maaike van putten";
    let encoded_uri2 = encodeURIComponent(uri2);
    console.log("Encoded:", encoded_uri2);
    let decoded_uri2 = decodeURIComponent(encoded_uri2);
    console.log("Decoded:", decoded_uri2);
    // Encoding with escape() and unescape()*/


//Practice 8.1: create a web url and encode the uri
/*const secretMes1 = "How's%20it%20going%3F";
const secretMes2 = "How's it going?";
const decodedComp = decodeURIComponent(secretMes1);
alert(decodedComp);
const encodedComp = encodeURIComponent(secretMes2);
alert(encodedComp);
const uri = "http://www.basescripts.com?=Hello World";
const encoded = encodeURI(uri);
alert(encoded);*/

//parsing numbers
/*let str_int = "6";
let int_int = parseInt(str_int); //convert a string into a number
alert("Type of "+ int_int+" is "+typeof int_int);

let str_float = "7.6";
let float_float = parseFloat(str_float); //convert a string into a float
alert("Type of "+ float_float+ " is "+ typeof float_float);*/

// Executing JavaScript with eval(): It is a method for supporting code injection. Avoid using this 'cause of security
//Array methods
/*
let arr=[true, 2,"fruit", 3, 4, 5, 6.2];
arr.shift();
arr.push(6);
// arr.forEach(alert(arr));

    //Filtering an array
    // arr.filter(); //return a boolean value

    // Checking a condition for all elements
    // arr.every(); // return true if all the elements in the arary are true, and return false otherwise

    // Replacing part of an array with another part of the array
    // arr.copyWithin();

    //Mapping the values of an array: change all the values in the array
    let arr1 = [1, 2, 3, 4];
    alert(arr1.map(x => x+1));

    //Finding the last occurrence in an array
    let bb = ["so", "bye", "bye", "love"];
    alert(bb.indexOf("bye")); //or lastIndexOf("bye")*/

// Practice exercise 8.2: Removes duplicates from an array using filter() and indexOf() methods
/*let duplicated_array = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Arnold", "Dupont", "Dupont", "Duroi", "Joanne"];
let filter_array = duplicated_array.filter((value, index, array) => {
    alert(value + index + array.indexOf(value));
    return array.indexOf(value) === index;
} )
alert(filter_array);*/


// Practice exercise 8.3: using the array map() method to update an array's contents
/*const myArr = [1,4,5,6];
const myArr1 = myArr.map(ele => {
    return ele * 2;
});
alert(myArr1);
const myArr2 = myArr.map((ele)=> ele*2);
alert(myArr2);*/

// String methods
/*let s1 = "Hello ";
let s2 = "JavaScript, how are you?";
let result = s1.concat(s2);
alert(result+ " CONCAT");
let arr_result = result.split(" "); // convert the string into array
alert(arr_result+ " SPLIT space");
arr_result = result.split(","); // split into an array wherever you see a comma
alert(arr_result+ " SPLIT COMMA");
let arr_join = arr_result.join('-'); // join an array to a string
alert(arr_join+ " JOIN");
indexOf();
search();
lastIndexOf();
arr_result.charAt(2); // which element is at the position of index 2?

// creating substrings
slice(start, end);
replace(old, neww); //replace part of the string
replaceAll(old, neww);*/

//uppercase and lowercase
/*let str = "hello buddy, I am Aubin SIAHA and I learn JavaScript";
alert(str.toUpperCase());
alert(str.toLowerCase());
alert(str.replace("Aubin SIAHA", "AUBIN SIAHA"));
str.toLowerCase().startsWith("A"); //.toLowerCase() here is to take care because it is case sensitive, so converting first is a precaution*/


// Practice Exercise 8.4: create a function to capitalize the first letter of each word of a string ant the other in lowercase
/*const phrase =prompt("enter a phrase anyhow that you wanna capitalize the first word !!!") ;
function firstWordCapital(str) {
    str = str.toLowerCase();
    let tempArr=[];
    let words = str.split(" "); // convert the string to array
    let eachWordCapital = words.forEach(word => {
        let temp = word.slice(0, 1).toUpperCase() + word.slice(1)
        tempArr.push(temp);
    });    
    return tempArr.join(" ");
}
alert(firstWordCapital(phrase));*/

// Practice exercise 8.5: Using the replace() string method
/*let str="I Love JavaScript";
str = str.toLocaleLowerCase();
let vowels = ["a", "e", "i", "o", "u"];
// for(let i=0; i<vowels.length; i++){
//     alert(vowels[i]);
//     str=str.replaceAll(vowels[i], i);
// }
// alert(str);
vowels.forEach((letter,index) =>{
    alert(letter);
    str = str.replaceAll(letter,index);
});
alert(str);*/


// Number methods
/*let x = 34;
alert(isNaN(x));
alert(!isNaN(x));
alert(isFinite(x));
console.log(Number.isInteger(x));

let y = 1.23656; // Specifying a number of decimals
let newY = y.toFixed(2);
let newYY = y.toPrecision(4);
alert(newY);

// Math method
let highest = Math.max(2, 56, 12, 1, 233, 4); //maximum and minimum
let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(highest, lowest);

let result = Math.sqrt(64); // square root and power
console.log(result);
let result2 = Math.pow(5, 3);
console.log(result2);

let w = 6.78;
let t = 5.34;
console.log("w:", w, "becomes", Math.round(w)); //round number
console.log("t:", t, "becomes", Math.round(t));

Math.ceil(negativeX) //always rounding up a number
Math.floor(negativeX) //always rounding down a number (opposit of  Math.ceil)

let a = 2;
let exp = Math.exp(a); //exponent and logarithm
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);*/

// Date methods
/*let currentDateTime = new Date();
alert(currentDateTime);
let now2 = Date.now();
alert(now2); // This will log the current time, represented in seconds since January 1st 1970
alert(currentDateTime.toDateString());

let d = new Date();
alert("Day of week: "+ d.getDay());
alert("Day of month: "+ d.getDate());
alert("Month: "+ (d.getMonth()+1)); // +1 because Janary correspond to 0 and December correspond to 11
alert("Year: "+ d.getFullYear());
alert("Seconds: "+ d.getSeconds());
alert("Milliseconds: "+ d.getMilliseconds());
alert("Time: "+ d.getTime());
alert("date: "+d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear()+ "\nTime: "+d.getTime());

d.setFullYear(2010);
d.setMonth(9);
d.setDate(10);
d.setTime(1622889770682);
console.log(d);
    // Parsing dates
    let d1 = Date.parse("June 5, 2021");
    console.log(d1);
    // Converting a date to a string
    console.log(d.toDateString());
    console.log(d.toLocaleDateString());*/

// Practice exercise 8.6: Output the date with the full month name into the console
/*let dt = new Date(2025, 7, 20);
alert(dt);
const months=["Jan", "Feb", "March", "April","Mai", "June", "July", "August", "Sept", "Oct", "Nov", "Dec"];
let day= dt.getDate();
let year=dt.getFullYear();
let month=dt.getMonth();
let nowDate = `${day} - ${months[month-1]} - ${year}`;
alert(nowDate);*/

// CHAPTER PROJECTS:
// Word scrambler
/*let word = prompt("Please enter any word");
let scramble = (wd) => {
    let temp = "";
    let max = wd.length;
    for(let i=0; i<max; i++){
        let index = Math.floor(Math.random()*wd.length);
        temp += wd[index]
        wd=wd.substr(0, index)+wd.substr(index+1);
        alert(wd);
    }
    return temp;
}
alert(scramble(word));*/

// Countdown timer
const endDate = "Sept 1 2023";
function countdown() {
        const total = Date.parse(endDate) - new Date();
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        const hrs = Math.floor((total / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((total / 1000 / 60) % 60);
        const secs = Math.floor((total / 1000) % 60);
    return {
        days,
        hrs,
        mins,
        secs
    };
}
function update() {
    const temp = countdown();
    let output = "";
    for (const property in temp) {
        output += (`${property}: ${temp[property]} `);
    }
    // console.log(output);
    setTimeout(update, 1000);
}
update();
