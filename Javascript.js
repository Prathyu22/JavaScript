//Named Functions
/* Has a unique name and can be called/used in multiple places. */

function addNum(a,b){
    console.log("document.write is called");
    return a+b;
}

var d = addNum(4,3);
console.log(d)

//Anonymous Function
/* can be used at only at one place. */
var anony = function(a,b){
    console.log("anonymous function is called.");
    return a+b;
}
anony(5,5);

setTimeout(function()
{
    alert("This displays after 5 seconds.");
}, 5000);

//constructors
//Anonymous function using constructor....
var cons = new Function("a", "b", "console.log('Constructor function is called'); return a+b;");
console.log(cons(5,5));

//Self invoking functions ---> anonymous functions.
/*
1. These are invoked right after the function has been defined.
2. You can execute the code once, without declaring any global variables.
3. No reference is maintained to this function, not even to its return value.

SYNTAX:

1.
(function() {
    //body
} () );

2.
(function(){
    //bosy
}) (); 
*/

(function(a,b){
    console.log("Self-invoking function called");
    console.log(a+b);
}) (2,6);