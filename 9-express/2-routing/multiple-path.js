const express = require('express')

const app = express()

const getRootPage = (req, res) => res.send('Root page')
const getComments = (req, res) => res.send('Comments page')
const postComment = (req, res) => {
    console.log('post')
    res.send('Comment was recieved')
}
const getComment = (req, res) => res.send(`Comment id: ${req.params.commentId}`)

app.get('/', getRootPage)
app.get('/comments', getComments)
app.post('/comments', postComment)
app.get('/comments/:commentId', getComment)

app.listen(5005, () => console.log('Server started on port 5005'))