import { swal } from "sweetalert2/dist/sweetalert2";

swal

export const editarPerfil = {
  template: `
  <div class="container justify-content-center mt-5">
  <form class="p-3 mt-5 text-light" id="formEditarUsuario" >
      <h1 class="text-light" >Edicion del formulario</h1>
      <div class="mt-5">
        <label class="mt-3 form-label" for="nick">Nombre</label>
        <input id="nombre3" type="text" class="form-control text-dark"/>

        <label class="mt-3 form-label" for="apellidos">Password</label>
        <input id="password3" type="password" class="form-control" />

        <label class="mt-3 form-label" for="contraseña">Email</label>
        <input id="email" type="text" class="form-control" />
      </div>
    </form>
    <div class="p-3">
        <button class="btn btn-success" id="guardarCambiosEditar">Guardar Cambios</button>
        <button class="btn btn-danger" id="cancelarCambios">Cancelar</button>
    </div>
</div>`,
  script: async(datosIntroducidos, email, id) => {
        console.log(datosIntroducidos);
        document.querySelector('#nombre3').placeholder = datosIntroducidos.name
        document.querySelector('#password3').placeholder = datosIntroducidos.password
        document.querySelector("#email").placeholder = email      
        document.querySelector("#guardarCambiosEditar").addEventListener("click", ()=>{
          const updateUsuario = {
            'name': document.querySelector("#nombre3").value,
            'password': document.querySelector("#password3").value,
            'email': document.querySelector("#email").value
          }

          console.log(updateUsuario, id)
          
                fetch( `http://localhost:8081/api/usuarios/update/:${id}`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify( id, updateUsuario )
                  })
                  .then( resp => resp.json() )
                  .then( data => console.log( "Datos enviados: ", updateUsuario ))
                  .catch( console.log )
                })
                  
                
              
            
        
        
  }
}
