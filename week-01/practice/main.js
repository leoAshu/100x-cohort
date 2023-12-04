const user1 = {
    name: 'Ash',
    age: 27,
}

const user2 = {
    name: 'Leo',
    age: 25,
}

const users = [user1, user2]

for (let i = 0; i < users.length; i++) {
    console.log('Hello, ' + users[i].name)
}
