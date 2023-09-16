// Metaprogramming in Javascript

// ES6 supports REFLECT and PROXY objects that simplifies metaprogramming in JS.

//What is Metaprogramming?
//It is a programming technique in which programs have the ability to treat other progrms as their data.
//Thus a program can be desinged to read, generate, analyze or transform other programs, and even modify itself //while running.

//It involves writing code that can
//  1. Generate Code
//  2. Manipulate language constructs at run time. This is called as Reflection Metaprogramming.

//What is Reflection in Metaprogramming?

//  1. Introspection: Code is able to inspect itself. It is used to identify very low-level information about //the code.
//  2. Self-Modification: Code is able to modify itself.
//  3. Intercession: Acting on behalf of somebody else. This can be achieved by wrapping, trapping and //intercepting.

 const blog = {
     name: 'freeCodeCamp'
 }
 console.log('Before eval:', blog);

 const key = 'author';
 const value = 'Tapas';
 testEval = () => eval(`blog.${key} = '${value}'`);

// Call the function
 testEval();

 console.log('After eval magic:', blog);


 var users = {
     'Tom': 32,
     'Bill': 50,
     'Sam': 65
 };

 Object.keys(users).forEach(name => {
     const age = users[name];
     console.log(`User ${name} is ${age} years old!`);
 });


 var blog1 = {
     name: 'freeCodeCamp',
     modifySelf: function(key, value) {blog[key] = value}
}

blog1.modifySelf('author', 'Tapas');

console.log("After Self Modification ", blog1);

/////////////////////////////////////////////////////////////////////////////////////////

const employee ={
  firstName:"Srikanth",
  lastName:"Alva"
};
  
let handler = {
    get: function(target, fieldName) {        

        if(fieldName === 'fullName' ) {
            return `${target.firstName} ${target.lastName}`;
        }

        return fieldName in target ?
            target[fieldName] :
                `No such property as, '${fieldName}'!`

    }
};

let proxy = new Proxy(employee, handler);


console.log(proxy.firstName);
console.log(proxy.lastName);
console.log(proxy.org);
console.log(proxy.fullName);

//////////////////////////

const validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('Age is always an Integer, Please Correct it!');
            }
            if(value < 0) {
                throw new TypeError('This is insane, a negative age?');
            }
        }
    }
};
  

let proxy1 = new Proxy(employee, validator);

 proxy1.age = 'I am testing a blunder'; 

 proxy1.age = -1; // will result in error


//////////////////////////

let logHandler = {
    get: function(target, fieldName) {        
        console.log("Log: ", target[fieldName]);
        
        // Use the get method of the Reflect object
        return Reflect.get(target, fieldName);
    }
};

let func = () => {
    let p = new Proxy(employee, logHandler);
    p.firstName;
    p.lastName;
};

func();


// Reference
// https://www.freecodecamp.org/news/what-is-metaprogramming-in-javascript-in-english-please/
  

