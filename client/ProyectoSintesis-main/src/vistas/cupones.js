
export const cupones = {
  template: `
  <div class="col-12 background-radial-gradient overflow-hidden vh-100">
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
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <h1 class="my-5 display-5 fw-bold ls-tight text-center" style="color: hsl(218, 81%, 95%)">
      CUPONES <br/>
      <span style="color: hsl(218, 81%, 75%)">Salimos <strong>Tonight ?</strong></span>
      <o/h1>
      <div class="d-flex flex-column text-center justify-content-center">
        <div class="col-xs-12 col-6 text-center ">
          1
        </div>
        <div class="col-6">
          2
        </div>
      </div>
    </div>
  </div>
    `,
  script: () => {
    console.log('Cupones')
  }
}
