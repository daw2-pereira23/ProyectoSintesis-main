import { footer } from '../componentes/footer'
import { header } from '../componentes/header'
import { home } from './home'
import { interfaz } from './interfaz'

export const login = {
  template: `
  <div class="col-12 ">

    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            Tu App para salir de fiesta <br />
            <span style="color: hsl(218, 81%, 75%)">¿Salimos <strong>Tonight?</strong></span>
          </h1>
          <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
            
          </p>
        </div>
  
        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div id="radius-shape-1" class="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" class="position-absolute shadow-5-strong"></div>
  
          <div class="card bg-glass" id="transparencia">
            <div class="card-body px-4 py-5 px-md-5">
              <form>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                  <h1 class="text-center">INICIAR SESIÓN </h1>
                </div>
                <hr />
                <br />
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <label class="form-label d-flex" for="form3Example3">Correo Electronico</label>
                  <input type="email" class="form-control" id="correoLogin"/>
                </div>
                <div id="emailErrors"></div>

  
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <label class="form-label d-flex" for="form3Example4">Contraseña</label>
                  <input type="password" class="form-control" id="passLogin"/>
                </div>
                <div id="passErrors"></div>
                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33">
                    Recordar mi contraseña
                  </label>
                </div>
  
                <!-- Submit button -->
               <br>
                <!-- Register buttons -->
                <div class="text-center">
                  <button id="buttonLogin" class="btn btn-success me-4">Iniciar Sesion</button> 
                  <button id="noTengoCuenta" class="btn btn-primary">No tengo cuenta</button>
                </div>
              </form>
              <br>
              <br>
              <br>
            </div>         
          </div>
        </div>
      </div>
    </div>
    
</div>`,

script: () => {
    
  document.querySelector('#buttonLogin').addEventListener('click', async (e) => {
    e.preventDefault()
    let email = document.querySelector('#correoLogin').value
    let password = document.querySelector('#passLogin').value

    let datosIntroducidos = {
       'email': email,
       'password': password
    }
    
    var result = await fetch( "http://localhost:8081/api/usuarios/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( datosIntroducidos )
    })
    .then( resp => resp.json())
    .then( data => {
      const rol = data.rol
      const email = data.email
      const id = data.id
      const name = data.name

      footer.script(rol, datosIntroducidos, email, id, name)
    })
    .catch(error => {
      console.error(error.message)
    });

    if(result) {
      document.querySelector('main').innerHTML = interfaz.template
    }
    
  })

  document.querySelector('#noTengoCuenta').addEventListener("click", ()=>{
    document.querySelector('main').innerHTML = home.template
    home.script()
  })
}

}


