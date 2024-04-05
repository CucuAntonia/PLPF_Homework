// --------- Intrebari pagina 4 ----------
// Cum ar arata o functie recursiva ce calculeaza suma tuturor elementelor unui sir? Dar a maximului? Dar a mediei?

const _ = require('underscore') ;

// Functia din laborator 
function myLength(array) {
    if (_.isEmpty(array))
        return 0;
    else
        return 1 + myLength(_.rest(array));
    
    }
console.log(myLength(_.range(10)));
//=> 10
console.log(myLength([1,2,3]));


// Functie pentru suma
console.log("Suma: ")
function mySum(array) {
    let n = array.length;
    if (_.isEmpty(array))
         return 0;
    else if(array.length === 1) 
         return array[0];
    else
        for(let i=0; i<n; i++){
            return array[i] + mySum(_.rest(array));
        }

}
console.log(mySum(_.range(10)));
console.log(mySum([1,2,3,3,3]));

// Functie pentru maxim
console.log("Maxim: ")
function myMax(array) {
    let max = array[0]; 
    if (_.isEmpty(array)) 
        return 0;
    else if(array.length === 1) 
        return max;
    else {
        if (_.isUndefined(myMax(_.rest(array))) || max > myMax(_.rest(array))) 
            return max;
        else 
            return myMax(_.rest(array));
        
        }
}
console.log(myMax([1000,2,87,3,6,9000]));

// Functie pentru medie
console.log("Media: ")
function myMed(array){
    if (_.isEmpty(array)) 
        return 0;
    else if(array.length === 1) 
        return array[0];
    else {
        var firstElement = array[0];
        var length = array.length;
        var sum = myMed(_.rest(array)) * (length - 1) + firstElement;
        return sum/length;
    }
        
}
console.log(myMed([1,2]));


// --------- Intrebari pagina 6 ----------
function existy(x) {
  return x != null;
}
function cat() {
  var head = _.first(arguments);
  if (existy(head)) return head.concat.apply(head, _.rest(arguments));
  else return [];
}
function construct(head, tail) {
  return cat([head], _.toArray(tail));
}

var influences = [
  ["Lisp", "Smalltalk"],
  ["Lisp", "Scheme"],
  ["Smalltalk", "Self"],
  ["Scheme", "JavaScript"],
  ["Scheme", "Lua"],
  ["Self", "Lua"],
  ["Self", "JavaScript"],
];

function nexts(graph, node) {
  if (_.isEmpty(graph)) return [];
  var pair = _.first(graph);
  var from = _.first(pair);
  var to = pair[1];
  var more = _.rest(graph);
  if (_.isEqual(node, from)) return construct(to, nexts(more, node));
  else return nexts(more, node);
}
res = nexts(influences, "Lisp");
console.log(res);

// Parcurgerea in latime
visited_bfs = [];
function BFS(graph, nodes, seen)
{
    if(_.isEmpty(nodes))
        return seen.reverse();
    var node = _.first(nodes);
    var more = _.rest(nodes);
    if(_.contains(seen, node))
        return BFS(graph, more, seen);
    else
        return BFS(graph,
            cat(more, nexts(graph, node)),
            construct(node, seen));
}
console.log("BFS: ");
console.log(BFS(influences, ['Lisp'] ,visited_bfs));


// Parcurgerea in adancime
visited_dfs = [];
function DFS(graph, nodes, seen)
{
    if(_.isEmpty(nodes))
        return seen.reverse();
    var node = _.first(nodes);
    var more = _.rest(nodes);
    if(_.contains(seen, node))
        return DFS(graph, more, seen);
    else
        return DFS(graph,
            cat(nexts(graph, node), more),
            construct(node, seen));
}
console.log("DFS: ");
console.log(DFS(influences, ['Lisp'] , visited_dfs));

// --------- Intrebari pagina 7 ----------

function isEven(n) {
  return n % 2 === 0;
}
function andify(/* preds */) {
  var preds = _.toArray(arguments);
  return function (/* args */) {
    var args = _.toArray(arguments);
    var everything = function (ps, truth) {
      if (_.isEmpty(ps)) return truth;
      else return _.every(args, _.first(ps)) && everything(_.rest(ps), truth);
    };
    return everything(preds, true);
  };
}
var evenNums = andify(_.isNumber, isEven);
console.log(evenNums(2, 4, 6, 8));
console.log(evenNums(1, 4, 6, 8));

//  Ce se întâmplă cu rezultatul dacă în loc de AND vom pune || ?
//  Vom obtine valorea true mereu. 

// Aplicati metoda "andify" si cu alti parametrii decât "isNumber" sau "isEven". 
// De exemplu intr-un dictionar oarecare, verificati dacă toate cheile sunt string-uri.

dict1 = { "hello" : 1, "world" : 2};
dict2 = { 1 : 1, "hi" : 2};

function hasLowerCase(dict) {
  let ok = 1;
  for (let key in dict) {
      let lowerCase = key.toLowerCase();
      if (key !== lowerCase) {
        ok = 0;
        break;
       }
  }
  return ok;
}

function hasNoNumbers(dict) {
  let ok = 1;
  for (let key in dict) {
    let ok2 = 1;
    for (let i = 0; i < key.length; i++) {
      if (key.charCodeAt(i) >= 48 && key.charCodeAt(i) <= 57) {
        ok2 = false;
        break;
      }
    }
    ok = ok && ok2;
  }
  return ok;
}

var keysAreStrings = andify(hasLowerCase, hasNoNumbers);

console.log("Rezultat primul dictionar:");
console.log(keysAreStrings(dict1));
console.log("Rezultat al doilea dictionar:");
console.log(keysAreStrings(dict2));

