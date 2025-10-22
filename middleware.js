const express= require('express')

const app= express()

app.get('/sum', (req, res) => {
    const num1= parseInt(req.query.a)
    const num2= parseInt(req.query.b)

    res.json({
        ans : num1 + num2
    })
})


app.listen(3000)