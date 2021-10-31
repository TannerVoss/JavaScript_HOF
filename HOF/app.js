console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

{
    const calories = [{
            consumed: 2000,
            expended: 1300,
        },
        {
            consumed: 1400,
            expended: 1800,
        },
        {
            consumed: 1900,
            expended: 3000,
        },
        {
            consumed: 2000,
            expended: 2500,
        },
        {
            consumed: 1900,
            expended: 900,
        },
        {
            consumed: 1800,
            expended: 2000,
        },
        {
            consumed: 2000,
            expended: 2100,
        },
    ];

    let energyBalance = calories.map(function(value) {
        return value.consumed - value.expended;

    });

    console.log(energyBalance);
}


function plus(number) {
    return (plusNumber) => plusNumber + number;
}

let plus15 = plus(15);
console.log(plus15(10));