// JAVASCRIPT MULTIPLE VALUE: Arrays and Objects
/*let shopping=["Milk", "Bread", "Apples"];
let arr1=["hello", "JS", 5, true];
alert(shopping.length);
shopping[1]="Bananas";
alert(shopping);
let lengthShopping = shopping.push("Bread"); //push is used to ad element into the array
let arr=shopping.concat(arr1); //concatenate arrays
alert(arr);
arr.pop(); //delete the last element in the array
arr.shift(); //delete the first element in the array
arr.splice(1,3); //delete element at position 1 and 3 in the array
delete arr[0];*/


// FIND A VALUE IN AN ARRAY
/*let arr8 = [ 2, 6, 7, 8 ];
let findValue = arr8.find(function(e) { return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);
let findIndex = arr8.indexOf(6); //find the index of the elememt. Return -1 in case it doesn't find it
findIndex = arr8.indexOf(6,2); // find the number 6 from index 2 of the array

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
*/

//SORTING
/*let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();

//REVERSING
names.reverse();
*/


/*let arr1=["hello", "JS", 5, true];
alert(`${arr1[0]} ${arr1[1]} ${arr1[2]} ${arr1[3]}`);
alert(typeof arr1[2]);
alert(arr1.length);*/

//MULTIDIMENTIONAL ARRAY
/*let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let value1 = arrOfArrays2[0][1];

let arr1=[1,2,3];
let arrOfarr=[arr1, arr1, arr1];
alert(arrOfarr[0][1]);*/














//OBJECTS IN JAVASCRIPT
let dog = { 
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};  
let dogColor2 = dog.color;

//Objects in objects
let company = { 
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
yearOfEstablishment: 2021
}

company.address.zipcode = "33117"; //modify the zipcode inside the address

//Arrays in objects
company = { 
    companyName: "Healthy Candy",
    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
}

let activity = company.activities[1]; //access element 

//Objects in arrays

let addresses = [
    {
    street: "2nd street",
    number: "123",
    zipcode: "33116",city: "Miami",
    state: "Florida"
    },
    {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
    }];

    let streetName = addresses[0].street; //access data

    //Objects in arrays in objects
    company = { 
        companyName: "Healthy Candy",
        activities: [ "food manufacturing", "improving kids' health", "manufacturing toys"],
        address: [
            {
            street: "2nd street",
            number: "123",
            zipcode: "33116",
            city: "Miami",
            state: "Florida"
            },
            {
            street: "1st West avenue",
            number: "5",
            zipcode: "75001",
            city: "Addison",
            state: "Texas"
            }
        ],
        yearOfEstablishment: 2021
}

let StreetName = company.address[0].street; //access data















