const { response } = require("express")


const esAdminRole = ( req, res = response, next) => {

    if ( !req.usuario ) {
        return res.status(500).json({
            msg: 'Se quiere verificar el rol sin el token primero'
        })
    }

    const { role } = req.usuario

    if ( role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: 'No eres administrador'
        })
    }

    next()
}

module.exports = {
    esAdminRole,
}