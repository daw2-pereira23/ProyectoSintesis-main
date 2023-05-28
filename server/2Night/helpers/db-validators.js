const { Usuario } = require('../models/usuario.js');

const emailExiste = async( email = '' ) => {

    const existeEmail = await Usuario.find({ email });
    console.log(existeEmail);
    if ( existeEmail ) {
        throw new Error(`El correo: ${ email }, ya está registrado`);
    }
}

module.exports = {
    emailExiste
}