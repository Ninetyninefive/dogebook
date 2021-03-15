const Dog = {
    name: '',
    nick: '',
    age: 0,
    bio: '',
    friends: []
  };
   
   //convert JSON animal into a string
   var dehydratedDog = JSON.stringify(Dog);
   
   //save it with local storage
   window.localStorage.setItem('Dog', Dog);
   
   //get 'animal' and rehydrate it  (convert it back JSON)
   var rehydratedDog = JSON.parse(window.localStorage.getItem('Dog'));