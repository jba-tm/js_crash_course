const cars = ['mazda', 'ford', 'bmw', 'mercedes']
// const people = [
//     {name: 'Vlad', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700},
// ]
const fib = [1, 1, 2, 3, 5, 8, 13, 21,]

// cars.push('kamaz')
// console.log(cars)
//
// cars.unshift('kia')
//
// console.log(cars)
//
// const first=cars.shift()
// console.log(first)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars);

// const index = cars.indexOf('bmw!')
// cars[index]='porsche'
// console.log(cars)

// const index = people.findIndex(item=>item.budget===3500)
//

// let findedPerson
// for (const person of people) {
//     if(person.budget===3500){
//         findedPerson=person
//     }
// }
// console.log(findedPerson)
//
// people.forEach(person => {
//     if(person.budget===1700){
//         findedPerson=person
//     }
// })
//
// console.log(findedPerson)


// const person = people.find(item=>item.budget===3500)
// console.log(person);

// console.log(cars.includes('mazda!'))

// const upperCaseCars = cars.map(car=>car.toUpperCase())
// console.log(upperCaseCars)

const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
//
// const pop2Fib = fib.map(pow2).map(Math.sqrt)
// const pop2Fib = fib.map(pow2)
// const moreTwenty = pop2Fib.filter(num=>num>20)
//
// console.log(pop2Fib)
// console.log(moreTwenty)


const people = [
    {name: 'Vlad', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700},
]

const allBudget = people.filter(item => item.budget > 2000)
    .reduce((acc, person) =>
        acc += person.budget, 0)

console.log(allBudget)

//Exercise 1:
// const text = 'Hi, we learn javascript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)