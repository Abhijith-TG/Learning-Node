import * as fs from 'fs';

fs.mkdir('Game',(e)=>{
    if(e) throw e;
    console.log("Created");
    
});