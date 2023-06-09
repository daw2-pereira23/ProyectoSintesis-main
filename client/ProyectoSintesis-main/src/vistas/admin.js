import Swal, { swal } from 'sweetalert2/dist/sweetalert2.js'
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
            <form class="p-3 mt-5" id="formEditarUsuario" novalidate>
              <div class="card-body">
                <h1 class="text-primary-emphasis text-center card-title">Editar usuario <span id="name"></span></h1>
                <hr />
                <div class="mt-3 card-body">
                  <label class="mt-3 form-label" for="nick">Nombre</label>
                  <input id="nombre4" type="text" class="form-control text-dark" require pattern="^[^<>]*$"/>
      
                  <label class="mt-3 form-label" for="apellidos">Email</label>
                  <input id="email4" type="email" class="form-control" require pattern="^[^<>]*$"/>
      
                  <label class="mt-3 form-label" for="contraseña">Rol</label>
                  <input id="rol4" type="text" class="form-control" require pattern="^[^<>]*$"/>
                </div>
              </div>
            </form>
            <div class="p-3">
                <button class="btn btn-success" id="guardarCambiosEditarAdmin">Crear<i class="bi bi-pencil-fill"></i></button>
                <button class="btn btn-danger" id="eliminarUsuario">Eliminar<i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
      </div>
          </div>
         
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
            <form class="p-3 mt-5" id="formEditarDiscoteca" novalidate>
              <div class="card-body">
                <h1 class="text-primary-emphasis text-center card-title">Editar Discoteca <span id="name"></span></h1>
                <hr />
                <div class="mt-3 card-body">
                  <label class="mt-3 form-label" for="nick">Nombre</label>
                  <input id="nombreDiscoteca" type="text" class="form-control text-dark" required pattern="^[^<>]*$"/>

                  <label class="mt-3 form-label" for="contraseña">Descripcion</label>
                  <input id="descripcion" type="text" class="form-control" required pattern="^[^<>]*$"/>
      
                  <label class="mt-3 form-label" for="apellidos">Email</label>
                  <input id="emailDiscoteca" type="email" class="form-control" required pattern="^[^<>]*$"/>
      
                  <label class="mt-3 form-label" for="contraseña">Tags</label>
                  <input id="tags" type="text" class="form-control" required pattern="^[^<>]*$"/>
                </div>
              </div>
            </form>
            <div class="p-3">
                <button class="btn btn-success" id="guardarCambiosDiscoteca">Crear<i class="bi bi-pencil-fill"></i></button>
                <button class="btn btn-danger" id="eliminarDiscoteca">Eliminar<i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
      </div>
          </div>
         
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
            <form class="p-3 mt-5" id="formEditarNoticia" novalidate>
              <div class="card-body">
                <h1 class="text-primary-emphasis text-center card-title">Editar Noticia <span id="name"></span></h1>
                <hr />
                <div class="mt-3 card-body">
                  <label class="mt-3 form-label" for="nick">Titulo</label>
                  <input id="tituloNoticia" type="text" class="form-control text-dark"  require pattern="^[^<>]*$"/>

                  <label class="mt-3 form-label" for="contraseña">Descripcion</label>
                  <input id="descripcionNoticia" type="text" class="form-control" require pattern="^[^<>]*$"/>
      
                  <label class="mt-3 form-label" for="apellidos">Email</label>
                  <input id="tagsNoticia" type="email" class="form-control" require pattern="^[^<>]*$"/>
  
                </div>
              </div>
            </form>
            <div class="p-3">
                <button class="btn btn-success" id="guardarCambiosNoticia">Crear<i class="bi bi-pencil-fill"></i></button>
                <button class="btn btn-danger" id="eliminarNoticias">Eliminar<i class="fa-solid fa-trash"></i></button>
               
            </div>
        </div>
      </div>
          </div>
         
        </div>
      </div>
    </div>
   >
    <div class="col-12 d-flex vh-75 justify-content-center align-items-center ps-5 pe-5 formularioAdmin">
   

       <table class="table bg-light col-12">
        <thead>
            <tr id="encabezado">
                
            </tr>
        </thead>
        <tbody>
           
        </tbody>
      </table>
      
       
    </div>
    
    
    `,
  script: async() => {

    document.addEventListener("click", (event)=>{
      document.querySelector('footer').classList.add('footer-admin')
      if(event.target.classList.contains('usuarios')){
        const tbody = document.querySelector('tbody');
                while (tbody.firstChild) {
                  tbody.removeChild(tbody.firstChild);
                  
                }
                const encabezado = document.querySelector('#encabezado');
                while(encabezado.firstChild){
                  encabezado.removeChild(encabezado.firstChild)
                }
        admin.script()
      }
    })
    document.querySelector('#encabezado').innerHTML = `<th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Email</th>
                <th scope="col">Rol</th>
                <th scope="col">Edicion</th>
                <th scope="col">
                <button class="btn btn-sm btn-primary discotecas"><i class="fa-solid fa-champagne-glasses discotecas"></i></button><button class="btn btn-sm btn-primary noticias ms-5"><i class="bi bi-pencil-square noticias"></i></button>
                </th>`
    const token = localStorage.getItem('token')

    fetch("api-2night.up.railway.app/api/usuarios", {
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
                  const response = fetch(`api-2night.up.railway.app/api/usuarios/delete/${id}`, {
                  method: 'DELETE',
                  headers: { 'Content-Type' : 'application/json', 'token' : token}
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
            //Funcion editar Usuarios
            document.querySelector("#guardarCambiosEditarAdmin").addEventListener("click", ()=>{
                document.querySelector('#formEditarUsuario').classList.add('was-validated')
                const estadoForm = document.querySelector('#formEditarUsuario').checkValidity()
                console.log(estadoForm)
                  if(estadoForm == true){
                
                    var newName = document.querySelector("#nombre4").value
                    var newEmail = document.querySelector("#email4").value
                    var newRol = document.querySelector("#rol4").value

                    const updateUsuario = {
                      'name': newName,
                      'email': newEmail,
                      'role': newRol
                    }
                    var result =fetch( `api-2night.up.railway.app/api/usuarios/update/${id}`, {
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
                  }
                  if(estadoForm == false){
                    Swal.fire("Revisa Bien Los Campos")
                  }
                })
            
            
                }
              });
            })
            .catch(error => {
              console.error(error.message);
            });


            //CRUD NOTICIAS
            document.addEventListener("click", (event)=>{
              if(event.target.classList.contains('noticias')){

                const tbody = document.querySelector('tbody');
                while (tbody.firstChild) {
                  tbody.removeChild(tbody.firstChild);
                  
                }
                const encabezado = document.querySelector('#encabezado');
                while(encabezado.firstChild){
                  encabezado.removeChild(encabezado.firstChild)
                }
                const hashtag = document.createElement('th')
                hashtag.innerHTML = "#"
                encabezado.append(hashtag)
                const nombre = document.createElement('th')
                nombre.innerHTML = 'Nombre'
                encabezado.append(nombre)
                const descripcion = document.createElement('th')
                descripcion.innerHTML = 'Descripcion'
                encabezado.append(descripcion)
                const tags = document.createElement('th')
                tags.innerHTML = 'Tags'
                encabezado.append(tags)
                const acciones = document.createElement('th')
                acciones.innerHTML = `<button class="btn btn-sm btn-primary discotecas"><i class="fa-solid fa-champagne-glasses discotecas"></i></button><button class="btn btn-sm btn-primary noticias ms-5"><i class="bi bi-pencil-square noticias"></i></button>`
                
                encabezado.append(acciones)
                fetch("api-2night.up.railway.app/api/noticias", {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
              })
                .then(resp => resp.json())
                .then(data => {
                  console.log(data)
                  const dataNoticias = data.noticias 
                  const tbody = document.querySelector('tbody')
               
                 for(let i = 0; i<dataNoticias.length;i++){
                  const row = document.createElement('tr')
                  const num = document.createElement("th");
                  num.setAttribute('scope', 'row');
                  num.innerHTML = i;
                  row.append(num);
                  const nombre = document.createElement('td')
                  nombre.classList.add('nombreNoticia')
                  nombre.innerHTML = data.noticias[i].title
                  row.append(nombre)
                 
                  const descripcion = document.createElement('td')
                  descripcion.classList.add('descripcion')
                  descripcion.innerHTML = data.noticias[i].description
                  row.append(descripcion)
                  const tags = document.createElement('td')
                  tags.classList.add('tags')
                  tags.innerHTML = data.noticias[i].tags
                  row.append(tags)
                  const accion = document.createElement('td')
                  accion.classList.add('accion')
                  accion.innerHTML = `<button class="btn btn-sm btn-primary edicionNoticia" data-toggle="modal" data-target="#exampleModalCenter3" data-id="${data.noticias[i]._id}"><i class="bi bi-pencil-square edicionNoticia" data-id="${data.noticias[i]._id}"></i></button>`
                  row.append(accion)
                  tbody.append(row)
                  
                 }
                 
                })
                document.addEventListener("click", (event)=>{
                  if(event.target.classList.contains('edicionNoticia')){
                    const id = event.target.dataset.id;
                    console.log(id)
                    
                    const fila = event.target.closest('tr')
                    const nombre = fila.querySelector('.nombreNoticia').textContent
                    const descripcion = fila.querySelector('.descripcion').textContent
                    const tags = fila.querySelector('.tags').textContent
                    document.querySelector('#tituloNoticia').value = nombre
                    document.querySelector('#descripcionNoticia').value = descripcion
                    document.querySelector('#tagsNoticia').value = tags
                    document.querySelector('#guardarCambiosNoticia').addEventListener("click", ()=>{

                      document.querySelector('#formEditarNoticia').classList.add('was-validated')
                      const estadoForm = document.querySelector('#formEditarNoticia').checkValidity()
                      if(estadoForm == true){
                        const tituloNoticia = document.querySelector('#tituloNoticia').value
                        const descripcionNoticia = document.querySelector('#descripcionNoticia').value
                        const tagsNoticias = document.querySelector('#tagsNoticia').value
                        
                        const updateNoticia = {
                          'title': tituloNoticia,
                          'description': descripcionNoticia,
                          'tags':tagsNoticias
                        }
                        var result =fetch( `api-2night.up.railway.app/api/noticias/update/${id}`, {
                          method: 'PUT',
                          headers: { 'Content-Type' : 'application/json', 'token' : token},
                          body: JSON.stringify( updateNoticia )
                          })
                          .then( resp => resp.json())
                          .then( data => {
                            if(undefined == data) {
                              console.log("algo ha fallado");
                            } else {
                              Swal.fire(
                                'Noticia actualizada',
                                `La Noticia ${tituloNoticia} ha sido actualizada con éxito`,
                                'success'
                              ).then( () => {
                                const tbody = document.querySelector('tbody');
                                const encabezado = document.querySelector('#encabezado');
                                while(encabezado.firstChild){
                                  encabezado.removeChild(encabezado.firstChild)
                                }
                                while (tbody.firstChild) {
                                  tbody.removeChild(tbody.firstChild);
                                }
                                admin.script()
                          
                              })
                            }
                          })
                          .catch( console.log )
                      }
                      if(estadoForm == false){
                        swal.fire("Revisa Bien Los Campos")
                      }
                      

                    })


                    document.querySelector("#eliminarNoticias").addEventListener("click", ()=>{
                      console.log("ola")
                      Swal.fire({
                        title: 'Seguro que quieres borrar la noticia??',
                        text: "Esta accion no se puede revertir",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si Borrala'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          const response = fetch(`api-2night.up.railway.app/api/noticias/delete/${id}`, {
                          method: 'DELETE',
                          headers: { 'Content-Type' : 'application/json', 'token' : token}
                          });
                          Swal.fire(
                            'Borrado!',
                            'La noticia se a borrado correctamente',
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
                  }
                })
                
              }
              
              


              //Si pulsas discotecas
              if (event.target.classList.contains('discotecas')) {
                console.log("Discotecas")
                const tbody = document.querySelector('tbody');
                while (tbody.firstChild) {
                  tbody.removeChild(tbody.firstChild);
                  
                }
                const encabezado = document.querySelector('#encabezado');
                while(encabezado.firstChild){
                  encabezado.removeChild(encabezado.firstChild)
                }

                const hashtag = document.createElement('th')
                hashtag.innerHTML = '#'
                encabezado.append(hashtag)
                const nombreDiscoteca = document.createElement('th')
                nombreDiscoteca.innerHTML = 'Nombre'
                encabezado.append(nombreDiscoteca)
                const descripcion = document.createElement('th')
                descripcion.innerHTML = 'Descripcion'
                encabezado.append(descripcion)
                const email = document.createElement('th')
                email.innerHTML = 'Email'
                encabezado.append(email)
                const tags = document.createElement('th')
                tags.innerHTML = 'Tags'
                encabezado.append(tags)
                const acciones = document.createElement('th')
                acciones.innerHTML = '<button class="btn btn-sm btn-primary usuarios"><i class="fa-solid fa-solid fa-newspaper usuarios"></i></button><button class="btn btn-sm btn-primary noticias ms-5"><i class="bi bi-pencil-square noticias"></i></button>`'
                encabezado.append(acciones)
                fetch('api-2night.up.railway.app/api/discotecas', {
                  method: 'GET',
                  headers: { 'Content-Type': 'application/json' },
                })
                .then(response => {
                  if (!response.ok) {
                    throw new Error('Error: ' + response.status);
                  }
                  return response.json(); 
                })
              .then(data => {
                const dataArray = Object.values(data);
                const tbody = document.querySelector('tbody');
                for(let i = 0; i < dataArray[0].length; i++) {
                  console.log(data.discotecas[i]._id)
                  const row = document.createElement('tr');
                    const num = document.createElement("th");
                    num.setAttribute('scope', 'row');
                    num.innerHTML = i;
                    row.append(num);
                    const nombre = document.createElement('td');
                    nombre.classList.add('nombreDiscoteca')
                    nombre.innerHTML = data.discotecas[i].name
                    row.append(nombre)
                    const descripcion = document.createElement('td')
                    descripcion.classList.add('descripcion')
                    descripcion.innerHTML = data.discotecas[i].description
                    row.append(descripcion)
                    const email = document.createElement('td')
                    email.classList.add('emailDiscoteca')
                    email.innerHTML = data.discotecas[i].email
                    row.append(email)
                    const tags = document.createElement('td')
                
                    tags.classList.add('tags')
                    tags.innerHTML = data.discotecas[i].tags
                    row.append(tags)
                    const accion = document.createElement('th')
                    accion.classList.add('editarDiscotecas')
                    accion.innerHTML = `<button class="btn btn-sm btn-primary edicionDiscoteca" data-toggle="modal" data-target="#exampleModalCenter2" data-id="${data.discotecas[i]._id}"><i class="bi bi-pencil-square edicionDiscoteca" data-id="${data.discotecas[i]._id}"></i></button>`
                    row.append(accion)
                    tbody.append(row)

                }

                document.addEventListener("click", (event)=>{
                  if(event.target.classList.contains('edicionDiscoteca')){
                    const id = event.target.dataset.id;
                    const fila = event.target.closest('tr')
                    const nombreDiscoteca = fila.querySelector('.nombreDiscoteca').textContent
                    const descripcion = fila.querySelector('.descripcion').textContent
                    const email = fila.querySelector('.emailDiscoteca').textContent
                    const tags = fila.querySelector('.tags').textContent
                    document.querySelector('#nombreDiscoteca').value = nombreDiscoteca
                    document.querySelector('#descripcion').value = descripcion
                    document.querySelector("#emailDiscoteca").value = email
                    document.querySelector('#tags').value = tags
                    document.querySelector("#eliminarDiscoteca").addEventListener("click", ()=>{
                      Swal.fire({
                        title: 'Seguro que quieres borrar la discoteca??',
                        text: "Esta accion no se puede revertir",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Si Borralo'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          const response = fetch(`api-2night.up.railway.app/api/discotecas/delete/${id}`, {
                          method: 'DELETE',
                          headers: { 'Content-Type' : 'application/json', 'token' : token}
                          });
                          Swal.fire(
                            'Borrado!',
                            'La discoteca se a borrado correctamente',
                            'success'
                          )
                          const tbody = document.querySelector('tbody');
                              const encabezado = document.querySelector('#encabezado');
                              while(encabezado.firstChild){
                                encabezado.removeChild(encabezado.firstChild)
                              }
                              while (tbody.firstChild) {
                                tbody.removeChild(tbody.firstChild);
                                
                              }
                    
                            
                        }
                      })
                    })
                    
                    document.querySelector("#guardarCambiosDiscoteca").addEventListener("click", ()=>{
                      document.querySelector('#formEditarDiscoteca').classList.add('was-validated')
                      const estadoForm = document.querySelector('#formEditarDiscoteca').checkValidity()
                
                      if(estadoForm == true){
                        console.log(estadoForm)
                        const id = event.target.dataset.id;
                        console.log("Discoteca a editar" + id)
                        const nombreDiscotecaEditar =  document.querySelector('#nombreDiscoteca').value 
                        const descripcionEditar = document.querySelector('#descripcion').value
                        const emailDiscotecaEditar =document.querySelector("#emailDiscoteca").value 
                        const tagsDiscotecaEditar = document.querySelector('#tags').value
                          const updateDiscoteca = {
                            'name': nombreDiscotecaEditar,
                            'email': emailDiscotecaEditar,
                            'descripcion': descripcionEditar,
                            'tags':tagsDiscotecaEditar
                                
                          }
                  
                        fetch( `api-2night.up.railway.app/api/discotecas/update/${id}`, {
                          method: 'PUT',
                          headers: { 'Content-Type' : 'application/json', 'token' : token},
                          body: JSON.stringify( updateDiscoteca )
                          })
                          .then( resp => resp.json())
                          .then( data => {
                            if(undefined == data) {
                              console.log("algo ha fallado");
                            } else {
                              console.log(data)
                              Swal.fire(
                                'Discoteca actualizada',
                                `La discoteca ${nombreDiscotecaEditar} ha sido actualizada con éxito`,
                                'success'
                                
                              ).then( () => {
                                const tbody = document.querySelector('tbody');
                              const encabezado = document.querySelector('#encabezado');
                              while(encabezado.firstChild){
                                encabezado.removeChild(encabezado.firstChild)
                              }
                              while (tbody.firstChild) {
                                tbody.removeChild(tbody.firstChild);
                                
                              }
                    
                              admin.script()
                              })
                            }
                          })
                          .catch( console.log )
                      }
                      if(estadoForm == false){
                        Swal.fire("Revisa Bien Los Datos")
                      }
                      
                    })
                  }
                })
          })
          .catch(error => {
            console.error(error);
          });
          
          
        }
      })
        
  }    

}
