const { mySkills, exportsFn1, exportsFn2 } = require('./exports')
const { myFunction } = require('./single-export')
exportsFn1()
exportsFn2()

for(let i = 0; i < mySkills.length; i++){
    const element = mySkills[i]
    console.log(element)
}

myFunction()