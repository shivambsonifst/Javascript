import greetings from "./export";

let msg = greetings();

console.log("This message is from exports" + msg );


import {greetings1} from "./export";

let obj1 = new greetings1();
  
console.log(obj1.StringConcat("Company"));


import * as AllInputs from "./export";

let str = "Shivam";
let str1 = "Shivam Soni";
  

console.log(AllInputs.Welcome(str));
  
let obj = new AllInputs.Greets();

console.log(obj.msg(str1));