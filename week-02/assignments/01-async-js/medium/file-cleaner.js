const fs = require('fs')

const readFile = (filename) => {
    return new Promise((resolve) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            resolve(data)
        })
    })
}

const cleanData = (data) => {
    data = data.trim().split(/\s+/)
    return data.join(' ')
}

const writeFile = (filename, data) => {
    return new Promise((resolve) => {
        fs.writeFile(filename, data, (err) => {
            console.log('Successfully written to file.')
        })
    })
}

const cleanFile = async (filename) => {
    let data = await readFile(filename)
    data = cleanData(data)
    await writeFile(filename, data)
    console.log('File cleaned successfully.')
}

cleanFile('test.txt')
