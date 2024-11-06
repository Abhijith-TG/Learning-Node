import * as fs from 'fs/promises';
 
try{
    const files = await fs.readdir("c:\\Game");
        files.map((file)=>{
            console.log(file);
            
        })
        
}catch(e){
        console.log(e);
        
    }