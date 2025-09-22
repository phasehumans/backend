# Backend

## NodeJS
- js in node: single threaded + thread pool & libuv
- js runtime env (setup that runs code)
- built w/ v8 engine & libuv (non blocking I/O)
- c++ bindings for OS level fn/ sys call
- alternative bun: drop-in replacement for node
- use for SSR (web page generated on server and sent), opp to client side rendering
- v8 engine: JS code → Parser → AST → Ignition (bytecode) → TurboFan (optimized machine code) → CPU executes
- lifecycle: Run → Wrap → Parse/Compile → Execute → Async to libuv → Event Loop + Microtasks → Exit
- single thread: one thing at a time
- thread pool (4): run blocking tasks (heavy blocking tasks, file, crypto, compression) so main thread stays non blocking, background workers in nodejs


### ExecuteWrapper function
- node binds code with wrapper fn -> execute() and parse to v8
- execute(exports, require, module, __filename, __dirname) {// actual code} <--- executeWrapper fn
    - require  fn: to import module, w/ module id as args, start w/ . then check in exports {}, or w/o . then checks in node built-in module
    - dir, filename: to know self location
    - exports fn: require brings fn that are in exports {}
    - module fn: default export; module.exports= function (){// body}
- per file one default export (module.exports) & multi exports
- wrapper fn args: exports, require, module, __filename, __dirname


### Event Loop
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


## Express
- express wrapper around nodejs
- nodejs web app framework
- creates structure reqHandler
- alternative koa, hono, fastify
- why express?
    - simple routing
    - middleware

