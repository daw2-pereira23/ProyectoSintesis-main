import Swal from 'sweetalert2'
import { interfaz } from './interfaz'

export const editarPerfil = {
  template: `<div class="container justify-content-center mt-5">
    <div class="card" style="width: 13 rem;">
      <form class="p-3 mt-5" id="formEditarUsuario" >
        <div class="card-body">
          <h1 class="text-primary-emphasis text-center card-title">Editar usuario <span id="name"></span></h1>
          <hr />
          <div class="mt-3 card-body">
            <label class="mt-3 form-label" for="nick">Nombre</label>
            <input id="nombre3" type="text" class="form-control text-dark"/>

            <label class="mt-3 form-label" for="apellidos">Password</label>
            <input id="password3" type="password" class="form-control" />

            <label class="mt-3 form-label" for="contraseña">Email</label>
            <input id="email" type="text" class="form-control" />
          </div>
        </div>
      </form>
      <div class="p-3">
          <button class="btn btn-success" id="guardarCambiosEditar">Actualizar <i class="bi bi-pencil-fill"></i></button>
          <button class="btn btn-primary" id="cancelarCambios">Cancelar <i class="bi bi-arrow-return-left"></i></button>
      </div>
      <div class="d-flex justify-content-end mb-4">
        <button class="btn btn-danger">Eliminar <i class="bi bi-trash-fill"></i></button>
      </div>
  </div>
</div>`,
  script: async(datosIntroducidos, id, name) => {

    document.querySelector('#name').innerHTML = name
    document.querySelector('#nombre3').value = name
    document.querySelector('#password3').value = datosIntroducidos.password
    document.querySelector("#email").value = datosIntroducidos.email      

    document.querySelector("#guardarCambiosEditar").addEventListener("click", ()=>{
      var newName = document.querySelector("#nombre3").value
      var newPass = document.querySelector("#password3").value
      var newEmail = document.querySelector("#email").value
      
      const updateUsuario = {
        'name': newName,
        'password': newPass,
        'email': newEmail
      }

      console.log("test" + updateUsuario, id)
        
      var result = fetch( `http://localhost:8081/api/usuarios/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( updateUsuario )
        })
        .then( resp => resp.json())
        .then( data => console.log( "Datos enviados: ", data ))
        .catch( console.log )

      if(result) {
        Swal.fire(
          'Usuario actualizado',
          `El usuario ${name} ha sido actualizado con éxito`,
          'success'
        ).then( () => {
          location.reload();
          document.querySelector('main').innerHTML = interfaz.template
        })
      }
    })      

    document.querySelector("#cancelarCambios").addEventListener("click", ()=>{
      document.querySelector('main').innerHTML = interfaz.template
    })
  }
}
