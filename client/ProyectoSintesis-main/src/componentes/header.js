
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
    </nav>
    `,
  script: () => {
    
  }

}
