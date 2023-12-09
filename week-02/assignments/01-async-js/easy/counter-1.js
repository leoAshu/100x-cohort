function startCounter(tick) {
    setInterval(() => {
        process.stdout.write(`Time elapsed: ${tick} seconds\r`)
        tick += 1
    }, 1000)
}

startCounter(0)
