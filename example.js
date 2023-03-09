// Variables store data
// the let keyword means it can be changed, the var keyword means you, the coder, are old, and the const keyword means that the data cannot be changed
// there are a lot of data types
let booleanExample = false; // true or false
let numberExample = 420.69; // signed integer or decimal
let stringExample = "amogus"; // text
let arrayExample = [false, stringExample, 420.69]; // list, called an array, variable names can be used in place of their values, because what's the point of it otherwise
// arrayExample[0] is the first element, arrayExample[1] is the second, ...
let objectExample = {
  arr: arrayExample,
  "qué": 6
};
// objectExample.arr is the same as objectExample["arr"] and they are both the array
// logic is useful
// the if statement checks if something is true
// ! means not
// && means and
// || means or
// == means is
// != means is not
// < and > are what they mean in math
if(3 > 2)
{
  // math works
}
else if(3 == 2) // else if statements run if none of the above if or else if statements ran
// don't worry about logic messing things up, statements reset any 
{
  // math does not work
}
else // else statements are just "run this code if none of the above logic is true"
{
  // math still doesn't work
}

// functions can do two things: one is execute code, the other is return a value. This one will do both.
function addSquares(num1, num2)
{
  console.log(num1 + " " + num2); // print the two numbers to the console, separated by a space
  return (num1 * num1) + (num2 * num2); // returns a value, addSquares(5, 3) can be used just like any other value
}
