const x: number = 1
console.log(x)

const hello = (name: string) => {
    console.log(`Hello ${name}`)
}
hello('Ashutosh')

const sum = (a: number, b: number): number => {
    return a + b
}
console.log(sum(4, 5))

// type inference
const isLegal = (age: number) => {
    return age > 18
}

const runAfter1s = (func: () => void) => {
    setTimeout(func, 1000)
}
runAfter1s(() => console.log('Hello there!'))
