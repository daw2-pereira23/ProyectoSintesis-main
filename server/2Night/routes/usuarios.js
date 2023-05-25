const { Router } = require("express");
const { check } = require('express-validator');
const { usuariosGet, usuariosGetDeletedUsers, usuariosPost, usuariosPut, usuariosDelete, login } = require("../controllers/usuarios");

const {
    validarCampos,
    emailExiste
} = require('../middlewares');

const router = Router()

router.get('/', usuariosGet)

router.get('/deletedUsers', usuariosGetDeletedUsers)

router.post('/create', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
], usuariosPost)

router.post('/login', [
    validarCampos
], login)

router.put('/update/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], usuariosPut)

router.delete('/delete/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], usuariosDelete)

module.exports = router