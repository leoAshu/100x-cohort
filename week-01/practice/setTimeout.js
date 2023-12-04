function greet() {
    console.log('Hello World!');
}

setTimeout(greet, 1 * 1000)

let time = 0
function tick() {
    time += 1
    console.log(time);
}

setInterval(tick, 1 * 1000)