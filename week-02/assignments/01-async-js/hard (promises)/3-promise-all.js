/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

    await Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])

    const end = new Date()
    console.log(`Time waited: ${(end - start) / 1000} seconds`)
}

calculateTime()
