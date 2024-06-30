// Расширение класса EventEmitter с помощью super() и
import EventEmitter from 'events'

class video extends EventEmitter{
    constructor(name, description){
        super() // теперь этот объект включает в себя объект EventEmitter (все теперь также тут)
        this.name = name
        this.description = description
        this.likesQty = 0
        this.commentsQty = 0

        this.on('CommentEvent', (username, commentText) => {
            console.log(`'${username}' has commented your post \nText: ${commentText}`)
        })

        this.on('Like', username => {
            console.log(`'${username}' liked your video <3`)
        })


        console.log(`'${this.name}' has posted new video! \nDescription: ${this.description}`)
    }
    like(username){
        this.likesQty++
        this.emit('Like', username)
    }
    comment(username, commentText){
        this.commentsQty++
        this.emit('CommentEvent', username, commentText)
    }
}

const myFirstVideo = new video('Артем про 2010 сигма слово пацана 1000%', 'Эщкерия, страна великая, где медные быки могучи и сильны!')

myFirstVideo.like('Mellstroy')
console.log(myFirstVideo.likesQty)
myFirstVideo.like('Molvin')
console.log(myFirstVideo.likesQty)

myFirstVideo.comment('anonimus', 'Haha');