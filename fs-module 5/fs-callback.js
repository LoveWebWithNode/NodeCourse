const fs = require('fs')

fs.writeFile('./new-file.txt', 'New file >=)', err => {
    if (err) console.log(err)
    else {
        console.log('File has written')
        fs.appendFile('./new-file.txt', '\n\n New string <3', err => {
            if (err) console.log(err)
            else {
                console.log('File has changed')
                fs.rename('./new-file.txt', './new-file_nameChanged', err =>{
                    console.log('File has renamed')
                })
            }
        })
    }
})