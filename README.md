# Backend Internals

## NodeJS overview
- runtime env
- v8 engine
- run js outside on browser
- bun: drop-in replacement for node


## ExecuteWrapper function
- node binds code with wrapper fn -> execute() and runs code
- execute(exports, require, module, __filename, __dirname) {// actual code} <--- executeWrapper fn
    - require  fn: to import module, w/ module id as args, start w/ . then check in exports {}, or w/o . then checks in node built-in module
    - dir, filename: to know self location
    - exports fn: require brings fn that are in exports {}
    - module fn: default export; module.exports= function (){// body}
- per file one default export (module.exports) & multi exports
- wrapper fn args: exports, require, module, __filename, __dirname


- depricated w/ sem var
- codemod: delete/ change depricated code 
- package-lock.json: keeps track of all dependencies among each other version

- express is wrapper around nodejs
- nodejs web app framework
- creates structure reqHandler
- alternative koa, hono, fastify


# Node Internals

## 
- init project
- executes top level code
- event callbacks register
- event loop starts
    - phases of event loop: 
    - executes expired timer callbacks ---> setTimeout, setInterval
    - IO pooling -- input/ output cb
    - setImmediate cb
    - close cb
    - checks for pending cb, if then yes then repeat
    - if no then exit event loop


