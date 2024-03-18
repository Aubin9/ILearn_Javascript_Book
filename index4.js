//IF STATEMENTS

/*let age = prompt("enter your age");
// number(age);
alert(Number(age));
let message;
if(age>=21) message="you are older than 21, thuss you can purchace alcohol";
else if(age>=19) message="the venu is allowed, but you cannot purchace alcohol";
else message="entry is denied";

alert(message);

age>=21 ? alert("you are no more minor") : alert("You are minor still");
let access = age < 18 ? "denied" : "allowed";*/


// let ID = true;

// let message = ID===true ? "valid" : "invalid";
// alert(message);

//SWITCH STATEMENTS

/*switch(expression) {
    case value1:
    // code to be executed
    break;
    case value2:
    // code to be executed
    break;
    case value-n:
    // code to be executed
    break;
    default:
    // code to be executed when no cases match
    break;
    }
*/

//Generate random niumbers
    /*let randomV=Math.floor(Math.random()*5);
    switch(randomV){
        case 0:
            alert(0);
        break;
        case 1:
            alert(1);
        break;
        case 2:
            alert(2);
        break;
        case 3:
            alert(3);
        break;
        case 4:
            alert(4);
        break;
        default:
            alert(-1);
    }

    let prize;
    let value=prompt("set a value by entering a number between 0 and 10");
    value=Number(value);
    let msg = `my selection: ${value}`;
    switch(value){
        case 0:
            prize=0;
            break;
        case 1:
            prize=100;
            break;
        case 2:
        case 3:
            prize=500;
            break;
        case 4:
        case 5:
            prize=1020;
            break;
    }
    alert(msg +" your award is $"+prize);
*/

    //Project: ROCK, PAPER, and SCISSORS GAME
    let input=["Rock", "Paper", "Scissors"];
    let selection=Math.floor(Math.random()*3);
    // start:
    let response=Number(prompt("enter a selection: \n0:Rock \n1:Paper \n2:Scissors"));
    let message;
    if(response>2) {
        console.log("invalid choice");
        // goto(start);
    }
    else{
        message="You: "+input[response]+" \nComputer: "+input[selection];
        if(response===selection){
            alert(message+" \nequal chance");
        }
        else if(response===0 && selection===2 || response===1 && selection===0 || response===2 && selection==1) {
            alert(message +"\nYou beat the computer");
        }
        else{
            alert(message+"\nYou lost");
        }
    }
    
