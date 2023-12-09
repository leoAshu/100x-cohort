const fs = require('fs')

fs.writeFile('./output.txt', 'Hello world', (err) => {
    console.log('Successfully written to file.')
})
