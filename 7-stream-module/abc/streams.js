const { type } = require('os')
const stream = require('stream')

const upperCaseStream = stream.Transform({
    transform(chunk, encoding, cb){
        const upperCasedChunk = chunk.toString().toUpperCase()
        cb(null, upperCasedChunk)
    }
})

const reverseStream = stream.Transform({
    transform(chunk, encoding, cb){
        // мой варик без энтера (но короче)
        const arrayOfChars = chunk.toString().split('')
        arrayOfChars.pop()
        const reversedChunk = arrayOfChars.reverse().join('')

        // 2 варик с видоса с энтером
        // const arrayOfChars = chunk.toString().split('') 
        // const lastChar = arrayOfChars.pop()
        // const reversedChunk = arrayOfChars.reverse().concat(lastChar).join('')
        cb(null, reversedChunk)
    }
})



process.stdin
    .pipe(reverseStream)
    .pipe(upperCaseStream)
    .pipe(process.stdout)