const { Router } = require("express");
const 
{ 
    discotecasGet, 
    discotecasPost, 
    discotecasPut, 
    discotecasDelete 
} = require("../controllers/discotecas");
const {
    validarJWT,
    esAdminRole
} = require('../middlewares/index.js')

const router = Router()

router.get('/', discotecasGet)

router.post('/create', [
    validarJWT,
    esAdminRole
], discotecasPost)

router.put('/update/:id', [
    validarJWT,
    esAdminRole
], discotecasPut)

router.delete('/delete/:id', [
    validarJWT,
    esAdminRole
], discotecasDelete)

module.exports = router