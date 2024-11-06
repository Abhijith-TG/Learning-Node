// const fs = require('fs');
import * as fs from "fs/promises";

try{
    await fs.writeFile("file.txt","Created using node");
    console.log("File Created");
    
}catch(e){
    console.log(e);
     
}




