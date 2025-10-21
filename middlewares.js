/* 
Middleware
- req, res, next (to transfer to next miidleware or controller)
- app.use(middleware) --> applies to all routes below it


*/ 


const express = require('express')

const app = express()


function check (req, res, next){
    const age = req.query.age
    if(age > 18){
        next()
    }
    else{
        res.json({
            msg: "not allowed"
        })
    }
}

app.get('/ride1', check, (req, res) => {
    res.json({
        msg: "you have ride ride1"
    })
})


app.listen(3000)