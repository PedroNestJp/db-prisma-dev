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
     const usuariopj = await prisma.usuariospj.findUnique({where:{id}})
     res.send(usuariopj)
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
    const data = req.body
    const result = await prisma.usuariospj.update({where:{id},data})
    console.log(data, result)
    try { 
        if(result) {res.send(`the User whoose id is: ${id}, was succesfully updated✅}`) }
        
    } catch (error) {
        res.send("Ihhh, algo de errado não está certo")
    }
}

 
 module.exports = {createUserPjEnd, getUserPj, getUsersPj, upUserPJ, deleteUserPj}