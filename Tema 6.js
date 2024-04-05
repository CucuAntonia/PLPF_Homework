// -------------- Exercitiul 1 -------------------

const _ = require("underscore");
var people = [{name: "Fred", age: 65, health: 3}, 
              {name: "Lucy", age: 36, health :5},
              {name: "Maria", age: 36, health :2},
              {name: "Mark", age: 34, health :8},
              {name: "Mark", age: 35, health :7},  
              {name: "Dani", age: 35, health :8},             
            ]
function get_best(fun, coll) {
  return _.reduce(coll, function (x, y) {
    return fun(x, y) ? x : y;
  });
}

//Cum am putea selecta persoana cu vârsta cea mai mică?
console.log("Persoana cu varsta cea mai mica: ");
var result1 = get_best(function(x, y) {
    return x.age < y.age //? x.health < y.health : false;
}, people)
console.log(result1);

console.log("Persoana cu sanatatea cea mai mica: ");
// Dar cu sănătatea cea mai mică?
var result2 = get_best(function(x, y) {
    return  x.health < y.health;
}, people)
console.log(result2);

console.log("Persoana cu varsta si sanatatea cea mai mica: ");
//Cum ar arăta o metodă ce selectează mai întâi sănătatea si apoi vârsta? 
var result3 = get_best(function(x, y) {
   return  x.health < y.health ? true : x.health == y.health ? x.age < y.age : false;
}, people)
console.log(result3);

// -------------- Exercitiul 2 -------------------
function unless(cond,then) {
    if (!cond) then();
    }
    function repeat(times, action) {
        for(let i=0;i<times;i++)
        action(i);
        }
        
    repeat(999, n=> {
        unless(n%10, () => {
        console.log(n + ' is divibible with 10');
        });
        });

// -------------- Exercitiul 3 -------------------

function suma(colectia) {
   return colectia.reduce((a, b) => a + b, 0);
}

function media(colectia){
    var sum = suma(colectia);
    var lungime = colectia.length;
    return sum/lungime;
}
function median(colectia){
  var med=0;
  for(let i=0; i<colectia.length; i++){
    for(let j=i+1; j<colectia.length; j++){
      if(colectia[i] < colectia[j]){
        let aux = colectia[i];
        colectia[i] = colectia[j];
        colectia[j] = aux;
      }
    }
  }
  var lungime = colectia.length;
  if (lungime % 2 == 0){
      med = (colectia[lungime/2] + colectia[(lungime/2)-1])/2 ;
  }
  else if(lungime % 2 == 1)
      med = colectia[Math.floor((lungime - 1)/2)];
  return med;
}

function minim(colectia){
    return Math.min(...colectia);
}
function maxim(colectia){
  return Math.max(...colectia);
}
function agregator(colectia, agregatorul) {
      return agregatorul(colectia);
}

const colectia = [8,4,6,7,1,3];
const summm = agregator(colectia, suma);
const medd = agregator(colectia, media);
const medianul = agregator(colectia, median);
const mini = agregator(colectia, minim);
const maxi = agregator(colectia, maxim);

console.log(summm);
console.log(medd);
console.log(medianul);
console.log(mini);
console.log(maxi);

//Varianta nu functioneaza
const suma_varste = agregator(people, suma);
console.log(suma_varste);

//Varianta functioneaza
const sumAge = agregator(people.map(p => p.age), suma);
console.log(sumAge);