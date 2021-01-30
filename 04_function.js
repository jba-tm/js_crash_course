// // Function
//
// // 1. Function Declaration
// function greet(name){
//     console.log('Hi - ' + name);
// }
//
// // greet('Maxim')
//
// // 2. Function Expression
// const greet2 = function (name){
//     console.log('Hi high - ' + name);
// }
//
// // greet2('Maxim')
//
// // console.log(typeof greet)
// // console.dir(greet)
// // 3. Anonymous function
//
// let counter = 0
//
// const interval =  setInterval(function (){ // setTimeout
//     if (counter === 5) {
//         clearInterval(interval); // clearTimeout
//     }else {
//         console.log(++counter)
//
//     }
// }, 1000)

// 4 Arrow function
function greet(name) {
    console.log('Hi high - ' + name);
}

const arrow = (name) => {
    console.log('Hi - ' + name)
}

arrow('Maxim')

const pow2 = num => num ** 2

console.log(pow2(5))

// 5. Default parameters
const sum = (a = 0, b = 0) => a + b

console.log(sum(41, 5))

function sumAll(...all){
    console.log(all)
    let result = 0;
    for (let num of all) {
        result += num;

    }
    return result;

}

const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);
console.log(res);

// 6 Замыкание
function createMember(name){
    return function(lastname){
        console.log(name +' '+ lastname)
    }
}

const logWishLastName = createMember('Maxim')

console.log(logWishLastName('Kuznechow'))