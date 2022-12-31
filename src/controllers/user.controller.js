const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const findUsers = async (req, res) => {
    const usuarios = await prisma.usuarios.findMany()
    if (usuarios){
    res.send(usuarios)
    }
}

const findUser = async (req, res)=> {
    const id = parseInt(req.params.id)
    const usuarios = await prisma.usuarios.findUnique({where:{id}})
    if (usuarios){
    res.send(usuarios)
    }
}

const createUser = async (req, res) => {
        let data = req.body
        data.enderecos = {create:[req.body.enderecos]}
        const usuarios = await prisma.usuarios.create({data})
        res.send('usuário criado com sucesso ✅')
    }

module.exports = {createUser, findUser, findUsers}