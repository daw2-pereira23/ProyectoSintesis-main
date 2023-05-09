
import { admin } from '../vistas/admin'
import { home } from '../vistas/home'

export const header = {
  template: `
    <nav class="navbar navbar-expand-lg p-3 ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../imagenes/logo.svg" alt="Logo Svg" id="logotipoPagina"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class=" collapse navbar-collapse" id="navbarNavDropdown ">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <button class="transparent-bottons" id="boton1" ><a class="nav-link mx-2 active  " aria-current="page" href="#" style="color:white;">Home</a></button>
          </li>
          <li class="nav-item">
            <button class="transparent-bottons" id="boton2"><a class="nav-link mx-2" href="#" style="color:white;">About Me</a></button>
          </li>
          <li class="nav-item">
            <button class="transparent-bottons" id="boton3"><a class="nav-link mx-2" href="#" style="color:white;">Admin</a></button>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#" id="">Blog</a></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#" id="">Contact us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    `,
  script: () => {
    document.querySelector('#boton1').addEventListener('click', () => {
      document.querySelector('main').innerHTML = home.template
    })
    document.querySelector('#boton2').addEventListener('click', () => {

    })
    document.querySelector('#boton3').addEventListener('click', () => {
      document.querySelector('main').innerHTML = admin.template
      admin.script()
    })
  }

}
