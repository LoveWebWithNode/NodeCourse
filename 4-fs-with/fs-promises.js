const fs = require('node:fs/promises')

fs.writeFile('./new-file.txt', 'The text')
    .then(() => console.log('File has written'))
    .then(() => fs.appendFile('./new-file.txt', '\n One more line'))
    .then(() => console.log('File has changed'))
    .then(() => fs.rename('./new-file.txt', './new-file_nameChanged.txt'))
    .then(() => console.log('File name has changed'))
    .catch(err => console.log(err))