//import and export only work if include "type":"module" 
// in package.json
import greet from './greet.js'
//import multiple data
import {p1,p2,p3} from './peoples.js'

const name = "Sam";
greet(name);

console.log(p1,p2,p3);
