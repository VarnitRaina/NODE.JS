const http = require('http');
const server =http.createServer((req,res)=>{
    if(req.url ==='/'){
    res.end('Welcome to the homepage')
    }
    else if(req.url==='/about'){
        res.end('Here is our short story')
    }
    res.write(`
    <h1>OOPS!</h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">back home</a>`)
})
const port=2000;
server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
}); 
