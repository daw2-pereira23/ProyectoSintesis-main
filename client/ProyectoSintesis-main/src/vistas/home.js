import { footer } from '../componentes/footer'
import { interfaz } from './interfaz'
import Swal from 'sweetalert2';

export const home = {
  template: `<div class="col-12">
    
    
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
    
            <div class="card bg-glass">
              <div class="card-body px-4 py-5 px-md-5">
                <form id="formulario" novalidate>
                  <div class="row">
                    <h1 class="text-center">REGISTRO</h1>
                  </div>
                  <hr />
                  <br />
         
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" class="form-control" id="nombreRegistro" required pattern="^[^<>]*$">
                        <label class="form-label" for="form3Example1" >Nombre</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="text" class="form-control" id="apellidoRegistro" required pattern="^[^<>]*$"/>
                        <label class="form-label" for="form3Example2" >Apellidos</label>
                       
                      </div>
                    </div>
                  </div>
    
                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input type="email" class="form-control" id="emailRegistro" required/>
                    <label class="form-label" for="form3Example3" >Correo Electronico</label>
                  </div>
    
                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input type="password" class="form-control" id="passwordRegistro" required pattern="^[^<>]*$"/>
                    <label class="form-label" for="form3Example4" >Contraseña</label>
                  </div>
    
                  <!-- Register buttons -->
                  <div class="text-center d-flex justify-content-end">
                    <button class="btn btn-primary" id="registro">Registrarme</button> 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `,
  script: () => {

    var urlEndpoint = 'http://localhost:8081/api/usuarios/create'
    
    document.querySelector('#registro').addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector("#formulario").classList.add("was-validated")
      const estadoForm = document.querySelector("#formulario").checkValidity()
      console.log(estadoForm);
   
        if(estadoForm == true){
        console.log("funcipon")
        document.querySelector("#formulario").classList.add("was-validated")
        let password = document.querySelector("#passwordRegistro").value
        let email = document.querySelector("#emailRegistro").value
        let name = document.querySelector("#nombreRegistro").value
      let datos= 
      {
        name: name,
        email: email,
        password: password,
      }

      fetch( urlEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( datos )
      })
      .then( resp => resp.json() )
      .then( data => {
        if (undefined == data) {
          console.log("Algo ha malido sal");
        } else {
          let rol = 'USER_ROLE'
          footer.script(rol, datos.name, data._id, datos.email)

          Swal.fire(
            'Usuario creado',
            `El usuario ${name} ha sido creado con éxito`,
            'success'
          ).then(() => {
            document.querySelector('main').innerHTML = interfaz.template
          })
        }
      })
      .catch( console.log );
    }
    if(estadoForm == false){
      Swal.fire(' No se a podido crear el usuario')
    }
      
     
      
    })
  }
}

   
