setTimeout(() => {
    console.log("SetTimeout");
    
}, 0)

setImmediate(() => {
    console.log("SetImmediate");
    
})


// console.log("Hello World");


/* 
Hello World
SetTimeout
SetImmediate

log executes, setTimeout fn registers and timer starts

----

w/o console.log("hello world")
SetImmediate
SetTimeout

setTimeout fn register, but no timer expired, so setImmediate executes first
*/
