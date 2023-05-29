import { admin } from '../vistas/admin'
import { crearAdmin } from '../vistas/crearAdmin'

import { descubrir } from '../vistas/descubrir'
import { editarPerfil } from '../vistas/editarPerfil'
import { interfaz } from '../vistas/interfaz'
import { login } from '../vistas/login'
import { proximosEventos } from '../vistas/proximosEventos'

export const footer = {
  template: `
    <nav class="navbar d-flex justify-content-center align-items-center white-color mt-auto">
        <div class="mt-1 " id="primerIcono">
           
        </div>
        <div class="mt-1 ps-5 logos" id="segundoIcono">
           
        </div>
        <div class="mt-1 ps-5" id="tercerIcono">
     
        </div>
        <div class="mt-1 ps-5" id="cuartoIcono">
         
        </div>
        <div class="mt-1 ps-5" id="quintoIcono">
            
        </div>
        <div class="mt-1 ps-5" id="sextoIcono">

        </div>
    </nav>
    `,
  script: (rol, usuario, id, name) => {
    const primerIcono = ` <i class="fa-solid fa-magnifying-glass logos" id="descubrir"></i>`
    const segundoIcono = ` <i class="fa-regular fa-user" id="user"></i>`
    const tercerIcono = `<i class="fa-solid fa-ticket logos" id="cupones"></i>`
    const cuartoIcono = `   <i class="fa-solid fa-arrow-right logos" id="admin"></i>`
    const quintoIcono = `<i class="fa-solid fa-calendar-days logos" id="proximosEventos"></i>`
    const sextoIcono = `<i class="fa-solid fa-plus logos" id="creacionAdmin"></i>`
    if((rol == "anonimo" ) || (rol == "USER_ROLE")){
      document.querySelector('#primerIcono').innerHTML = primerIcono
      document.querySelector('#segundoIcono').innerHTML = segundoIcono
      document.querySelector('#tercerIcono').innerHTML = tercerIcono
      document.querySelector('#quintoIcono').innerHTML = quintoIcono
      const sinAdmin = document.querySelector('#cuartoIcono')
      const sinAdmin2 = document.querySelector("#sextoIcono")
      sinAdmin.remove()
      sinAdmin2.remove()

    } else if(rol == "ADMIN_ROLE"){
      document.querySelector('#primerIcono').innerHTML = primerIcono
      document.querySelector('#segundoIcono').innerHTML = segundoIcono
      document.querySelector('#tercerIcono').innerHTML = tercerIcono
      document.querySelector('#cuartoIcono').innerHTML = cuartoIcono
      document.querySelector('#quintoIcono').innerHTML = quintoIcono
      document.querySelector('#sextoIcono').innerHTML = sextoIcono
      document.querySelector('#sextoIcono').addEventListener("click", ()=>{
        console.log("hola")
        document.querySelector('main').innerHTML = crearAdmin.template
        crearAdmin.script()
      })
      document.querySelector('#admin').addEventListener("click", ()=>{
      document.querySelector('main').innerHTML = admin.template
      admin.script()
      

    })

      }
      document.querySelector('#descubrir').addEventListener("click", ()=>{
        document.querySelector('main').innerHTML = descubrir.template
        descubrir.script()
      })
      document.querySelector('#user').addEventListener("click", ()=>{
        if(rol == "anonimo"){
          document.querySelector('main').innerHTML = login.template
          login.script()
        }else{
          document.querySelector('main').innerHTML = editarPerfil.template
          editarPerfil.script(usuario, id, name)
        }
        
      })
      document.querySelector('#cupones').addEventListener("click", ()=>{
        document.querySelector('main').innerHTML = interfaz.template
        interfaz.script()
      })
      document.querySelector('#proximosEventos').addEventListener("click", ()=>{
        document.querySelector('main').innerHTML = proximosEventos.template
        proximosEventos.script()
      })
      

    
  }
}
