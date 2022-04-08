//named function
function calSquare(a){
    return a*a;
}

console.log("Calling named function. "+ calSquare(9));

//anonymous function
var anony = function(a){
    return a*a;
}

console.log("Calling Anonymous function. "+anony(9));

//new constructor
var cons = new Function("a","return a*a;");
console.log("calling constructor function. "+cons(9));

//self invoking function
(function(a){
    console.log("calling self-invoking function 1.");
    console.log(a*a);
}) (9);

(function(a){
    console.log("calling self-invoking function 2.");
    console.log(a*a);
} (9) );

console.log( (function(a){
    console.log("calling self-invoking function 3.");
    return a*a;
}) (9));
