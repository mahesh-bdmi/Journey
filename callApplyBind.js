person1 = {
    firstName: "Mahesh",
    age: 32,
    about: function(gender,greeting) {
        console.log(this.firstName, this.age,gender,greeting)
    }
  };
  
  person2 = {
      firstName: "Eshan",
      age: 2,
    };
  
person1.about.call(person2,"male",'male') //we can change the value of this
person1.about.apply(person2,['hello','world']) //allows arguments as array
person1.about.bind(person2,['hello','world'])() //returns a function
