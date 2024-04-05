//0.5.1 Obiecte imuabile

const meal = {
description: "Dinner"
};

//Exercitiul 1
console.log("Exercitiul 1.1");
const updatedMeal = {
    ...meal,
    calories:200
};
console.log(updatedMeal);

//Exercitul 2
console.log("Exercitiul 1.2");
const updatedMeal_2 = {
    ...meal,
    calories:updatedMeal.calories+100
};
console.log(updatedMeal_2);

//Exercitiul 2
console.log("Exercitiul 1.3");
const {calories, ...updatedMeal_3} = updatedMeal;
console.log(updatedMeal_3);

//Exercitiul 4
console.log("Exercitiul 1.4");
const dailymeal = {
    micDejun: {paine_prajita:2 , ceai: 1, unt: 1, calorii: 275},
    pranz: {pui: 1, cartofi_prajiti: 1, salata_muraturi: 1, calorii: 700},
    cina: {pizza: 1, sos: 1, calorii: 920}
  };
  function suma_calorii(dailymeal) {
        let suma = 0;
        for(let tip_masa in dailymeal)
        {
            suma = suma + dailymeal[tip_masa].calorii;
        }
        return suma;
  }
  console.log(dailymeal);
  console.log(suma_calorii(dailymeal));



  //0.5.2 Siruri imuabile

  //Exercitiul 1
  console.log("Exercitiul 2.1");
  const friends =["Nahoi Ioan", "Dragan Denisa"];
  console.log(friends);

  //Exercitiul 2
  console.log("Exercitiul 2.2");
  const updatedFriends = [
    ...friends,
    "Pop Ioana"
  ]
  console.log(updatedFriends);

  //Exercitiul 3
  console.log("Exercitiul 2.3");
  
  const friendsLength = updatedFriends.map(
    function fr_length(friend)
  {
     return friend.length;
  }
  );
  console.log(friendsLength);

  //Exercitiul 4
  console.log("Exercitiul 2.4");
  function Friend_with_longest_name(updatedFriends)
  {
    let max = 0;
    for(let friend in updatedFriends)
        if(updatedFriends[friend].length > max)
        {
            max = updatedFriends[friend].length;
        }
            

    return max;
  }
  const friendToRemove = Friend_with_longest_name(updatedFriends);
  const shorterFriend = updatedFriends.filter(function(friend){
    if(friend.length!=friendToRemove){
        return friend;
    }

});
  
  console.log(shorterFriend);


  

