function exportsFn1(){
    console.log('I will exported <3')
}
function exportsFn2(){
    console.log('I also will exported >:(')
}

let mySkills = ["programming", "basketball", "swimming", "football", "learning", "work hard"]


exports.mySkills = mySkills
exports.exportsFn2 = exportsFn2
module.exports.exportsFn1 = exportsFn1 //Если будет экспортирована не одна функция
// exports.exportsFn = exportsFn другой вариант записи, более удобный, но под капотом Node js работает именно с module.exports

// module.exports = () => console.log('I will be exported') Если модуль одноцелевой и ничего другого экспортировать не нужно
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑ НЕЛЬЗЯ ЗАМЕНЯТЬ НА ПРОСТО EXPORTS!!!!!