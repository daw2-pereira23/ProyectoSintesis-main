const { Router } = require("express");
const { check } = require('express-validator');
const { usuariosGet, usuariosGetDeletedUsers, usuariosPost, usuariosPut, usuariosDelete, login } = require("../controllers/usuarios");
const { validarCampos } = require('../middlewares/index.js');
const { emailExist, specialCharacters } = require('../helpers/index.js');

const router = Router()

router.get('/', usuariosGet)

router.get('/deletedUsers', usuariosGetDeletedUsers)

router.post('/create', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('name').custom(specialCharacters),
    check('password', 'La constraseña es obligatoria').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom(emailExist),
    validarCampos
], usuariosPost)

router.post('/login', [
    validarCampos
], login)

router.put('/update/:id', [
    check('id', 'No es un ID v�lido').isMongoId(),
    validarCampos
], usuariosPut)

router.delete('/delete/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
], usuariosDelete)

module.exports = router