const fs = require('fs')
const qs = require('querystring')
const { comments } = require('./comments')

function getHome(req, res){
    fs.readFile('files/index.html', (err, data) => {
        if(err){
            console.log(err)
            res.statusCode = 500
            res.end('Server error')
        }else{
            res.statusCode = 200
            res.setHeader('content-type', 'text/html')
            res.end(data)
        }

    })
}

function getHTMLHello(req, res){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Hello from node</h1>')
    res.end()
}

function getHTMLMain(req, res){
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('Its main page')
    res.end()
}

function getComments(req, res){
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(comments))
}

function get404(req, res){
    res.statusCode = 404 //если страница не найдена (нет такого пути)
    res.setHeader('Content-Type', 'text/html')
    res.write('Page not a found')
}

function postComment(req, res){
    res.setHeader('Content-Type', 'text/plain')

    if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
        let body = ''

        req.on('data', chunk => {
            body += chunk
        })

        req.on('end', () => {
            try{
                const comment = qs.parse(body)
                console.log(typeof(comment.id))
                comment.id = parseInt(comment.id)
                console.log(typeof(comment.id))
                comments.push(comment)
                res.statusCode = 200
                res.end('Comment data was recived')
            }catch(err){
                res.statusCode = 400
                res.end('Ivalid form data')
            }
            
        })

    }

    else if(req.headers['content-type'] === 'application/json'){
        let commentJSON = ''
        
        req.on('data', (chunk) => commentJSON += chunk)        
        
        req.on('end', () => {
            try{
                comments.push(JSON.parse(commentJSON))
                res.statusCode = 200
                // console.log(commentJSON)
                res.end('Comment data was recived')
            }
            catch(error){
                res.statusCode = 400
                res.end('Invalid data')
            }
        })
    }
    else{
        res.statusCode = 400
        res.end('Comment must be in JSON format or as forms')
    }
    
}

module.exports = {
    getHome,
    getHTMLHello,
    getHTMLMain,
    get404,
    getComments,
    postComment
}