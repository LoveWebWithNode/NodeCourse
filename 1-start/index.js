const fs = require('fs')


fs.writeFile('/gg.html', 'Hi', () => console.log('destroy it'))
console.log('Prgrm start')
Promise.resolve().then(() => console.log('gg'))
console.log('Prgrm end')