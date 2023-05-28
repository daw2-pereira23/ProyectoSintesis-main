const { response } = require('express');
const bcryptjs = require('bcryptjs')
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJwt');

const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if ( !usuario ) {
            return res.status(400).json({
                errors : [{
                    msg: 'Usuario / Password incorrectos'
                }]
            });
        }

        if ( !usuario.state ) {
            return res.status(400).json({
                errors : [{
                    msg: 'Usuario / Password incorrectos'
                }]
            })
        } 

        const validarPass = bcryptjs.compareSync( password, usuario.password )
        if( !validarPass ) {
            return res.status(400).json({
                errors : [{
                    msg: 'Usuario / Password incorrectos'
                }]
            })
        }
         
        const token = await generarJWT( usuario.id, usuario.email, usuario.name )

        res.json({
            usuario,
            token    
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Algo salió mal'
        })
    }
}

module.exports = {
    login
}