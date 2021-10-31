let numbers = [1, 2, 3, 4, 5];

let hobbit = {
    name: "Frodo",
    age: 51,
};

//Iterable object, e.g. Arrays, Maps, 
for (let value of numbers) {
    console.log(value);
}


// any objects, iterates over properties and
for (let prop in hobbit) {
    console.log(hobbit[prop])
}



// new example

function createGreeting(message) {
    return function(name) {
        console.log(`${message}, ${name}!`);
    };
}

let halloweenGreeting = createGreeting("Happy Halloween"); // breaks down to = console.log(`Happy Halloween, ${name}!);
let christmasGreeting = createGreeting("Merry CHristmas");

halloweenGreeting("Tanner");
christmasGreeting("Tanner");



// new example

function add(original) {
    return function(newNumber) {
        return original + newNumber;

    };
}

let add100 = add(100);
console.log(add100(50));



const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function(value) {
    console.log(value * 10);
});


// new example

const sales = [{
        subTotal: 19.5,
        taxRate: 0.1,
    },
    {
        subTotal: 20,
        taxRate: 0.1,
    },
    {
        subTotal: 19.99
        taxRate: 0.1,
    },
    {
        subTotal: 100.72,
        taxRate: 0.1,
    },
];

let totals = sales.map(function(value) { // value is the first object in the first set of brackets
    return value.subtotal + value.subtotal * value.taxRate;
});

console.log(totals)