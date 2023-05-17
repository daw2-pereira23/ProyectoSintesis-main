const { Router } = require("express");
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, login } = require("../controllers/usuarios");


const router = Router()

router.get('/', usuariosGet)

router.post('/create', usuariosPost)

router.post('/login', login)

router.put('/update/:id', usuariosPut)

router.delete('/delete/:id', usuariosDelete)

module.exports = router