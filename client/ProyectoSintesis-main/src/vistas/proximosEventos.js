
export const proximosEventos = {
  template: `
    <div class="col-12 background-radial-gradient d-flex justify-content-center align-items-center overflow-hidden">
      
        
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5 card-Editar">
            <div class="row row-striped">
                <div class="col-2 text-right card-Editar">
                    <h1 class="display-4"><span class="badge badge-secondary">16</span></h1>
                    <h2>MAR</h2>
                </div>
                <div class=" col-10 card-Editar" id="inyeccionNoticias" >
                    
                    
                    
                </div>
            </div>
            
        </div>
    </div>
      `,
  script: () => {
  
    fetch("api-2night.up.railway.app/api/noticias", {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
              })
                .then(resp => resp.json())
                .then(data => {
                  const dataNoticias = data.noticias 
                  console.log(data)
                  console.log(data)
                  for(let index = 0 ;index<dataNoticias.length; index++){
                    const inyeccion = document.querySelector('#inyeccionNoticias')
                    const titulo = document.createElement('h3')
                    titulo.classList.add('text-uppercase')
                    titulo.innerHTML = data.noticias[index].title
                    inyeccion.append(titulo)
                    const descripcion = document.createElement('p')
                    descripcion.innerHTML = data.noticias[index].description
                    inyeccion.append(descripcion)
                    const tags = document.createElement('p')
                    tags.innerHTML = data.noticias[index].tags
                    inyeccion.append(tags)
                    console.log(index)
                  }
                })
                
  }
}
