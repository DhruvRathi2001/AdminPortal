const express = require('express')
const app = express()

const router = require('./router/auth-router.js')

//To use router in our main app, "mount" the router at a specific URL Prefix.......
app.use("/api/auth", router); //middleware


const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`Chal gya at port ${PORT}`)
})