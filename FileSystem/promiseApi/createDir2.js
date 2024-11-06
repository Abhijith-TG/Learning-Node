import * as fs from "fs/promises";

try{
    fs.mkdir("c:\\Game\\newFolder",{recursive: true});
    console.log("Created");
    
}catch(e){
    console.log("New",e);
    
}