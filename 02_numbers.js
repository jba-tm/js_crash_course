// 1. Number
// const num = 42
// const float = 42.42
// const pow = 10e3
// console.log(num)
// console.log(float)
// console.log(pow)
//
// console.log('MAX_SAVE_INTEGER: ', Number.MAX_VALUE)
// console.log('Math.pow 53: ', Math.pow(2, 53) - 1)
// console.log('MAX_SAFE_INTEGER: ', Number.MAX_SAFE_INTEGER)
// console.log('MAX_VALUE: ', Number.MAX_VALUE)
// console.log('MIN_VALUE: ', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY: ', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY: ', Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log('Number Nan', Number.NaN) // Not a number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log('Is nan: ', Number.isNaN(weird));
// console.log('Is Infinity: ',isFinite(Infinity))
// console.log('Is Infinity: ', isFinite(42));
//
// const stringInt = '42'
// const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt)+2)
// console.log(Number(stringInt)+2)
// console.log(+stringInt+2)
//
// console.log(parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2);

// console.log(0.4+0.2)
// console.log(+(0.4 + 0.2).toFixed(1));
// console.log(parseFloat((0.4+0.2).toFixed(1)))

// 2. BigInt
// console.log(9007199254740991999999n - 900719925474099199999n);
// console.log(-9007199254740991999999n);
// console.log(9007199254740991999999.23333n) // error
// console.log(10n - 4) // error

// console.log(10n - BigInt(4));
// console.log(5n/2n)

// 3. Math
// console.log(Math.E)
// console.log(Math.PI);
//
// console.log(Math.sqrt(25));
// console.log(Math.pow(5, 3))
//
// console.log(Math.abs(-42))
//
// console.log(Math.max(42, 24, 432, 423, 55, ))
// console.log(Math.min(42, 24, 432, 423, 55, ))
//
// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.5))
// console.log(Math.trunc(4.9))
// console.log(Math.sin(3))
// console.log(Math.random(1, 10))

// 4. Math example
// function getRandomBetween(min, max){
//     return Math.floor(Math.random() * (max-min+1) + min);
// }

// const rand = getRandomBetween(10, 42);
// console.log(rand)