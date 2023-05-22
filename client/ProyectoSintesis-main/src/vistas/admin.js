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
            ${editarPerfil.template}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary " data-dismiss="modal">Cerrar</button>
            <button type="button" class="botones white-color" data-dismiss="modal" id="guardar">Guardar cambios</button>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 background-radial-gradient overflow-hidden vh-100 d-flex justify-content-center align-items-center ps-5 pe-5">
      <style>
          
          
      
          #radius-shape-1 {
            height: 220px;
            width: 220px;
            top: -60px;
            left: -130px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }
      
          #radius-shape-2 {
            border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
            bottom: -60px;
            right: -110px;
            width: 300px;
            height: 300px;
            background: radial-gradient(#44006b, #ad1fff);
            overflow: hidden;
          }
      
          .bg-glass {
            background-color: hsla(0, 0%, 100%, 0.9) !important;
            backdrop-filter: saturate(200%) blur(25px);
          }
        </style>

       <table class="table bg-light col-12">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nick</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Editar</th>
                <th scope="col">Borrar</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>jhon</td>
                <td>Jon@gmail.com</td>
                <td>10/10/1995</td>
                <td><button class="btn btn-sm btn-primary" id="editar" data-toggle="modal" data-target="#exampleModalCenter"><i class="bi bi-pencil-square"></i></button></td>
                <td><button class="btn btn-sm btn-danger" id="borrar"><i class="bi bi-trash3-fill"></i></button></td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>mark</td>
                <td>mark@gmail.com</td>
                <td>10/10/1996</td>
                <td><button class="btn btn-sm btn-primary" id="editar" data-toggle="modal" data-target="#exampleModalCenter"><i class="bi bi-pencil-square"></i></button></td>
                <td><button class="btn btn-sm btn-danger"><i class="bi bi-trash3-fill"></i></button></td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Raj</td>
                <td>raj@gmail.com</td>
                <td>10/10/1997</td>
                <td><button class="btn btn-sm btn-primary" id="editar" data-toggle="modal" data-target="#exampleModalCenter"><i class="bi bi-pencil-square"></i></button></td>
                <td><button class="btn btn-sm btn-danger"><i class="bi bi-trash3-fill"></i></button></td>
            </tr>
        </tbody>
    </table>
       
    </div>
    `,
  script: () => {
    
    document.querySelector('#editar').addEventListener('click', () => {
      
      document.querySelector('#guardar').addEventListener('click', () => {
        Swal.fire({
          title: 'Estas seguro que quieres editar el usuario?',
          text: 'Podras actualizar el perfil más adelante',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#00b347',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, acepto',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Editado!',
              'El usuario a sido editado correctamente',
              ''
            )
          }
        })
      })
    })
    document.querySelector('#borrar').addEventListener('click', () => {
      console.log('Has pulsado borrar')
      Swal.fire({
        title: 'Atención!',
        text: 'Deseas borrar el usuario ',
        icon: 'error',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo borrar el usuario!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Borrado',
            'El usuario a sido borrado ',
            'correctamente '
          )
        }
      })
    })
  }

}
