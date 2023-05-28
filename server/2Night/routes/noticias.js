const { Router } = require("express");
const { 
    noticiasGet, 
    noticiasPost, 
    noticiasPut, 
    noticiasDelete 
} = require("../controllers/noticias.js");
const {
    validarJWT,
    esAdminRole
} = require('../middlewares/index.js')

const router = Router()

router.get('/', noticiasGet)

router.post('/create', [
    validarJWT,
    esAdminRole
], noticiasPost)

router.put('/update/:id', [
    validarJWT,
    esAdminRole
], noticiasPut)

router.delete('/delete/:id', [
    validarJWT,
    esAdminRole
],noticiasDelete)

module.exports = router