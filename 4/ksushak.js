console.log('Prgrm start')

const { getRandomInt } = require('./random')

console.log(getRandomInt)

const ksuhakInsults = [
    'Ксюша хрюша',
    'Ксюшара ботяра',
    'Ксюшак говна тюфяк'
]
function ksuhakInsultFn(){
    console.log(ksuhakInsults[getRandomInt(ksuhakInsults.length)])
}


for (let x = 0; x < 10000; x++) {
    ksuhakInsultFn()
}
