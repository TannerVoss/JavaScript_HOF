const sales = [{
        subTotal: 19.5,
        taxRate: 0.1,
    },
    {
        subTotal: 20,
        taxRate: 0.1,
    },
    {
        subTotal: 19.99,
        taxRate: 0.1,
    },
    {
        subTotal: 100.72,
        taxRate: 0.1,
    },
];

let totals = sales.map(function(value) { // value is the first object in the first set of brackets
    return value.subTotal + value.subTotal * value.taxRate;
});

console.log(totals)