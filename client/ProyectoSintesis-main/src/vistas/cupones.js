
export const cupones = {
  template: `
  <div class="col-12 background-radial-gradient overflow-hidden vh-100 justify-content-center">
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
  <h1 class="tituloCupon text-center">Cupones Disponibles</h1>
  <p class="tituloCupon text-center">Selecciona el cupón que desees canjear:</p>
  <div class="row">
    <div class="col-md-4 mb-4">
      <div class="card">
        <img class="card-img-top" src="https://via.placeholder.com/350x150" alt="Cupón 1">
        <div class="card-body">
          <h5 class="card-title">Cupón 1</h5>
          <p class="card-text">Descripción del cupón 1.</p>
          <a href="#" class="btn btn-primary">Canjear</a>
        </div>
      </div>
    </div>
    `,
  script: () => {
    console.log('Cupones')
  }
}
