const fs = require('fs')

const writeStream = fs.createWriteStream('./text.txt')

writeStream.write('Hello 1 \n')
writeStream.write('Hello 2 \n')
writeStream.write('Hello 3 \n')
writeStream.write('Hello 4 \n')

writeStream.end()