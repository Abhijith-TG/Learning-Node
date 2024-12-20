import path from 'path';

//getting directory name 
console.log(path.dirname("c:\\Users\\Desktop\\NodeJS\\LearningNode\\learnPath.js"));
//getting file name
console.log(path.basename("c:\\Users\\Desktop\\NodeJS\\LearningNode\\learnPath.js"));
//remove .js 
console.log(path.basename("c:\\Users\\Desktop\\NodeJS\\LearningNode\\learnPath.js",".js"));
//get extension only
console.log(path.extname("c:\\Users\\Desktop\\NodeJS\\LearningNode\\learnPath.js"));
//using join
console.log(path.join("c:","new","user","file",".js"));

console.log(path.join("c:","new","user","file",".js",".."));

console.log(path.join("c:","new","user","file",".js","..",".."));

//used for normalizing like removing unwanted \
console.log(path.normalize("c:\\Users\\Desktop\\NodeJS\\LearningNode\\learnPath.js"));

//parse() used for getting details about the path

console.log(path.parse("c:\\Users\\Desktop\\NodeJS\\LearningNode\\learnPath.js"));

//using the object name we can get alone values
console.log(path.parse("c:\\Users\\Desktop\\NodeJS\\LearningNode\\learnPath.js").dir);

console.log(path.parse("c:\\Users\\Desktop\\NodeJS\\LearningNode\\learnPath.js").name);










