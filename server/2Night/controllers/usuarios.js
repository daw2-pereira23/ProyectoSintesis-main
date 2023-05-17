const { response, request } = require("express");
const Usuario = require("../models/usuario.js");
const { genSaltSync, hashSync } = require("bcryptjs")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const usuariosGet = async( req = request, res = response ) => {

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

const login = async ( req, res ) => {

    const { name, password  } = req.body;
    try {
        const user = await Usuario.findOne({ name });
       
        if (!user) {
            return res.status(401).json({ message: 'Usuario incorrecto' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Pass incorrecta' });
        }
        const token = jwt.sign({ userId: user._id }, 'holiwis');
        
        const rol = user.role
        const email = user.email
        const id = user.id
        res.json({ "Usuario logueado y rol: " : user, token, rol, email, id});
        console.log( )
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al iniciar sesión');
    }
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut,
    login
}