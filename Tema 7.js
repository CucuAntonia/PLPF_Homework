// ------- Exercitiul 1 --------

const users = [
    { name: "Ana", age: 15 },
    { name: "Ion", age: 19 },
    { name: "Dan", age: 25 },
    ]
    
    const myfilter = f => arr => arr.filter(f);
    const mymap = f => arr => arr.map(f);
    const compose = (...functions) => args => functions.reduceRight((arg,fn) => fn(arg), args);
    const res = compose( mymap(u => u.name), myfilter(u => u.age >= 18))(users);
    console.log("Numele persoanelor care au peste 18 ani: ");
    console.log(res);

// function createArray(n) {
//   var array = [];
//   for (var i = 1; i <= n; i++) {
//     array.push(i);
//   }
//   return array;
// }

// let suma_p = 0;
// let suma_i = 0;

// const result_p = compose(
//   myfilter((u) => u % 2 == 0),
//   mymap((u) => (suma_p + u))
// )(createArray(5));
// console.log(suma_p);

// const result_i = compose(
//   myfilter((u) => u % 2 == 1),
//   mymap((u) => (suma_i + u))
// )(createArray(5));
// console.log(suma_i);



function createArray(n) {
  var array = [];
  for (var i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}

let suma_p = 0;
let suma_i = 0;

compose(
	mymap((u) => (suma_p = suma_p + u)),
	myfilter((u) => u % 2 == 0)
  )(createArray(5));
  
  console.log("Suma numerelor pare:");
  console.log(suma_p);
  
  compose(
	mymap((u) => (suma_i = suma_i + u)),
	myfilter((u) => u % 2 == 1)
  )(createArray(5));

  console.log("Suma numerelor impare:");
  console.log(suma_i);

// ------- Exercitiul 2 --------
result = compose(
	myfilter((u) => u % 10 == 0),
	mymap((u) => u)
)(createArray(1000));
console.log(result);

// ------- Exercitiul 3 --------
const projects = [
	{
		name: "Machine Learning",
		creation_date: "2020-04-14",
		last_modified: "2020-12-14",
		active: false,
		details: "Object detection using ML",
	},
	{
		name: "Filter App",
		creation_date: "2022-03-01",
		last_modified: "2023-01-10",
		active: true,
		details: "Grayscale filter app using OpenCV",
	},
	{
		name: "Object detection",
		creation_date: "2019-08-28",
		last_modified: "2023-04-11",
		active: true,
		details: "App for object detection using OpenCV",
	},
	{
		name: "Car Rental",
		creation_date: "2017-11-30",
		last_modified: "2019-07-25",
		active: false,
		details: "Car Rental System using C++",
	},
];


function compareByDate(date1, date2) {
	if (date1.last_modified < date2.last_modified) {
		return -1;
	}
	if (date1.last_modified > date2.last_modified) {
		return 1;
	}
	return 0;
}

const isActive = projects => projects.filter(proiect => proiect.active);
const myMap = projects => projects.map(proiect => (
	{ 
	  name: proiect.name,
	  details: proiect.details 
	}
));
const sorted = f => arr => arr.sort(compareByDate);
const sortByLastModified = sorted(compareByDate);
console.log(sortByLastModified(myMap(isActive(projects))));


