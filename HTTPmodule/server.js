import http from 'http';

//create server
const server = http.createServer((req,res)=>{
    // console.log(req);
    
    res.write("<h1>Welcome to my server!</h1>");
    res.end();
})

//create port

server.listen(8000,()=> console.log("Server running..."));