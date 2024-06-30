import fs, { read } from 'fs'

const fileName = './stream-module 8/abc/files/test.txt'
const copiedFileName = './stream-module 8/abc/files/test-copied2.txt'

const readStream = fs.createReadStream(fileName)
const writeStream = fs.createWriteStream(copiedFileName)

readStream.pipe(writeStream)

writeStream.on('finish', () => console.log('File was copied'))