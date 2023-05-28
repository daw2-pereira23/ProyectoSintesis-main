const validarCampos = require('../middlewares/validarCampos.js')
const validaJWT = require('../middlewares/validarJwt.js')
const validaRoles = require('../middlewares/validarRoles.js')

module.exports = {
    ...validarCampos,
    ...validaJWT,
    ...validaRoles,
}