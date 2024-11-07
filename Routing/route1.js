import http from 'http'

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("Welcome to home");
    }else if(req.url==='/about'){
        res.end("About");

    }else
    res.end("error");

})

server.listen(3000,()=>console.log("Server up!"));