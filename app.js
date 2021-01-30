// Arrays

// const cars = ['mazda', 'ford', 'bmw', 'mercedes',]
//
// const fib = [1, 1, 2, 3, 5, 8, 13];

// const people = [
//     {name: 'Vlad', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700},
// ]


// console.log(cars)
//
// cars.push('maz')
// cars.unshift('lada')
//
//
// console.log(cars)
//
// shift = cars.shift()
// console.log(shift);
//
// pop = cars.pop()
// console.log(pop)
//
// console.log(cars)
//
// console.log(cars.reverse())

// const index = cars.indexOf('bmw')
// cars[index] = 'porsche'
// console.log(cars[index]);
// console.log(cars);

// const index = people.findIndex(function (person){
//     return person.budget === 3500
// });
//
//
//
// console.log(index);
// console.log(`People 'findIndex' function: ${people[index]}`);
//
// const person = people.find(function (person){
//     return person.budget ===3500
// })
//
// console.log(`People 'find' function: ${person}`);


// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
//
// console.log(`Upper case cars:`);
// console.log(upperCaseCars);
//
// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2)
//
// const filteredNumbers = pow2Fib.filter(num => num > 20)
//
// console.log('Pow 2 fib:')
// console.log(pow2Fib)
// console.log('Filtered numbers:')
// console.log(filteredNumbers)


const people = [
    {name: 'Vlad', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700},
]

const allBudget = people.filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
    }, 0)

console.log('All budget')
console.log(allBudget)

// Exercise 1
// const text = 'Hi, we are learn javascript';
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
