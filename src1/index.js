const express = require('express')
require('../src1/db/mongoose')
const userRouter = require('../src1/routers/user')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)

app.listen(port , ()=>{
    console.log('Server is upt on port', + port)
})

