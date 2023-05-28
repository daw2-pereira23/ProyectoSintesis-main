const { response, request } = require("express");
const Usuario = require("../models/usuario.js");
const { genSaltSync, hashSync } = require("bcryptjs")

const usuariosGet = async( req = request, res = response ) => {

    const query = { state: true }

    const [ usuarios ] = await Promise.all([
        Usuario.find( query )])

    
    const nombres = usuarios.map(usuario => usuario.name);
    const idUsuario = usuarios.map(usuario => usuario._id);
    const email = usuarios.map(usuario => usuario.email);
    const rol = usuarios.map(usuario => usuario.role);
    res.json({
        usuarios, nombres, email, rol, idUsuario
    })
}

const usuariosGetDeletedUsers = async( req = request, res = response ) => {

    const query = { state: false }

    const [ usuarios ] = await Promise.all([
        Usuario.find( query )])

    res.json({
        usuarios 
    })
}

const usuariosPost = async ( req, res ) => {

    const { name, email, password, rol } = req.body
    const usuario = new Usuario({ name, email, password, rol })

    const salt = genSaltSync()
    usuario.password = hashSync( password, salt )
    const existeEmail = await Usuario.findOne({ email });
    console.log(existeEmail);
    await usuario.save()
    res.json(usuario)   
    
}

const usuariosPut = async ( req, res ) => {
    
    const { id } = req.params
    const { _id, ...resto } = req.body

    if( resto.password ) {
        const salt = genSaltSync()
        resto.password = hashSync( resto.password, salt )
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto )

    res.json(usuario)
} 

const usuariosDelete = async ( req, res ) => {

    const { id } = req.params
    
    const usuario = await Usuario.findByIdAndUpdate( id, { state: false } )

    res.json({usuario})
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut,
    usuariosGetDeletedUsers,
}