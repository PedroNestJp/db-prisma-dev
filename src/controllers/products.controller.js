const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express').Router()
const app = express()

app.use(express.json())

const getProducts = async (req, res)=> {
    const produtos = await prisma.produtos.findMany()
    console.log('All users', produtos)
    if (produtos){
        res.send(produtos)
    }
}

const getproduct = async (req, res)=> {
    const id = parseInt( req.params.id )
    const produtos = await prisma.produtos.findUnique({where:{id}})
    if (produtos){res.send(produtos)}

}

const createProducts = async (req, res)=> {
    const data = req.body
    const produtos = await prisma.produtos.createMany({data})
    if (produtos){ 
        res.send("Produto criado com sucesso ✅")
    }
}

const createProduct = async (req, res)=> {
    const data = req.body
    const produtos = await prisma.produtos.create({data})
    if (produtos){ 
        res.send("Produto criado com sucesso ✅")
    }
}

const deleteProduct = async (req, res)=> {
    const id = parseInt(req.params.id)
    const produtos = await prisma.produtos.delete({where:{id}})
    if (produtos){
    res.send("Produto deletado com sucesso ✅")
    }
}

module.exports = {getProducts, getproduct, deleteProduct, createProduct, createProducts}