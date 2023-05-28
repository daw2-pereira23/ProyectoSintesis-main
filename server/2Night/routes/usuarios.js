const { Router } = require("express")
const { check } = require('express-validator')
const { 
    usuariosGet, 
    usuariosGetDeletedUsers, 
    usuariosPost, 
    usuariosPut, 
    usuariosDelete
} = require("../controllers/usuarios")
const {
    validarCampos,
    validarJWT,
    esAdminRole
} = require('../middlewares/index.js')

const router = Router()

router.get('/', usuariosGet)

router.get('/deletedUsers', usuariosGetDeletedUsers)

router.post('/create', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    validarCampos
], usuariosPost)

router.put('/update/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
] ,usuariosPut)

router.delete('/delete/:id',  [
    validarJWT,
    esAdminRole,
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], usuariosDelete)

module.exports = router