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

interface User {
    firstName: string
    lastName: string
    age: number
}

const isUserLegal = (user: User) => {
    return user.age > 18
}

const helloUser = (user: User) => {
    console.log(`Hello ${user.firstName}`)
}

type NumberOrStringArr = number[] | string[]
const firstElement = (arr: NumberOrStringArr) => {
    return arr[0]
}
// unable to infer what is the type of result if valid list provided
// console.log(firstElement(['abx', 'cde']).toUpperCase())

const genericFirstElement = <T>(arr: T[]) => {
    return arr[0]
}
// fixes the issue above
console.log(genericFirstElement<string>(['a', 'b', 'c']).toUpperCase())
console.log(genericFirstElement<number>([1, 2, 3]).toFixed())
