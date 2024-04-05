// ---- Exercitiul 1 ----

console.log("Patratele numerelor naturale: " );
const nextSquare = ((x) => {
  return (x) => {
    for (var i = 0; i < x; i++) {
      console.log(i * i);
    }
  };
})();
nextSquare(7);

// ---- Exercitiul 2 ----

function makeAdder(...args) {
  var sum = args.reduce(function (a, b) {
    return a + b;
  });
  return function (...args1) {
    var sum2 = args1.reduce(function (a, b) {
      return a + b;
    });
    return sum + sum2;
  };
}
var add149 = makeAdder(1, 4, 9);
var suma = add149(1, 2, 3, 4, 5);
console.log("Suma este: " + suma);

// ---- Exercitiul 3 ----

function factorial(x) {
  function inner_function() {
    if (x == 0) fact = 1;
    if (x == 1) fact = 1;
    var fact = 1;
    for (i = 1; i <= x; i++) {
      fact = fact * i;
    }
    return fact;
  }

  return inner_function();
}
console.log("Se afiseaza factorialul numerelor de la 0 la 9......");
for (let i = 0; i < 10; i = i + 1) {
  console.log("Factorialul numarului " + i + " este: " + factorial(i));
}

// ---- Exercitiul 4 ----

console.log("Primele 10 numere din sirul lui Fibonacci: ");
fibo(10);

function fibo(x) {
  function inner_function() {
    var nr1 = 1;
    var nr2 = 1;
    var nr3;
    console.log(nr1);
    console.log(nr2);
    for (var i = 3; i <= x; i++) {
      nr3 = nr1 + nr2;
      nr1 = nr2;
      nr2 = nr3;

      console.log(nr3);
    }
  }

  inner_function();
}
