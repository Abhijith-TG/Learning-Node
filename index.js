//import and export only work if include "type":"module" 
// in package.json
import greet from './greet.js'

const name = "Sam";
greet(name);