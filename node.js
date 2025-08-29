const fs= require('fs')

setTimeout(() => {
    console.log("SetTimeout");
    
}, 0)


setImmediate(() => {
    console.log("SetInterval");
    
})


fs.readFile("sample.txt", "utf-8", () => {
    setTimeout(() => {
        console.log("SetTimeout 2");
        
    }, 0)


    setImmediate(() => {
        console.log("SetInterval 2");
        
    })
})


// console.log("Hello World");


/* 
Hello World
SetTimeout
SetInterval
SetInterval 2
SetTimeout 2
*/


/* 
w/o "hello"

SetInterval
SetTimeout
SetInterval 2
SetTimeout 2

*/