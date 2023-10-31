// review-1
// --> We can use if statement with
// single and multi conditions

//single condition
if (true) {
  console.log("it is True");
}

//multi conditions
if (false || (true && true)) {
  console.log("Let's show this me!");
}

// --> When we use condition in IF
// Statement , will be reading as a boolean
// type (true or false)
// 'if' will be run only which the condition is TRUE
// 'else' will be run when havent any true condition,
// so when the condtion is FALSE

let age = 10;

if (age >= 18) {
    console.log("Let's discover the site")
} else {
    console.log("Go to cartoon sites");
}

// ORDERS OF in 'IF'
// from little to big  or based on minimum conditions

// --NULLISH (ES6)--
// ?? = nullish sign
// Nullish values in JavaScript are null and undefined . These values
// fall under falsy values but are more specifically referred to as null
// values.
// (!) All nullish values are falsy, but not all falsy values(for
// example, 0 ) are nullish

// Difference between ?? and ||
// ?? returns the first  DEFINED  value
// || returns the first TRUTHY  value
