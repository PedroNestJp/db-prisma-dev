const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express').Router()
const app = express()

app.use(express.json())

async function productsList() {

app.get ('/produtos', async (req, res)=> {
    const produtos = await prisma.produtos.findMany()
    console.log('All users', produtos)
    if (produtos){
        res.send(produtos)
    }
})

app.get ('/produtos/:id', async (req, res)=> {
    const id = parseInt( req.params.id )
    const produtos = await prisma.produtos.findUnique({where:{id}})
    if (produtos){res.send(produtos)}

})
}
productsList()
.catch((e) => console.error(e))
.finally(async () => await prisma.disconnect())

module.exports = {productsList}