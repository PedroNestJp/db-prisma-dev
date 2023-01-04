const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const userRoutes = require('./src/routes/userRoutes')
const userPjRoutes = require('./src/routes/userPjRoutes')
const productsRoutes = require('./src/routes/productsRoutes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use(userRoutes)
app.use(userPjRoutes)
app.use(productsRoutes)

app.get ('/home', (req, res)=> {
    res.send('hi Pedro')
})

app.listen (PORT, ()=>{
    console.log(`✔ serviço rodando em: http://localhost:${PORT}`)
})