//Explicit Conversions
num1 = prompt("Enter 1st real/floating-point number: ");
num2 = prompt("Enter 1st real/floating-point number: ");
//String to float conversion
alert("The sum of real numbers is "+ (parseFloat(num1) + parseFloat(num2)));

console.log(typeof num1); // by default, prompt considers the i/p as a string.
console.log(num1 + 9); // It gives error as concatenation cannot be done b/w number and string.