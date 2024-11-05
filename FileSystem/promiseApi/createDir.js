import { log } from 'console';
import * as fs from 'fs/promises';

try{
    await fs.mkdir('c:\\nodejs');
    console.log("Folder Created");
    
}catch(e){
    console.log(e);
    
}

