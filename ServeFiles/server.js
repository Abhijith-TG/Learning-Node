import fs from 'fs';
import http from 'http';

const  server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead('200','ok',{"content-type":"text/html"} );

        fs.readFile("LearningNode/ServeFiles/public/index.html",(e,data)=>{
            if(e) throw e;
            res.end(data);
        })
    }else{
        res.writeHead('404','bad',{"content-type":"text/html"} );

        fs.readFile("LearningNode/ServeFiles/public/404.html",(e,data)=>{
            if(e) throw e;
            res.end(data);
        })
    }
});

server.listen(3000,()=>{
    console.log("Server up!");
    
})