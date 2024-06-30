const { error } = require('console')
const fs = require('fs')

const readStream = fs.createReadStream('./text.txt', 'utf8')

readStream.on('data', dataChunk => {
    console.log(dataChunk)
})

readStream.on('end', () => {
    console.log('Data has readed')
})

readStream.on('error', () => {
    console.error(error);
})