const express = require('express')

const app = express()

const firstHandler = (req, res, next) => {
    console.log('First handler')
    next() //для перехода к следующему хэндлеру (функции secondHandler)
}

const secondHandler = (req, res) => res.send('Response from Express')

app.get('/', firstHandler, secondHandler)
app.listen(5001, () => console.log('Server is started on port 5001'))