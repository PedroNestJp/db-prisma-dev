const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const userRoutes = require('./src/routes/userRoutes')

app.use(express.json())

app.use('/', userRoutes)
app.post('/', userRoutes)

app.get ('/home', (req, res)=> {
    res.send('hi Pedro')
})

app.post('/produtos', async (req, res)=> {
    const data = req.body
    const produtos = await prisma.produtos.createMany({data})
    if (produtos){ 
        res.send("Produto criado com sucesso ✅")
    }
})

app.post('/produtos', async (req, res)=> {
    const data = req.body
    const produtos = await prisma.produtos.create({data})
    if (produtos){ 
        res.send("Produto criado com sucesso ✅")
    }
})

app.delete('/produtos/:id', async (req, res)=> {
    const id = parseInt(req.params.id)
    const produtos = await prisma.produtos.delete({where:{id}})
    if (produtos){
    res.send("Produto deletado com sucesso ✅")
    }
})

app.delete('/usuarios/:id', async (req, res)=> {
    const id = parseInt(req.params.id)
    const usuarios = await prisma.usuarios.delete({where:{id}})
    if (usuarios){
    res.send("Usuário deletado com sucesso ✅")
    }
})

app.post("/usuariospj", async (req,res) => {
   const data = {  ...req.body,   enderecos: {create: [req.body.enderecos]}}
    const usuariospj = await prisma.usuariospj.create({data})
    if(usuariospj){
        res.send('UsuárioPJ criado com sucesso ✅')
    }
})

app.get('/usuariospj', async (req,res)=>{
    const usuariospj = await prisma.usuariospj.findMany({ include:{enderecos:true}})
    if (usuariospj) {
        res.send(usuariospj)
    }
})

app.get('/usuariospj/:id', async (req,res)=>{
    const id = parseInt(req.params.id)
    const usuariospj = await prisma.usuariospj.findUnique({where:{id}})
    if (usuariospj){
        res.status(201).send(` O usuárioPJ ${usuariospj.nomeFantasia} de cnpj:${usuariospj.cnpj} cujo id:${id}, foi encontrado ✅`)
    }
})

app.listen (PORT, ()=>{
    console.log(`✔ serviço rodando em: http://localhost:${PORT}`)
})