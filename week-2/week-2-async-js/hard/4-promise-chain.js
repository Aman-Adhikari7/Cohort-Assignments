/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

    return new Promise((resolve) => {
        setTimeout(()=>{

            resolve()
        },t*1000)
        
    })

}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(()=>{

            resolve()
        },t*1000)
        
    })

}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(()=>{

            resolve()
        },t*1000)
        
    })

}

async function calculateTime(t1, t2, t3) {
    const hehe = Date.now()

    const p1 = wait1(t1)
    const p2 = wait2(t1)
    const p3 = wait3(t1)

    await p1
    await p2
    await p3


    const totalTime = Date.now() - hehe;
    console.log('Total time:', totalTime);

}

// module.exports = calculateTime;
