import * as fs from 'fs/promises';


try{
    await fs.appendFile("file.txt"," New Data added to file...")
}catch(e){
    console.log(e);
    
}