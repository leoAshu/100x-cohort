const fs = require('fs')

fs.readFile('./3-read-from-file.md', 'utf-8', (error, data) => {
    console.log(data)
})

for (let i = 0; i < 10000000000; i++) {
    a = 2 + 1
}
console.log('end of script')
