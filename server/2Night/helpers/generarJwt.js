const jwt = require('jsonwebtoken')

const generarJWT = ( uid = '', email = '', name = '') => {

    return new Promise ( (resolve, reject) => {

        const datosToken = { uid, email, name }

        jwt.sign( datosToken, process.env.SECRETPASS, {
            expiresIn: '4h'
        }, ( err, token ) => {

            if ( err ) {
                console.log(err);
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token )
            }
        })
    })
}
   
module.exports = {
    generarJWT
}

