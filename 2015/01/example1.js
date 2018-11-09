const testData = require('./example1Data.js')


let splitData = testData.split('') ;

let floorNum = 0
splitData.forEach((item) => {
    if (item === '(') {
        floorNum++
    } else { 
        floorNum--
    }
})

console.log('The floornum is ' + floorNum)








