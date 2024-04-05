const _ = require('underscore');

// ---- Exercitiul 1 ----

var nums = [100, 203, 35673, 42, 51, 45, 773, 5, 1, -9, 20140];
function MinOfAll(nums) {
    return _.min(nums);
}
console.log("Mininul este: " + MinOfAll(nums));

function MaxOfAll(nums) {
    return _.max(nums);
}
console.log("Maximul este: " + MaxOfAll(nums));


// ---- Exercitiul 2 ----

var albums = [{title: "Black Monday", genre: "Metal"},
{title: "Scientist", genre: "Dub"},
{title: "Fireworks", genre: "Pop"},
{title: "Fade", genre: "Pop"},
{title: "Undertow", genre: "Metal"}];

console.log("Colectia sortata dupa gen: ");
val = _.sortBy(albums, function(a) { return a.genre });
console.log(val);

console.log("Colectia sortata dupa titlu: ");
val2 = _.sortBy(albums, function(a) { return a.title });
console.log(val2);

// ---- Exercitiul 3 ----

console.log("Numarul total de melodii din colectie, grupate pe gen:");
const nr_melodii = _.chain(albums)
  .countBy('genre')
  .value();
console.log(nr_melodii);


// ---- Exercitiul 4 ----

function traverseArray(arr, func) {
    let result = '';
    for (const value of arr) {
        result += func(value) + ' ';
        }
    console.log(result);
}
const arr = [1, 2, 3, 4, 5];
const doubleit = function (value) {
        return value * 2;
}
traverseArray(arr, doubleit);


// ---- Exercitiul 5 ----

const printName = name => console.log(name);
printName("John");
printName(["John","Smith"]);
    
   






