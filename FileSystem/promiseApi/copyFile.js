import * as fs from 'fs/promises'

try{
    await fs.copyFile("file.txt","info.txt");
    console.log("File copied");
    
}catch(e){
    console.log(e);
    
}