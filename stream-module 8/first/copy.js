const fs = require('fs')

const readStream = fs.createReadStream('./text.txt', 'utf8')
const writeStream = fs.createWriteStream('./text_copied')

readStream.pipe(writeStream)

writeStream.on('close', () => {
    console.log('File was copied')
})