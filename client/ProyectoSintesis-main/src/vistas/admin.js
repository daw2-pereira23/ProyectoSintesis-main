import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { editarPerfil } from './editarPerfil'

export const admin = {
  template: `
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Formulario de edición</h5>
            <button type="button" class="close botones-cierre " data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="container justify-content-center mt-5">
          <div class="card" style="width: 13 rem;">
            <form class="p-3 mt-5" id="formEditarUsuario" >
              <div class="card-body">
                <h1 class="text-primary-emphasis text-center card-title">Editar usuario <span id="name"></span></h1>
                <hr />
                <div class="mt-3 card-body">
                  <label class="mt-3 form-label" for="nick">Nombre</label>
                  <input id="nombre4" type="text" class="form-control text-dark" require/>
      
                  <label class="mt-3 form-label" for="apellidos">Email</label>
                  <input id="email4" type="email" class="form-control" require/>
      
                  <label class="mt-3 form-label" for="contraseña">Rol</label>
                  <input id="rol4" type="text" class="form-control" require/>
                </div>
              </div>
            </form>
            <div class="p-3">
                <button class="btn btn-success" id="guardarCambiosEditarAdmin">Actualizar <i class="bi bi-pencil-fill"></i></button>
               
            </div>
            <div class="d-flex justify-content-end mb-4">
              <button class="btn btn-danger" id="eliminarUsuario">Eliminar <i class="bi bi-trash-fill"></i></button>
            </div>
        </div>
      </div>
          </div>
         
        </div>
      </div>
    </div>

    <div class="col-12 background-radial-gradient overflow-hidden vh-100 d-flex justify-content-center align-items-center ps-5 pe-5">
      

       <table class="table bg-light col-12">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Rol</th>
                <th scope="col">Edicion</th>
  
            </tr>
        </thead>
        <tbody>
           
        </tbody>
    </table>
       
    </div>
    `,
  script: async() => {

    fetch("http://localhost:8081/api/usuarios", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(resp => resp.json())
      .then(data => {
        const usuarios = data.usuarios;
        const nombres = data.nombres;
        const email = data.email;
        const rol = data.rol;
        const id = data.idUsuario;
  
        for (let index = 0; index < usuarios.length; index++) {
          const row = document.createElement('tr');
          const num = document.createElement("th");
          num.setAttribute('scope', 'row');
          num.innerHTML = index;
          row.append(num);
          const nombreTabla = document.createElement('td');
          nombreTabla.classList.add('nombre')
          nombreTabla.innerHTML = nombres[index];
          row.append(nombreTabla);
          const emailTabla = document.createElement('td');
          emailTabla.classList.add('email')
          emailTabla.innerHTML = email[index];
          row.append(emailTabla);
          const rolTabla = document.createElement('td');
          rolTabla.classList.add('rol')
          rolTabla.innerHTML = rol[index];
          row.append(rolTabla);
          const editaTabla = document.createElement('td');
          editaTabla.innerHTML = `<button class="btn btn-sm btn-primary edicion" data-toggle="modal" data-target="#exampleModalCenter"><i class="bi bi-pencil-square editar" data-id="${id[index]}"></i></button>`;
  
          editaTabla.classList.add('editar');
          row.append(editaTabla);
  
          document.querySelector('tbody').append(row);
        }
  
        document.addEventListener('click', (event) => {
          if (event.target.classList.contains('editar')) {
            const id = event.target.dataset.id;
            // Realizar la lógica necesaria para el evento
            console.log(`Clic en el elemento con data-id: ${id}`);


            const fila = event.target.closest('tr')
            const nombre = fila.querySelector('.nombre').textContent
            const email = fila.querySelector('.email').textContent
            const rol = fila.querySelector('.rol').textContent

            document.querySelector("#nombre4").value = nombre
            document.querySelector("#email4").value = email
            document.querySelector("#rol4").value = rol
            /**Funcion Eliminar */
            document.querySelector("#eliminarUsuario").addEventListener("click", ()=>{
              Swal.fire({
                title: 'Seguro que quieres borrar el usuario??',
                text: "Esta accion no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si Borralo'
              }).then((result) => {
                if (result.isConfirmed) {
                  const response = fetch(`http://localhost:8081/api/usuarios/delete/${id}`, {
                  method: 'DELETE',
                  headers: { 'Content-Type': 'application/json' }
                  });
                  Swal.fire(
                    'Borrado!',
                    'El usuario se a borrado correctamente',
                    'success'
                  )
                  const tbody= document.querySelector('tbody')
                  while (tbody.firstChild) {
                    tbody.removeChild(tbody.firstChild);
                  }
                
                     admin.script()
                }
              })
            })
            //Funcion editar
            document.querySelector("#guardarCambiosEditarAdmin").addEventListener("click", ()=>{
              console.log("Debntro de la funcion")
                var newName = document.querySelector("#nombre4").value
                var newEmail = document.querySelector("#email4").value
                var newRol = document.querySelector("#rol4").value

                const updateUsuario = {
                  'name': newName,
                  'email': newEmail,
                  'role': newRol
                }
                var result =fetch( `http://localhost:8081/api/usuarios/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( updateUsuario )
        })
        .then( resp => resp.json())
        .then( data => {
          if(undefined == data) {
            console.log("algo ha fallado");
          } else {
            Swal.fire(
              'Usuario actualizado',
              `El usuario ${newName} ha sido actualizado con éxito`,
              'success'
            ).then( () => {
              document.querySelector('main').innerHTML = interfaz.template
            })
          }
        })
        .catch( console.log )
            })
            
            
          }
        });
      })
      .catch(error => {
        console.error(error.message);
      });
        
  }    

}
