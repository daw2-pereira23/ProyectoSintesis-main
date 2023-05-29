import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { footer } from '../componentes/footer'

export const crearAdmin = {
    template:`
    <div class="container justify-content-center mt-5">
    <div class="card card-Editar" style="width: 13 rem;">
      <form class="p-3 mt-5" id="formEditarUsuario" novalidate>
        <div class="card-body" id="formularios">
          <h1 class="text-primary-emphasis text-center card-title">Crear Usuarios <span id="name"></span></h1>
          <hr />
          <div class="mt-3 card-body">
            <label class="mt-3 form-label" for="nick">Nombre</label>
            <input id="nombreCrear" type="text" class="form-control text-dark"/>

            <label class="mt-3 form-label" for="apellidos">Password</label>
            <input id="passwordCrear" type="password" class="form-control" />

            <label class="mt-3 form-label" for="contraseña">Email</label>
            <input id="emailCrear" type="text" class="form-control" />
            
          </div>
        </div>
      </form>
      <div class="p-3" id="botones">
          <button class="btn btn-success" id="crearUser">Actualizar<i class="bi bi-pencil-fill"></i></button>
          <button class="btn btn-primary noticias" >Noticias<i class="fa-solid fa-newspaper"></i></button>
          <button class="btn btn-primary discotecas" >Discotecas<i class="fa-solid fa-champagne-glasses"></i></button>
      </div>
    </div>
    </div>
    `,
    script:()=>{
      const token = localStorage.getItem('token') 

        document.addEventListener("click", (event)=>{
          if(event.target.classList.contains('noticias')){
            const panel = document.querySelector('#botones');
            while (panel.firstChild) {
              panel.removeChild(panel.firstChild);
            }
            const h1 = document.createElement('h1')
            h1.classList.add("text-primary-emphasis")
            h1.classList.add('text-center')
            h1.classList.add('card-title')
            h1.innerHTML = "Crear Noticias"
            const hr = document.createElement('hr')
            const formularios = document.querySelector('#formularios')
            while (formularios.firstChild) {
                formularios.removeChild(formularios.firstChild);
              }
            formularios.append(h1)
            formularios.append(hr)
            const div = document.createElement('div')
            div.classList.add('mt-3')
            div.classList.add('card-body')
            const label = document.createElement('label')
            label.classList.add('form-label')
            label.classList.add('mt-3')
            label.innerHTML = `Titulo Noticia`
            div.append(label)
            const input = document.createElement('input')
            input.classList.add('form-control')
            input.classList.add('text-dark')
            input.id = `tituloNoticia`
      
            input.setAttribute('pattern', "^[^<>]*$" )
            div.append(input)
            const labelDescription = document.createElement('label')
            labelDescription.classList.add('form-label')
            labelDescription.classList.add('mt-3')
            labelDescription.innerHTML = `Descripcion`

            div.append(labelDescription)
            const inputDescription = document.createElement('input')
            inputDescription.classList.add('form-control')
            inputDescription.classList.add('text-dark')
            inputDescription.id = `descripcionNoticias`

            inputDescription.setAttribute('pattern', "^[^<>]*$" )
            div.append(inputDescription)
            const labelTags = document.createElement('label')
            labelTags.classList.add('form-label')
            labelTags.classList.add('mt-3')
            labelTags.innerHTML = `Tags`
            div.append(labelTags)
            const inputTags = document.createElement('input')
            inputTags.classList.add('form-control')
            inputTags.classList.add('text-dark')
            inputTags.id = `tagsNoticias`
   
            inputTags.setAttribute('pattern', "^[^<>]*$" )
            div.append(inputTags)
            const labelFecha = document.createElement('label')
            labelFecha.classList.add('form-label')
            labelFecha.classList.add('mt-3')
            labelFecha.innerHTML = `Fecha`

            div.append(labelFecha)
            const inputFecha = document.createElement('input')
            inputFecha.classList.add('form-control')
            inputFecha.classList.add('text-dark')
            inputFecha.id = 'fecha'
         
            div.append(inputFecha)
          
            formularios.append(div)
            const actualizar = document.createElement('button')
            actualizar.classList.add('btn')
            actualizar.classList.add('btn-success')
            actualizar.id = `crearNoticia`
            actualizar.innerHTML = `Actualizar`
            const simbolo = document.createElement('i')
            simbolo.classList.add('bi')
            simbolo.classList.add('bi-pencil-fill')
            actualizar.append(simbolo)
            panel.append(actualizar)
            const usuarios = document.createElement('button')
            usuarios.classList.add('btn')
            usuarios.classList.add('btn-primary')
            usuarios.classList.add('usuarios')
            usuarios.innerHTML = `Usuarios`
           
            const usuariosI = document.createElement('i')
            usuariosI.classList.add("fa-solid")
            usuariosI.classList.add('fa-user')
            usuarios.append(usuariosI)
            
            panel.append(usuarios)

            const discotecas = document.createElement('button')
            discotecas.classList.add('btn')
            discotecas.classList.add('btn-primary')
            discotecas.classList.add('discotecas')
            discotecas.innerHTML = `Discotecas`
            const discotecasI = document.createElement('i')
            discotecasI.classList.add('fa-solid')
            discotecasI.classList.add('fa-champagne-glasses')
            discotecas.append(discotecasI)
            panel.append(discotecas)

            

            
           

            document.querySelector('#crearNoticia').addEventListener("click", async()=>{
              const tituloNoticia = document.querySelector('#tituloNoticia').value
              const descripcionNoticia = document.querySelector('#descripcionNoticias').value
              const tagsNoticias = document.querySelector('#tagsNoticias').value
              const date =  document.querySelector('#fecha').value
    
    
                const crearNoticia = {
                  'title': tituloNoticia,
                  'description': descripcionNoticia,
                  'tags':tagsNoticias,
                  'date':date
                }
                
              var urlEndpoint = 'api-2night.up.railway.app/api/noticias/create'
                fetch( urlEndpoint, {
           
                    method: 'POST',
                    headers: { 'Content-Type' : 'application/json', 'token' : token},
                    body: JSON.stringify( crearNoticia )
                  })
                  .then( resp => resp.json() )
                  .then( data => {
                    if (undefined == data) {
                      console.log("Algo ha malido sal");
                    } else {
                    
            
                      Swal.fire(
                        'Noticia creada',
                        `La noticia ha sido creado con éxito`,
                        'success'
                      ).then(() => {
                        document.querySelector('main').innerHTML = crearAdmin.template
                        footer.script('ADMIN_ROLE')
                      })
                    }
                  })
                  .catch( console.log );
            })
          }
        })


            
        
        

        document.querySelector("#crearUser").addEventListener("click", async()=>{
            var name = document.querySelector("#nombreCrear").value
            var password = document.querySelector("#passwordCrear").value
            var email = document.querySelector("#emailCrear").value
            let datos= 
            {
                name: name,
                email: email,
                password: password,
            }
            var urlEndpoint = 'api-2night.up.railway.app/api/usuarios/create'
            fetch( urlEndpoint, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json', 'token' : token},
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
                    document.querySelector('main').innerHTML = crearAdmin.template
                    crearAdmin.script()
                  })
                }
              })
              .catch( console.log );
              
        })
      document.addEventListener("click", (event)=>{
          if(event.target.classList.contains('discotecas')){
            
            const formularios = document.querySelector('#formularios')
            const panel = document.querySelector("#botones")
            while (formularios.firstChild) {
                formularios.removeChild(formularios.firstChild);
              }
              while (panel.firstChild) {
                panel.removeChild(panel.firstChild);
              } 
            const h1 = document.createElement('h1')
            h1.classList.add("text-primary-emphasis")
            h1.classList.add('text-center')
            h1.classList.add('card-title')
            h1.innerHTML = "Crear Discotecas"
            const hr = document.createElement('hr')
            formularios.append(h1,hr)
            const div = document.createElement('div')
            div.classList.add('mt-3')
            div.classList.add('card-body')
            const label = document.createElement('label')
            label.classList.add('form-label')
            label.classList.add('mt-3')
            label.innerHTML = `Nombre discoteca`
            div.append(label)
            const input = document.createElement('input')
            input.classList.add('form-control')
            input.classList.add('text-dark')
            input.id = `name`
            div.append(input)
            const email = document.createElement('label')
            email.classList.add('form-label')
            email.classList.add('mt-3')
            email.innerHTML = `Email Discoteca`
            div.append(email)
            const emailDiscoteca = document.createElement('input')
            emailDiscoteca.classList.add('form-control')
            emailDiscoteca.classList.add('text-dark')
            emailDiscoteca.id = `emailDiscoteca`
            emailDiscoteca.type = 'email'
            div.append(emailDiscoteca)
            const labelDescription = document.createElement('label')
            labelDescription.classList.add('form-label')
            labelDescription.classList.add('mt-3')
            labelDescription.innerHTML = 'Descripcion'
            div.append(labelDescription)
            const inputDescription = document.createElement('input')
            inputDescription.classList.add('form-control')
            inputDescription.classList.add('text-dark')
            inputDescription.id = 'descripcion'
            div.append(inputDescription)
            const labelAddress = document.createElement('label')
            labelAddress.classList.add('form-label')
            labelAddress.classList.add('text-dark')
            labelAddress.innerHTML = `Address`
            div.append(labelAddress)
            const inputAddress = document.createElement('input')
            inputAddress.classList.add('form-control')
            inputAddress.classList.add('text-dark')
            inputAddress.id = `direccionDiscoteca`
            div.append(inputAddress)
            const labelLatitude = document.createElement('label')
            labelLatitude.classList.add('form-label')
            labelLatitude.classList.add('mt-3')
            labelLatitude.innerHTML = `Latitud`
            div.append(labelLatitude)
            const inputLatitude = document.createElement('input')
            inputLatitude.classList.add('form-control')
            inputLatitude.classList.add('text-dark')
            inputLatitude.id = `latitud`
            inputLatitude.type = `numeric`
            div.append(inputLatitude)
            const labelLongitud = document.createElement('label')
            labelLongitud.classList.add('form-label')
            labelLongitud.classList.add('mt-3')
            labelLongitud.innerHTML = `Longitud`
            div.append(labelLongitud)
            const inputLongitud = document.createElement('input')
            inputLongitud.classList.add('form-control')
            inputLongitud.classList.add('text-dark')
            inputLongitud.id = `longitud`
            inputLongitud.type = `numeric`
            div.append(inputLongitud)
            const tagsDiscoteca = document.createElement('label')
            tagsDiscoteca.classList.add('form-label')
            tagsDiscoteca.classList.add('mt-3')
            tagsDiscoteca.innerHTML = `Tags Discoteca`
            div.append(tagsDiscoteca)
            const inputTags = document.createElement('input')
            inputTags.classList.add('form-control')
            inputTags.classList.add('text-dark')
            inputTags.id = `tags`
            inputTags.type = `text`
            div.append(inputTags)
            const labelImagen = document.createElement('label')
            labelImagen.classList.add('form-label')
            labelImagen.classList.add('mt-3')
            labelImagen.innerHTML = `Direccion URL Imagen`
            div.append(labelImagen)
            const inputImagen = document.createElement('input')
            inputImagen.classList.add('form-control')
            inputImagen.classList.add('text-dark')
            inputImagen.id = `imagen`
            inputImagen.type = `text`
            div.append(inputImagen)
  
            formularios.append(div)
            const actualizar = document.createElement('button')
            actualizar.classList.add('btn')
            actualizar.classList.add('btn-success')
            actualizar.id = `crearDiscoteca`
            actualizar.innerHTML = `Actualizar`
            const simbolo = document.createElement('i')
            simbolo.classList.add('bi')
            simbolo.classList.add('bi-pencil-fill')
            actualizar.append(simbolo)
            panel.append(actualizar)

            const usuarios = document.createElement('button')
            usuarios.classList.add('btn')
            usuarios.classList.add('btn-primary')
            usuarios.classList.add('usuarios')
            usuarios.innerHTML = `Usuarios`
            
            const usuariosI = document.createElement('i')
            usuariosI.classList.add("fa-solid")
            usuariosI.classList.add('fa-user')
            usuarios.append(usuariosI)
           
            panel.append(usuarios)
            

            const noticias = document.createElement('button')
            noticias.classList.add('btn')
            noticias.classList.add('btn-primary')
            noticias.classList.add('ps-2')
            noticias.classList.add('noticias')
            noticias.innerHTML = `Noticias`

            panel.append(noticias)

            const iNoticias = document.createElement('i')
            iNoticias.classList.add("fa-solid")
            iNoticias.classList.add('fa-newspaper')
            iNoticias.classList.add('usuarios')
  
            noticias.append(iNoticias)

            
            document.querySelector('#crearDiscoteca').addEventListener("click", async()=>{
              const nombreDiscoteca = document.querySelector('#name').value
              const emailDiscoteca = document.querySelector('#emailDiscoteca').value
              const descripcionDiscoteca = document.querySelector('#descripcion').value
              const direccionDiscoteca = document.querySelector('#direccionDiscoteca').value
              const latitud = document.querySelector('#latitud').value
              const longitud = document.querySelector('#longitud').value
              const tags = document.querySelector("#tags").value
              const imagen = document.querySelector("#imagen").value

              const datos = {
                'name': nombreDiscoteca,
                'email': emailDiscoteca,
                'description': descripcionDiscoteca,
                'address': direccionDiscoteca,
                'latitude' : latitud,
                'longitude': longitud,
                'tags': tags,
                'img':imagen

              }
              console.log(descripcion)
              var urlEndpoint = 'api-2night.up.railway.app/api/discotecas/create'
            fetch( urlEndpoint, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json', 'token' : token},
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
                    'Discoteca creadoa',
                    `La discoteca ${nombreDiscoteca} ha sido creado con éxito`,
                    'success'
                  ).then(() => {
                    document.querySelector('main').innerHTML = crearAdmin.template
                  })
                }
              })
              .catch( console.log );
            })
          }
      })
      document.addEventListener("click", (event)=>{
          if(event.target.classList.contains('usuarios')){

            document.querySelector('main').innerHTML = crearAdmin.template
            crearAdmin.script()
          }
           
          
      })
    }


        
}