const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario.js')

const validarJWT = async(req = request, res = response, next) => {

    const token = req.header('token')

    if ( !token ) {
        return res.status(401).json({
            msg: 'No tienes permiso para hacer eso'
        })
    }

    try {

        const { uid } = jwt.verify( token, process.env.SECRETPASS )
        const usuario = await Usuario.findOne({ _id: uid });
        
        if( !usuario ) {
            return res.status(401).json({
                msg: 'Usuario no existente' 
            })
        }

        if ( !usuario.state ) {
            return res.status(401).json({
                msg: 'Token no válido' 
            })
        }

        req.usuario = usuario

        next()

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Acceso no autorizado'
        })
    }
}

module.exports = {
    validarJWT
}
