// practice exercise 6.1: adding numbers
/*function addNumber(){
    let a=Number(prompt("enter the first number"));
    let b=Number(prompt("Now enter the second number"));
    let sum=a+b;
    alert(`The sum of ${a} and ${b} is ${sum}`);
}
addNumber();*/

//practice exercise 6.2: randomly describe an outputted name
/*const descriptiveName=["Super", "Wonderful", "Bad", "Angry", "Careful", "Hello", "Great day"];
function askName(){
    let name = prompt("enter a name");
    let rand = Math.floor(Math.random()*descriptiveName.length);
    alert(`${descriptiveName[rand]} ${name}`);
}
askName();*/

//practice exercise 6.3: Calculator
/*function calculator(nber1, nber2, operation){
    if(operation==="+") alert(`${nber1} ${operation} ${nber2} = ${nber1+nber2}`);
    else if(operation==="-") alert(`${nber1} ${operation} ${nber2} = ${nber1-nber2}`);
    else if(operation==="/") alert(`${nber1} ${operation} ${nber2} = ${nber1/nber2}`);
    else if(operation==="*") alert(`${nber1} ${operation} ${nber2} = ${nber1*nber2}`);
    else alert("invalid operation");
}

let a=Number(prompt("first number"));
let op=prompt("operation");
let b=Number(prompt("second number"));
calculator(a, b, op);*/

// Arrow function redo practice exercise 6.3:
/*let calculator = (nber1, nber2, operation) =>{
    if(operation==="+") alert(`${nber1} ${operation} ${nber2} = ${nber1+nber2}`);
    else if(operation==="-") alert(`${nber1} ${operation} ${nber2} = ${nber1-nber2}`);
    else if(operation==="/") alert(`${nber1} ${operation} ${nber2} = ${nber1/nber2}`);
    else if(operation==="*") alert(`${nber1} ${operation} ${nber2} = ${nber1*nber2}`);
    else alert("invalid operation");
}

let a=Number(prompt("first number"));
let op=prompt("operation");
let b=Number(prompt("second number"));
calculator(a, b, op);*/
//ARROW FUNCTIONS
// (param1, param2) => body of the function;
//      Or for no parameters:
// () => body of the function;
//      Or for one parameter (no parentheses are needed here):
// param => body of the function;
//      Or for a multiline function with two parameters:
// (param1, param2) => {
// // line 1;
// // any number of lines;
// };


//Spread operator
/*let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];*/

//practice exercise 6.4: modify Calculator to return added values and using arrow function
/*const addNumbers=[];
let calculator = (nber1, nber2) =>{
    return nber1+nber2;
}
for(let i=0; i<10; i++){
    let result = calculator(i*5, i*i);
    addNumbers.push(result);
}
alert(addNumbers);*/


//practice exercise 6.5: factorial using recursion
/*let nbr=Number(prompt("enter a number to compute the factorial"));
factorial = fact => {//function factorial(fact){
    if(fact===0 || fact === 1){
        return 1;
    }else{
        fact=fact*factorial(fact-1);
        return fact;
    }
}
alert(`${nbr} ! = ${factorial(nbr)}`)*/

/*let youGotThis = function () {
    alert("You're doing really well, keep coding!");
};
// setTimeout(youGotThis, 1000);//wait for 1000ms before execute the function
setInterval(youGotThis, 5000);//keep execute the function each 5000 ms untill you kill the program*/



//CHAPTER PROJECT: set timeout order
let printOne = () => alert("One");
let printTwo = () => alert("Two");
let printThree = () => {
    alert("Three");
    printOne();
    printTwo();
}
let printFour = () =>{
    alert("Four");
    setTimeout(printOne, 5000);
    printThree();
}
printFour();



















