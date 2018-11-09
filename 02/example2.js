const testData = require('./example2Data.js')

let totalArea = 0

// split and create boxes into array
    let arrayData = testData.split('\n')
    //console.log(arrayData)

// split box dimensions into l w h
arrayData.forEach((box) => {
    //console.log(box)
    let lwh = box.split('x')
    //console.log(lwh)

// Calaculate Box Area. f(x) = 2*l*w + 2*w*h + 2*h*l. 
    let boxArea =  (2 * lwh[0] * lwh[1]) + (2 * lwh[1] * lwh[2]) + (2* lwh[0] * lwh[2])
    //console.log(boxArea)

// Find smallest side of box and add
    let minBoxSide = lwh.sort(function(a, b){return a - b});
    
// calculate additional material required
    let additional = (minBoxSide[0] * minBoxSide[1])

// add additional material to boxArea
    boxArea += additional
    //console.log(boxArea)

// Add box to totalArea
    totalArea = totalArea + boxArea
})

console.log(`Final value is ${totalArea}`)



