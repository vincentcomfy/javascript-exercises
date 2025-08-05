/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!

// ## Step 3: Optimize
// You will edit your code to make it easier to read using the following instructions:

// 1. Create 2 new variables: `fullName` and `age`
// - Do NOT simply type the full name and age into the new variables
// - Instead, use the pre-existing variables, with the calculations that are currently inside of `greeting`

// 2. Edit the `greeting` string to use `fullName` and `age` instead of the other 4 variables
// - `greeting` should look something like:
// ```js
// "Hello! My name is " + fullName
// ```

const firstName = "Carlos";
const lastName = "Stevenson";
const thisYear = 1965;
const birthYear = 1947;

const fullName = firstName + " " + lastName;
const age = thisYear - birthYear;

const greeting = "Hello! My name is " + fullName +" and I am " + age + " years old."



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}