//------------------ EXERCITIUL 1 ---------------------

var data = new Date();
console.log();
//"5 April 1981"
const format0 = (data) => {
   let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   format = data.getDate() + " " + months[data.getMonth()] + " " + data.getFullYear();
   return format;
}

//"1981-04-05" 
const format1 = (data) =>  {
    const month = (data.getMonth() + 1).toString().padStart(2, "0");
    const day = data.getDate().toString().padStart(2, "0");
    format = data.getFullYear() + "-" + month + "-" + day;
    return format;
}


// "1981/04/05"
const format2 = (data) =>  {
    const month = (data.getMonth() + 1).toString().padStart(2, "0");
    const day = data.getDate().toString().padStart(2, "0");
    format = data.getFullYear() + "/" + month + "/" + day;
    return format;
}

//"05/04/1981"
const format3 = (data) =>  {
    const month = (data.getMonth() + 1).toString().padStart(2, "0");
    const day = data.getDate().toString().padStart(2, "0");
    format = day + "/" + month + "/" + data.getFullYear();
    return format;
}

//"04/05/1981"
const format4 = (data) =>  {
    const month = (data.getMonth() + 1).toString().padStart(2, "0");
    const day = data.getDate().toString().padStart(2, "0");
    format = month + "/" + day + "/" + data.getFullYear();
    return format;
}

const data_formats = [format0, format1, format2, format3, format4];
data_formats.forEach (format => {
    console.log(format(data));
})
console.log();


//------------------ EXERCITIUL 2 --------------------- (varianta initiala)

const meal = {
    id:1,
    description: 'Breakfast'
};
const updatedMeal = {
    ...meal,
    description: 'Brunch',
    calories:600
};
const functionAsObjectProperty = {
    print: (meals) => {
        meals.forEach(meal => {
          console.log(`id: ${meal.id}`);
          console.log(`description: ${meal.description}`);
        });
      }
};
functionAsObjectProperty.print([meal,updatedMeal])
console.log();

//------------------ EXERCITIUL 2 --------------------- (varianta modificata)
//Nu am avut ce sa modific la exercitiul acesta, totusi am implementat si varianta fara arrow function. 

const functionAsObjectProperty2 = {
    print: function(meals) {
      meals.forEach(function(meal) {
        console.log(`id: ${meal.id}`);
        console.log(`description: ${meal.description}`);
      });
    }
  };
  
  functionAsObjectProperty2.print([meal, updatedMeal]);
  

//------------------ EXERCITIUL 3 ---------------------

// Am folosit exemplul din laboratorul 2 (la care am adaugat Dinner si Snack)
const meals = [
    {id: 1, description: 'Breakfast', calories: 420},
    {id: 2, description: 'Lunch',     calories: 520},
    {id: 3, description: 'Dinner',    calories: 430},
    {id: 4, description: 'Snack',     calories: 100},
    ];
    
  
const nr_calorii = (meals) => {
    var calorii = meals.reduce((total, meal) => total + meal.calories, 0);
    return calorii;
};
      
var calorii = nr_calorii(meals);
console.log("Numarul de calorii: " + calorii);