console.log("Hello World");

var gen;
console.log(gen); //undefined
console.log(typeof(gen)); //undefined

gen = 6;
console.log(gen); //6
console.log(typeof(gen)); //number

gen = "Hi";
console.log(gen); //Hi
console.log(typeof(gen)); //string

gen = "True";
console.log(gen); //True
console.log(typeof(gen)); //string

gen = true;
console.log(gen); //true
console.log(typeof(gen)); //boolean

gen = [];
console.log(gen); //Array
console.log(typeof(gen)); //object

gen = null;
console.log(gen); //null
console.log(typeof(gen)); //object

gen = NaN;
console.log(gen); //NaN
console.log(typeof(gen)); //number