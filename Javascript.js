//method 1,2
function createPerson() {
    var person = new Object(); // or {}; 
    person.name = "Prathyusha";
    person.designation = "B.Tech";
    person.phno = 1234567890;
    return person;
}

var a = createPerson();
console.log(a);
console.log(a.name);
/*
console.log(createPerson.name); //createPerson
console.log(person.name); //error
*/

//method 3
function createPerson3() {
    var person = {}; 
    person['name'] = "Prathyusha";
    person['phno'] = 1234567890;
    return person;
}

var b = createPerson3();
console.log(b);
console.log(b.name);

//method 4
function createPerson4(){
    var person = 
    {
        name:"Prathyusha",
        age:20
    };
    return person;
}

var c = createPerson4();
console.log(c.name);