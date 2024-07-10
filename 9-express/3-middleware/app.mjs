import express from "express"
// import morgan from "morgan" //middleware LOGGER import


const app = express()

app.use((req, res, next) => {
    let data = ''
    req.on('data', chunk => data += chunk)
    req.on('end', () => {
        const parsedData = JSON.parse(data)
        req.body = parsedData
        next()
    })
})

// const logger = (req, res, next) => {
//     console.log(req.method)
//     next()                           MY MIDDLEWARE FN
// }
// app.use(logger)                      here i use it

// app.use(morgan("tiny")) //logger   ( it works =) ) 

app.use((req, res, next) => {
    console.log(req.body)
    res.send('GG')
})


app.listen(5001, () => {
    console.log("Server started on port 5000")
})