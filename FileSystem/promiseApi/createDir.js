import * as fs from 'fs/promises';

try{
    //specify a valid path
    await fs.mkdir('c:\\nodejs');
    console.log("Folder Created");
    
}catch(e){
    console.log(e);
    
}

