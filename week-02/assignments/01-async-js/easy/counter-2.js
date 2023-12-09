function startCounter(tick) {
    process.stdout.write(`Time elapsed: ${tick} seconds\r`)
    tick += 1

    setTimeout(() => {
        startCounter(tick)
    }, 1000)
}

startCounter(0)
