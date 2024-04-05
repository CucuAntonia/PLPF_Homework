// --------- Exercitiul 2 ----------
//Implementati functia: f (x, y) =x^4∗rad(x+y)/(x−y)^2
//Functia va trebui să fie pură. Indiciu: folositi compunerea functiilor. Tratati cazul de împărtire la 0.

function func(x, y) {
    if (x === y) {
        return null; //deoarece avem la numitor (x-y)^2. (x-y)^2 = 0 => x-y = 0 => x=y (conditia pusa)
    } else {
        return (Math.pow(x, 4) * Math.sqrt((x + y)) / Math.pow((x - y), 2));
    }
}
console.log(func(2,2));
console.log(func(2,3));


// --------- Exercitiul 3 ----------
//Re-implementati la alegere cel putin o metodă din orice laborator 1-8 astfel ca
//functia să fie pură. Demonstrati că respectă cele 4 reguli.
const _ = require('underscore') ;

function isEven(n) { return (n%2) === 0 }

function andify(...preds) {
    return function(...args) {
      function everything(ps, truth) {
        if (ps.length === 0) {
          return truth;
        } else {
          return _.every(args, ps[0]) && everything(_.rest(ps), truth);
        }
      }
      return everything(preds, true);
    };
  }

var evenNums = andify(_.isNumber, isEven);
console.log(evenNums(2,4,6,8));
console.log(evenNums(1,4,6,8));

//Am modificat functia andify
//Functia are parametrii de intrare
//Functia retuneaza o valoare, un obiect, determinat(a) de param de intrare
//Nu sunt folosite variabile de stare
//Nu provoaca efecte secundare
