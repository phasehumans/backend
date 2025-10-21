/* 
- event loop decides what to run next
- runs on single thread
- executes top level code (syn code)
- event callbacks register
- event loop starts
    - expired timer callbacks ---> setTimeout, setInterval
    - IO pooling -- input/ output cb
    - setImmediate cb
    - close cb (clean up fn)
    - checks for pending cb, if yes then repeat event loop
    - else exit event loop


*/