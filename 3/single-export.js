const { exportsFn2 } = require('./exports')
exportsFn2()

const myFunction = () => {
    console.log('It isnt your function')
}

module.exports.myFunction = myFunction