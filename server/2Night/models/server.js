const  express =  require('express')
const { dbConnection } =  require('../database/config.js')
const  cors  =  require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000

    this.paths = {
      usuarios: '/api/usuarios' ,
      discotecas: '/api/discotecas'
    }

    this.conectarDB()

    this.middlewares()

    this.routes()
  }


  async conectarDB() {

    await dbConnection()

  }

  middlewares() {

    this.app.use( cors() )

    this.app.use( express.json() )

  }

  routes() {

    this.app.use( this.paths.usuarios, require('../routes/usuarios') )
    this.app.use( this.paths.discotecas, require('../routes/discotecas') )

  }

  listen() {

    this.app.listen( this.port, () => {
        console.log('Servidor corriendo en puerto ', this.port);
    })

  }
 
}


module.exports = Server


