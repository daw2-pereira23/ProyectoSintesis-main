const { response, request } = require("express");
const Usuario = require("../models/usuario.js");
const { genSaltSync, hashSync } = require("bcryptjs")

const usuariosGet = async( req = request, res = repsonse ) => {

    const query = { state: true }

    const [ usuarios ] = await Promise.all([
        Usuario.find( query )])

    res.json({
        usuarios 
    })
}

const usuariosPost = async ( req, res ) => {

    const { name, email, password, rol } = req.body
    const usuario = new Usuario({ name, email, password, rol })

    //Encriptar la contraseña
    const salt = genSaltSync()
    usuario.password = hashSync( password, salt )
    //Guarda en DB
    await usuario.save()

    res.json(usuario)

}

const usuariosPut = async ( req, res ) => {
    
    const { id } = req.params.id
    const { password, google, email, ...resto } = req.body

    if( password ) {
        //Encriptar la contraseña
        const salt = genSaltSync()
        resto.password = hashSync( password, salt )
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
    usuariosPut
}