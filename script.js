const optellen1 = (...args) => args.reduce((acc, item) => acc + item);

console.log(optellen1(1, 2, 3, 4, 5, 6)); // verwachte uitkomst: 21

const optellen2 = (num1, num2, num3) => num1 + num2 + num3;

const cijfers = [1, 2, 3];

console.log(optellen2(...cijfers)); // verwachte uitkomst: 6
