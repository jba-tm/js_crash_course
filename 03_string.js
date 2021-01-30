// 1. String
// const name = 'Batyr'
// const age = 18
//
// function getAge() {
//     return age;
// }
//
// // const output = `Hi, my name is ${name} and I'm ${age<20?'low': 'high'} years old.`
//
// console.log(output)

// const name = 'Batyr'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.startsWith('Ba'))
// console.log(name.endsWith('tyr'))
// console.log(name.repeat(3))
// const string = '         password          '
// console.log(string.trim()
// console.log(string.trimRight())
// console.log(string.trimLeft())
// console.log(string.trimStart())
// console.log(string.trimEnd())

const personName = 'Vladilan'
const personName2 = 'Maxim';
const  personAge = 26
const personAge2 = -10

function logPerson(s, name, age) {
    if (age<0){
        age = 'Does not born yet'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const output = logPerson`Name: ${personName}, Age: ${personAge}`
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}`

console.log(output)
console.log(output2)


