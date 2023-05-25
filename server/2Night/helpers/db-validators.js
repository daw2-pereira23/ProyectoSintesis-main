const { Usuario } = require('../models/usuario.js');

//TODO Verify if email exists
const emailExist = async( email ) => {
    try {
        console.log("lo que entra" + email);
        const userEmail = await Usuario.findOne({ email }); 
        console.log("si existe" + userEmail);
        if ( userEmail ) {
            throw new Error(`El correo: ${ email } ya está registrado`);  
        }
    } catch (err) {
        throw new Error(`${ err }`);
    }
}

const specialCharacters = async(name) => {

    const nameRegex = /^[a-zA-Z0-9\s]+$/;

    // Check if the name matches the regular expression pattern
    if (!nameRegex.test(name)) {
        throw new Error(`Solo están permitidos carácteres de a-z, A-Z y 0-9`);  
    }
}

module.exports = {
    emailExist,
    specialCharacters
}