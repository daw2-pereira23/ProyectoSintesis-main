import { cupones } from '../vistas/cupones'
import { descubrir } from '../vistas/descubrir'
import { proximosEventos } from '../vistas/proximosEventos'
import { user } from '../vistas/user'

export const footer = {
  template: `
    <nav class="navbar d-flex justify-content-center align-items-center white-color">
        <div class="mt-1 ">
            <i class="fa-solid fa-magnifying-glass logos" id="descubrir"></i>
        </div>
        <div class="mt-1 ps-5 logos">
            <i class="fa-regular fa-user" id="user"></i>
        </div>
        <div class="mt-1 ps-5">
            <i class="fa-solid fa-ticket logos" id="cupones"></i>
        </div>
        <div class="mt-1 ps-5">
            <i class="fa-solid fa-arrow-right logos" ></i>
        </div>
        <div class="mt-1 ps-5">
            <i class="fa-solid fa-calendar-days logos" id="proximosEventos"></i>
        </div>
    </nav>
    `,
  script: () => {
    document.querySelector('#proximosEventos').addEventListener('click', () => {
      document.querySelector('main').innerHTML = proximosEventos.template
    })
    document.querySelector('#descubrir').addEventListener('click', () => {
      document.querySelector('main').innerHTML = descubrir.template
      descubrir.script()
    })
    document.querySelector('#user').addEventListener('click', () => {
      document.querySelector('main').innerHTML = user.template
      user.script()
    })
    document.querySelector('#cupones').addEventListener('click', () => {
      document.querySelector('main').innerHTML = cupones.template
      cupones.script()
    })
  }
}
