const { Router } = require("express");
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require("../controllers/usuarios");


const router = Router()

router.get('/', usuariosGet)

router.post('/create', usuariosPost)

router.put('/update/:id', usuariosPut)

router.delete('/delete/:id', usuariosDelete)


module.exports = router