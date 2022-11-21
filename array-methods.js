//Array is a special variable, which can hold more than one value.
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("test1").innerHTML = cars;

//filter method - creates a new array filled with elements that pass a test provided by a function.
const ages = [32, 33, 18, 16, 40, 11,33, 667];


document.getElementById("test2").innerHTML = ages.filter(checkAdult);

function checkAdult(age) {
    console.log("1 :"+age);
    return age == 18;
}

//document.getElementById("test21").innerHTML = ages;



//find method - returns the value of the first element that passes a test. It executes a function for each array element. 
const ages1 = [10, 18, 28, 20];

document.getElementById("test3").innerHTML = ages1.find(checkAge);

function checkAge(age) {
    console.log("2 :"+age);
    return age == 18;
}

//foreach method - calls a function for each element in an array.
let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
function myFunction(item, index) {
    text += index + ": " + item + "<br>";
}

document.getElementById("test4").innerHTML = text;



//includes method - returns true if an array contains a specified value and returns false if the value is not found.
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("test5").innerHTML = fruits1.includes("Banana");

//map method - creates a new array from calling a function for every array element.
const numbers = [4, 9, 16, 25];
document.getElementById("test6").innerHTML = numbers.map(Math.sqrt);
document.getElementById("test7").innerHTML = numbers;

//slice method - returns selected elements in an array, as a new array. It selects from a given start, up to a (not inclusive) given end.
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1, 3);

document.getElementById("test8").innerHTML = citrus;

//shift method -  removes the first item of an array. It also changes the original array and returns the shifted element.
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.shift();

document.getElementById("test9").innerHTML = fruits3;

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("test10").innerHTML = fruits4.shift();

//push method -  adds new items to the end of an array.
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.push("Kiwi");

document.getElementById("test11").innerHTML = fruits5;

//valueOf method - returns the array itself.
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits6.valueOf();

document.getElementById("test12").innerHTML = myArray;