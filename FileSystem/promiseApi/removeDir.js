import * as fs from "fs/promises";

try{
    fs.rmdir('c:\\Game\\newFolder');
    console.log("Removed");
    
}catch(e){
    console.log(e);
    
}