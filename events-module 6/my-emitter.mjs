import { EventEmitter, setMaxListeners } from 'node:events'

const myEmitter = new EventEmitter()
// also works with .on (.on is alias to .addListener)
myEmitter.addListener('Something', () => { //Multiple
    console.log('Event!!!')
})

setTimeout(() => myEmitter.emit('Something'), 2000) 

myEmitter.once('Something second', () => {
    console.log('I can be showed once only')
})
myEmitter.addListenersetMaxListeners(25)
myEmitter.emit('Something second')

// myEmitter.off('Something', <имя функции, которую мы вызываем при этом событии>)