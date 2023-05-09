
export const interfaz = {
  template: `
    <div class="col-12 background-radial-gradient overflow-hidden">
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
          <div class="container py-5 px-md-5 text-center text-lg-start my-5">
            <div class="container col-12 d-flex justify-content-center">
              <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
              Tu App para salir de fiesta <br />
              <span style="color: hsl(218, 81%, 75%)">Salimos <strong>Tonight ?</strong></span>
              <o/h1>
            </div>
          </div>
        <div class="d-flex justify-content-center align-items-center ">
          <div class="row">
            <div class="card sm-p-2">
              <img src="../imagenes/RazzMataz.jpg" alt="" class="card-img-top img-fluid pt-1">
              <div class="card-body">
                <h5 class="card-title">RazzMatazz</h5>
                <p class="card-title">Aqui ira información sobre la discoteca</p>
                <a href="https://www.salarazzmatazz.com" target="_blank">Más información</a>
              </div>
            </div>
          </div>
        </div>
    
    </div>
    `,
  script: () => {
    document.querySelector('#masinformacion').addEventListener('click', () => {
      const boton = document.querySelector('#masinformacion')
      const p = document.createElement('p')
      const enlace = `
        <a href="https://www.salarazzmatazz.com" class="btn btn-primary white-color" id="masinformacion">Mas Informacion</a>
      `
      p.innerHTML = enlace
      boton.innerHTML = enlace
    })
  }
}
