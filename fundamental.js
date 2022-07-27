// array 
var footballTeam = ['Ronaldo', 'Messi', 'Neymar', 'Sadio Mane', 'Mohammad Saleh'];

// array length
var total = footballTeam.length;

// Array type
var category = typeof (footballTeam);

// Array index 
var preface = footballTeam.indexOf('Ronaldo')

// Array position 
var position = footballTeam[3];

// Array add element 
var add = footballTeam.push('Jidney');

// array remove element 
var remove = footballTeam.pop();

// array index add element 
footballTeam[2] = 'Abir Chowdhury'

// array add first element 
footballTeam.unshift('Ronal Dinho');

// array remove first element 
footballTeam.shift();

// comparision 
var cash = 50000;
var shopping = 2000;
var rent = 1000;
var food = 500;
var compare = food > rent;
var compare1 = food < rent;
var compare2 = shopping == cash;
var compare3 = shopping != cash;

if (shopping > cash) {
}
if (shopping < cash) {
}

// conditional decition 
var money = 30000;
var burger = 200;
var pizza = 500;
if (money > burger) {
    // console.log('i will eat the burger');
}
else {
    // console.log('i have insufficient money');
}
if (pizza < money) {
    // console.log('i will eat the pizza');
}
else {
    // console.log('i have insufficient money');
}
if (money > burger && pizza < money) {
    // console.log('i will eat both pizza and burger');
}
else {
    // console.log('it is time to go');
}
if (money < burger || pizza < money) {
    // console.log('i will eat pizza');
}
else {
    // console.log('it is time to go');
}

// nested condition 
var fresh = true;
if (money > burger) {
    if (fresh == true) {
        // console.log('then i will eat');
    }
    else {
        // console.log('i never eat this item');
    }
}
else {
    // console.log('i have no money');
}

var umbrella = 2000;
var tissue = 200;
var budget = 3000;
if (umbrella >= tissue) {
    // console.log('i purchase the tissue');
}
else {
    // console.log('i do not purchase the tissue');
}
if (umbrella <= tissue) {
    // console.log('i purchase the tissue');
}
else {
    // console.log('i do not purchase the tissue');
}
