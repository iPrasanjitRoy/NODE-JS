// USE Type = Module In Package JSON File For Using ES Module ==>   "Type": "Module" 

import { Simple } from "./8. ES Module Func.mjs"
Simple();

import { Simple1 as Demo } from "./8. ES Module Func.mjs"
Demo();


// THIS IS Calling The Deafult Exporter 
import WriteAnything from "./8. ES Module Func.mjs"
WriteAnything();


import { Okay, NoMore } from "./8. ES Module Func.mjs"
Okay();
NoMore();


// TO Import All The Function 
import * as AllFunc from "./8. ES Module Func.mjs"
console.log(AllFunc);
console.log(AllFunc.Simple());

