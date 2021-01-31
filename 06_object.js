const person = {
    name: 'Vlad',
    age: 26,
    isProgrammer: true,
    languages: ['ru', 'en', 'de'],
    // 'complex key': 'Complex Value',
    // [`key_${1+3}`]: 'Computed Key',
    greet() {
        console.log('greet from person')
    },
    info() {
        console.log(this)
        console.log('Information about person with name: ', this.name)
    }

}

// console.log(person.name)
// console.log(person['age'])
// const isProgrammerKey = 'isProgrammer'
// console.log(person["isProgrammer"])
// console.log(person["complex key"])
// person.greet()
//
// person.age++
//
// person.languages.push('by')
// person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// const {name, age: personAge = 10, languages} = person
// console.log(name, personAge, languages)

// for (let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log('Key:', key)
//         console.log('Value: ', person[key])
//     }
// }

// const keys = Object.keys(person);
// console.log(keys)

// Object.keys(person).forEach(key=>{
//     console.log('Key: ', key)
//     console.log('Value: ', person[key])
// })

// Context
// person.info()

const logger = {
    keys() {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues() {
        // "key": value
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`)
        })
        // const self = this

        // Object.keys(this).forEach(function(key) {
        //     console.log(`"${key}": ${this[key]}`)
        // }.bind(this))
    },
    withParams(top=false, between=false, bottom=false){
        if(top){
            console.log('---------- Start ----------')
        }

        Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if(between && index!==array.length-1){
                console.log('--------------------')
            }
        })
        if(bottom){
            console.log('---------- End ----------')
        }
    }
}

// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// logger.keysAndValues.call({a: 1, c: {b:2}})
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])