//A-LAB-308-5-1

// ***** Part 1: Thinking Functionally *****

//Take an array of numbers and return the sum.
/*let arrOfNum = [7, 3, 9, 21];
function sumOfNums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(`the sum of sumOfNums is: ${sumOfNums(arrOfNum)}`);
/*
Output code below:
the sum of sumOfNums is: 40
*/

// ******* Take an array of numbers and return the average ******
/*function aveOfNum(aveNum) {
    let average;
    let sum = 0;
    for (i = 0; i < aveNum.length; i++) {
        sum += aveNum[i];
        //console.log(`The sum of ${arr1}  is ${sum}`);
    }
    average = sum / aveNum.length;
    return average;
}
console.log(`The average of ${arrOfNum} is ${aveOfNum(arrOfNum)}`);
/*
Output code below:The average of 7,3,9,21 is 10
*/

// ****** Take an array of strings and return the longest string. *******
/*const arrStrings = ["Adam", "Gregory", "Marcus", "Yannick"];
function longestStr(str) {
    let longestStr = "";
    for (let name of str) {
        if (longestStr.length < name.length) {
            longestStr = name;
        }
    }
    return longestStr;
}
console.log(`The longest string in the array is ${longestStr(arrStrings)}`);
/*
Output code below:
Output code below:
The longest string in the array is Gregory
*/

//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
/*const arrStrings1 = ["Adam", "Gregory", "Marcus", "Yannick", "Christopher"];
//return strings longer than the given number
function arrStringsLongerThan(strArr, num) {
    let StringRuler = [];
    for (let i = 0; i < strArr.length; i++)
        if ((strArr[i].length > num)) {
            StringRuler.push(strArr[i])
        }
    return StringRuler;
}
console.log(arrStringsLongerThan(arrStrings1, 6));
/*
Output code below:
[ 'Gregory', 'Yannick', 'Christopher' ]-Adam was removed as he was too short :( (so sad)
*/

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.
//returns number between 1 to 'n'
function countdown(n) {
    if (n <= 0) {
        return;
    }
    countdown(n - 1);
    console.log(n);
}

countdown(5);
/*
Output code below:
//1
//2
//3
//4
//5
*/

// ***** Part 2: Thinking Methodically *****

const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

//part 2 first bullet
function sortAge(arr) {
    //arr let you know your pulling in array
    //let newArr = [...data] // creates a copy for later use
    return data.sort ((a,b) => {
        // changes original array forever
        return a.age - b.age;
    });
}
console.log(sortAge(data));
/*
Output data below:
[
    { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
    { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
    { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
    { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
    { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
  ]
*/

//part 2 second bullet
function under50(arr, maxAge) {
    let filterArr = arr.filter(function (person) {
        //creates a filter with an option for any max age input
        return person.age <= maxAge;
    });
    filterArr.sort(function (a,b) {
        //sorts the objects of the array from youngest to oldest
        return a.age - b.age;
    });
    //part 2 third bullet
    let updatedArr = filterArr.map (function (person) {
        //filter allows you to return with an object key having a new name
        return {
            id: Number(person.id),
            name: person.name,
            job: person.occupation,
            age: Number(person.age) + 1, // adding 1 to each age
        };
    });
    return updatedArr;
}
const dataSorted = under50(data, 50);
console.log(dataSorted);

/*Output code below:
{ id: 57, name: 'Bob', job: 'Fry Cook', age: 20 },
{ id: 48, name: 'Barry', job: 'Runner', age: 26 },
{ id: 42, name: 'Bruce', job: 'Knight', age: 42 }


// part 2 fourth bullet
let ageArr = dataSorted.map(function (person) {
    // sorts out just the age input
    return Number (person.age);
});
console.log(ageArr);
/*Output code below:
[ 20, 26, 42 ]
*/

const sumOfAge = ageArr.reduce((sum, age) => {
    //adds all the age inputs in our new array for age
    return sum + age;
},0);
console.log(sumOfAge);

//part 3 fifth bullet
let avg = sumOfAge / ageArr.length; // divides the average age but the length of the array
//console.log(avg);

// ========== Part 3: Thinking Critically ==========
const starwars = [
    {name: "Luke", who: "Jedi", color: "Blue" },
    {name: "Darth Vader", who: "Jedi", color: "Black" },
    {name: "Chewy", who: "Jedi", color: "Brown" },
    {name: "Han Solo", who: "Jedi", color: "Blue" },
    {name: "Princess Leia", who: "Jedi", color: "White" },
    {name: "Master Yoda", who: "Jedi", color: "Green" },
    ]
starwars[0].age = 41;


console.log(starwars);
//copy code output here

const copyofFamilyInOneYear = family.map(function (obj) { // map to the age key for each obj and increment by 1
    return {
        name: obj.name,
        who: obj.who,
        color: obj.color,
        age: Number(obj.age) + 1,
    };
});
console.log(copyofFamilyInOneYear);
// copy output code here

const date = new Date();
console.log(date);
//copy output code here

const insertnewarrayhere = copyofFamilyInOneYear.map(function (obj) {// map to the age key for each obj and increment by 1
    return {
        name: obj.name,
        age: Number(obj.age),
        updated_at: (new Date())
    };
});
console.log(insertnewarrayhere);
//copy outputcode here
