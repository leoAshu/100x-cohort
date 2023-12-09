/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Promise resolved after 1 seconds')
            resolve('One')
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Promise resolved after 2 seconds')
            resolve('Two')
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Promise resolved after 3 seconds')
            resolve('Three')
        }, 3000)
    })
}

async function calculateTime() {
    const start = new Date()

    await waitOneSecond()
    await waitTwoSecond()
    await waitThreeSecond()

    const end = new Date()
    console.log(`Time waited: ${(end - start) / 1000} seconds`)
}

calculateTime()
