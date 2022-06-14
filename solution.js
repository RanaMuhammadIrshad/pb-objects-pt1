'use strict';

/* 
**1. Object Person.**
Create an object named person. Loop through the object and print both the property and value of the object.  */

console.log(`*******01******`);
const person = {
    firstName: 'John',
    lastName : 'Smith',
    age: 30,
    job: 'Teacher',
    city: 'Bremen',
}
const entries = Object.entries(person)
for (const [property, value] of entries ) {
    console.log(property, value);
}

/* **2. Get Values.** 
Create a function that returns an array of all **values** of an object's properties. 
* Examples:
```javascript
getObjectValues({
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk"
})
```
* Expected output: 
```javascript
["tea", "coffee", "milk"] 
``` */

console.log(`*******02******`);

// const myObject = {
//     choice1: "tea",
//   choice2: "coffee",
//   choice3: "milk",

 
// }

// const values = Object.values(myObject);
// console.log(values);

function getObjectValues(obj) {
   console.log(Object.values(obj));
}

getObjectValues({
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk"
  });

  /* 
  **3. Add A Method.**
Create an object and add a method to that object which prints the values of the objects in a string. 
* Example
```javascript
let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris"
}
```
* Example of Expected Output 
"Michael Smith is a 20 year old driver in Paris". */

console.log(`*******03******`);
let person1 = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",

    printStr () {
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}.`);
    }
  }

  person1.printStr();

  /* 
  ## Bonus Questions

**1. Convert keys and values into an array.** 
Create a function that converts an object into an array of keys and values. 
* Examples:
```javascript
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
```
* Expected output: 
```javascript
[["A", 1], ["B", 2], ["C", 3]]
```

```javascript
objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
```
* Expected output: 
```javascript
[["cats", 1], ["dogs", 2], ["turtles", 4]]  */
console.log(`*******Bonus Questions******`);


function objectToArray (obj) {
    console.log(Object.entries(obj));
}

objectToArray({
    A: 1,
    B: 2,
    C: 3
  });
  objectToArray({
    cats: 1,
    dogs: 2, 
    turtles: 4
  }) ;

  /* **2. List Properties.**
Create a function that returns an array of **properties** of a javascript object. 
* Example
```javascript
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
```
* Expected output: 
```javascript
["name", "class", "course"]
``` */
console.log(`*******List Properties******`);

let student = {
    name: "Mike", 
    class: "4A", 
    course: "English",
  }

  function propertyArr (obj) {
      console.log(Object.keys(obj));
  }

  propertyArr(student);

  /* 
  **3. Merge.**
Create a function that takes two objects as its parameters and merges them together into a new object. 
* Example
```javascript
let first = {firstName: "John"}
let last = {lastName: "Smith"}
```
* Expected output:
```javascript
{firstName: "John", lastName: "Smith"}
``` */
console.log(`*******Merge******`);
let first = {firstName: "John"}
let last = {lastName: "Smith"}
function mergObj (obj1, obj2)
   {
       const meregedObj = {...obj1, ...obj2};
       console.log(meregedObj);
   }

   mergObj(first, last);
   
// /* 
// **Extra Credit:** What happens if you merge two objects with the same property values? In merging these two objects, do you expect to change either or both of the original objects? Why or why not? Comment your answers. */
console.log(`*******Extra Credit******`);
mergObj(first, first);
console.log(first);

// // merging two same objets just give that original object and the parent object is not changed


/* 
**4. Switch Keys and Values.**
Create a function to get a copy of an object. The copy must switch the keys and values.
* Example: 
```javascript
let person = {
  name: "John", 
  job: "teacher"
}
```
* Expected Output: 
```javascript
{John: "name", teacher: "job"} 
``` */
console.log(`*******Switch Keys and Values******`);
let person2 = {
    name: "John", 
    job: "teacher"
  }
  function  switchKeyVal(obj){
    let result = {};
    for(const key in obj){
      result[obj[key]] = key;
    }
   console.log(result);
  }

 switchKeyVal(person2)

/* **5. Return Keys and Values.**
Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.

* Examples:
```javascript
{ a: 1, b: 2, c: 3 } ➞ [["a", "b", "c"], [1, 2, 3]]
{key: true} ➞ [["key"], [true]] */

console.log(`*******Return Keys and Values******`);

function keyValArr (obj) {
const key = Object.keys(obj);


const value = Object.values(obj);


const result = [key, value];
console.log(result);
}
keyValArr({ a: 1, b: 2, c: 3 });
keyValArr({key: true})