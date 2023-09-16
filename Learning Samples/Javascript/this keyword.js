let user = {
    name: 'Srikanth',
    address: 'freecodecamp',
    getName: function() {
        console.log(this.name);
    }
};

user.getName();

function decorateLogName(obj) {
      obj.logName = function() {
          console.log(this.name);
      }
  };

  let tom = {
      name: 'Tom',
      age: 7
  };

  let jerry = {
      name: 'jerry',
      age: 3
  };

decorateLogName(tom);

tom.logName();

let getName = function() {
     console.log(this.name);
 }
 
let user2 = {
   name: 'Sriki',
   address: 'Freecodecamp'  
 };

getName.call(user2);

let getName = function(hobby1, hobby2) {
     console.log(this.name + ' lives in '+ this.address + ' and likes ' + hobby1 + ' , ' + hobby2);
 }

let user3 = {
   name: 'Sri',
   address: 'Bangalore'  
 };

let hobbies = ['Swimming', 'Blogging'];
getName.call(user3, hobbies[0], hobbies[1]); 
getName.apply(user3, hobbies);

let newFn = getName.bind(user3, hobbies[0], hobbies[1]);

newFn();



let Cartoon = function(name, animal) {
     this.name = name;
     this.animal = animal;
     this.log = function() {
         console.log(this.name +  ' is a ' + this.animal);
     }
 };

 let tom = new Cartoon('Tom', 'Cat');

tom.log();

// Reference
// https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
