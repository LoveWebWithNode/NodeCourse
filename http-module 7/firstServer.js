const http = require('http')
const { get404, getHTMLMain, getComments, getHTMLHello, postComment, getHome } = require('./handlers')
const PORT = 5023

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/'){
        return getHome(req, res)
    }
    if(req.method === 'GET' && req.url === '/hello'){
        return getHTMLHello(req, res)
    }
    if(req.method === 'GET' && req.url === '/main'){
        return getHTMLMain(req, res)
    }
    if(req.method === 'GET' && req.url === '/comments'){
        return getComments(req, res)
    }

    if(req.method === 'POST' && req.url === '/comments'){
        return postComment(req, res)
    }
    get404(req, res)
})

server.listen(PORT, () => {
    console.log("Server is listing now")
})