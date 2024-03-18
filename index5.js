// While loop
//do while loop
//for loop
//for in loop
//for of loop


//Practice 5.1: number guess
/*let max=0;
let guess=Math.floor(Math.random()*6 +1);
let tracking=false;

while(!tracking){
    user=Number(prompt("try to guess a number between 1 and 5: "));
    max++;
    if(max===5){
        alert("You lost, you have no more tries");
        break;
    }
    else if(user===guess){
        alert("congrats, you guessed the right number");
        tracking=true;
    }else if(user>guess){
        alert("enter a lower number than "+user);
    }else if(user<guess){
        alert("enter a number gretter than "+user);
    }else continue;
}*/


//Practice 5.2: basic counter
/*let step=0;

do{
    alert(step);
    step+=1;
}while(step<=10);*/



//practice 5.3: create an array that holds objects
/*let myWork=[];
for(let i=1; i<=10; i++){
    let lesson = {
        name: "Lesson "+i,
        theStatus: i%2===0 ? true : false
    };
    myWork.push(lesson);
}
alert(myWork);
// alert(JSON.stringify(myWork, null, 2));

let arrOfArrays = [];
for (let i = 0; i < 3; i++){
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}
console.table(arrOfArrays);*/





//practice exercise 5.4: table of values generation
/*const myTable=[];
const row =4, col = 7;
let count=0;

for(let i=0; i<row; i++){
    let tempTable=[];
    for(let j=0; j<col; j++){
        count++;
        tempTable.push(count);
    }
    myTable.push(tempTable);
}
console.table(myTable);
alert(myTable);*/




//practice 5.5: create a table grid that contains nested arrays as rows within a table

/*const gridArray=[[]];
const grid=[];
let nberCell=32, count=0, row;

for(let i=0; i<nberCell+1; i++){
    if(count % 4 === 0){
        if(row != undefined){
            grid.push(row);
        }
        row=[];
    }
    count++;
    let temp=count;
    row.push(temp);
}
console.table(grid);
alert(grid);*/



//for of loop
/*let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of names){
    console.log(name);
}*/


//for in looP: manipulate objects and arrays
/*let car = {
    model: "Golf",
    make: "Volkswagen",
    year: 2002,
    color: "blue",
};
for (let prop in car){
    console.log(car[prop]);
    alert(car[prop]);
}
for (let prop in car){
    alert(prop);
}
//convert objects to array
let arrKeys = Object.keys(car); //conversion
console.log(arrKeys);
for(let key of Object.keys(car)) {
    console.log(key);
} 

//another way:
for(let key of Object.values(car)) {
    console.log(key);
}

//using both the previous (another way):
arrKeys = Object.keys(car);
for(let i = 0; i < arrKeys.length; i++) {
    console.log(arrKeys[i] + ": " + car[arrKeys[i]]);
}

//break and continue and labeled blocks
outer:
for (let group of groups) {
    inner:
    for (let member of group) {
        if (member.startsWith("M")) {
            console.log("found one starting with M:", member);
            break outer;
        }
    }
}*/


//Project: Math multiplication table
/*In this project, you will create a math multiplication table using
loops. You can do this using your own creativity or by following
some of the following suggested steps:
1. Set up a blank array to contain the final multiplication table.
2. Set a value variable to specify how many values you want to
multiply with one another and show the results for.
3. Create an outer for loop to iterate through each row and a temp
array to store the row values. Each row will be an array of cells
that will be nested into the final table.
4. Add an inner for loop for the column values, which will push
the multiplied row and column values to the temp array.
5. Add the temporary row data that contains the calculated
solutions to the main array of the final table. The final result will
add a row of values for the calculations.*/

const mathMultiplication=[];
let value=prompt("enter a value");
for(let i=0; i<value; i++){
    let temp=[];
    for(let j=0; j<value; j++){
        temp.push(i*j);
    }
    mathMultiplication.push(temp);
}
console.table(mathMultiplication);
alert(mathMultiplication);











