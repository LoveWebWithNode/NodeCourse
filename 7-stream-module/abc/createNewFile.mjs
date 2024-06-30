import FileExtention from "./extentionOfFile.mjs"
import fs from "fs"
import path from "path"

if(!process.argv[2] || !process.argv[3]){
    console.log('Filename and lines qty must be supplied as arguments')
    process.exit(0)
}

const fileName = process.argv[2]
const linesQty = parseInt(process.argv[3])

if(FileExtention.isHaveExtention(fileName) === false){
    console.log('Created file must be have an extention')
    process.exit(0)
}

if(isNaN(linesQty)){
    console.log('Lines qty must be a number')
    process.exit(0)
}

const writeFileStream = fs.createWriteStream(path.join('./files', fileName))

for (let i = 1; i <= linesQty; i++) {
    writeFileStream.write(`${i} line \n`)
}

writeFileStream.end(() => {
    console.log(`Automatically generated file ${fileName} was generated`)
})