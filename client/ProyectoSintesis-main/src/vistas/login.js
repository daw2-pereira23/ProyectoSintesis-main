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
            <span style="color: hsl(218, 81%, 75%)">Salimos <strong>Tonight ?</strong></span>
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
                  <h1>INICIO DE SESION </h1>
                </div>
  
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <input type="email" class="form-control" id="correoLogin"/>
                  <label class="form-label" for="form3Example3">Correo Electronico</label>
                </div>
  
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <input type="password" class="form-control" id="contrasenaLogin"/>
                  <label class="form-label" for="form3Example4">Contraseña</label>
                </div>
  
                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                  <label class="form-check-label" for="form2Example33">
                    No recuerdo mi contraseña
                  </label>
                </div>
  
                <!-- Submit button -->
               <br>
                <!-- Register buttons -->
                <div class="text-center">
                 <button id="butonLogin" class="btn btn-success">Iniciar Sesion</button> 
                 
                </div>
                <div class="text-center mt-2">
                  <button id="noTengoCuenta" class="btn btn-primary">No tengo cuenta registrame</button>
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
    
</div>
    `,
  script: () => {
    
    document.querySelector('#butonLogin').addEventListener('click', (e) => {
      e.preventDefault()
      
      let usuarioLogin = {
         "correo": document.querySelector('#correoLogin').value,
         "password": document.querySelector('#contrasenaLogin').value
      }
      
      

      console.log("El correo con el que te intestas logear es:  " + correo + " " + contrasena);
      document.querySelector('main').innerHTML = interfaz.template

    })
    document.querySelector('#noTengoCuenta').addEventListener("click", ()=>{
      document.querySelector('main').innerHTML = home.template
      home.script()
    })
  }

}
