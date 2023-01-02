const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


const createUserPjEnd = async (req,res) => {
    const data = {  ...req.body,   enderecos: {create: [req.body.enderecos]}}
     const usuariospj = await prisma.usuariospj.create({data})
     if(usuariospj){
         res.send('UsuárioPJ criado com sucesso ✅')
     }
 }
 
const getUsersPj = async (req,res)=>{
     const usuariospj = await prisma.usuariospj.findMany({ include:{enderecos:true}})
     if (usuariospj) {
         res.send(usuariospj)
     }
 }
 
const getUserPj =  async (req,res)=>{
     const id = parseInt(req.params.id)
     const usuariospj = await prisma.usuariospj.findUnique({where:{id}})
     if (usuariospj){
         res.status(201).send(` O usuárioPJ ${usuariospj.nomeFantasia} de cnpj:${usuariospj.cnpj} cujo id:${id}, foi encontrado ✅`)
     }
 }

 const deleteUserPj = async (req, res)=> {
    const id = parseInt(req.params.id)
    const usuarios = await prisma.usuariospj.delete({where:{id}})
    if (usuarios){
    res.send("Usuário deletado com sucesso ✅")
    }
}

const upUserPJ = async (req, res)=> {
    const id = parseInt(req.params.id)
    const usuarios = await prisma.usuariospj.update({where:{id}})
    if (usuarios){
    res.send("Usuário atualizado com sucesso ✅")
    }
}

 
 module.exports = {createUserPjEnd, getUserPj, getUsersPj, upUserPJ, deleteUserPj}