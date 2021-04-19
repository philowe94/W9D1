const sum = function (...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++){
        sum += args[i];
    };

    return sum;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind1 = function (context) {

    const fn = this;
    let bindTimeArgs = Array.from(arguments).slice(1);

    return function boundFunc() {

        let callTimeArgs = Array.from(arguments);
        return fn.apply(context, bindTimeArgs.concat(callTimeArgs));
    }
}

Function.prototype.myBind2 = function (context, ...bindTimeArgs) {
    return (...callTimeArgs) => {
        return this.apply(context, bindTimeArgs.concat(callTimeArgs));
    }
}

  

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}



class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");
const joe = new Dog("Joe");

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // // Pavlov says meow to a tree!
// // // true

// // // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // // Pavlov says meow to Markov!
// // // true

// // // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // // Pavlov says meow to me!
// // // true


// /////////////////////Currying



function curriedSum(numArgs) {
    let numbers = [];

    let _curriedSum = function(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return sum(...numbers);
        } else {
            return _curriedSum;
        }
    };

    return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
    let fn = this;
    // debugger;
    let args = [];
    let _curriedFunc = function(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return fn.apply(null, args);
        } else {
            return _curriedFunc;
        }
    }
    return _curriedFunc;
}

// let curriedSays = markov.says.curry(2);

// curriedSays(arg1); //returns nothing
// curriedSays(arg2); //returns something, now that we hit numArgs === 2
