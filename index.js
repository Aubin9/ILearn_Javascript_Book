alert('Hello world! from different file from alert()');
console.log("hello world from the console.log");
prompt("hello world from prompt(), how are you ??");
//value between 0 and 1 and then multiplying by 100 gives a value between 0 and 100
console.log(Math.random() * 100);
//to get an integer, surround down the decimal value we get above:
console.log(Math.floor(Math.random() * 100));

let str1 = 'Aubin';
let str2 = "SIAHA";
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log("str1 string ", typeof str1);
console.log("str2 string ", typeof str2);
console.log("val1 undefine", typeof str1);
console.log("val2 null", typeof str1);
console.log("myNum number", typeof str1);


let myname="Aubin";
let age=19;
let isJavaScript=true;
console.log("hello, my name is ", myname, " I am ", age , "year old and I can code JavaScript");
console.log(`hello, my name is ${myname} I am ${age} year old and I can code JavaScript`);

// pythagoras theorem project
let a=prompt("enter the value of a");
let b=prompt("enter the value of b");
let c= (a**2 + b**2)**(1/2);
console.log(`given the dimensions of the scare triangle of ${a} and ${b}, the hypothenuse gives ${(a**2 + b**2)**(1/2)}`);
alert(`the hypothenuse is ${c}`);

//CHAPTER PROJECT: 
//Miles-to-kilometers converter  1miles=1.60934 kilometers
let distanceKms=prompt("enter a distance in kilometers for conversion");
alert(`${distanceKms} kms = ${distanceKms*(1.60934)} miles`);
//BMI Calculator
let height=prompt("enter a height in inches for conversion in cm");
let weight=prompt("enter a weight in pounds for conversion in kilo");
alert(`${height} inches = ${height*2.54} cm \n${weight} pounds = ${weight/(2.2046)} kilo`);
