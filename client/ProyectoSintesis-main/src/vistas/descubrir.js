
export const descubrir = {
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
        <div class="container col-12 d-flex justify-content-center col-sm-8">
            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            Descubre tu discoteca <br/>
            <span style="color: hsl(218, 81%, 75%)">Salimos <strong>Tonight ?</strong></span>
            <o/h1>
        </div>
       <div class="d-flex justify-content-center align-items-center ">
            <div id="map" class=""></div>
       </div> 
    </div>`,
  //* Mapa
  script: async () => {
    const map = L.map('map').setView([51.505, -0.09], 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19

    }).addTo(map)

    const titus = L.popup()
      .setLatLng([41.458102, 2.263098])
      .setContent('Titus Carpa.')
      .addTo(map)

    const cocoa = L.popup()
      .setLatLng([41.532747900, 2.429275100])
      .setContent('Cocoa Mataro.')
      .addTo(map)

    const Waka = L.popup()
      .setLatLng([41.536002610, 2.109598480])
      .setContent('Waka Sabadell.')
      .addTo(map)
  }

}
