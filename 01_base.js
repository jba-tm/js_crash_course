const person = {
    firstName: 'Batyr',
    lastName: 'Jumageldieyw',
    year: 1995,
    greet: function (){
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
console.log(person)
person.isProgrammer = true

person.greet()

