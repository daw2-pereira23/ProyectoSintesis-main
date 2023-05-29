
export const descubrir = {
  template: `
  
    <div class="col-12 background-radial-gradient overflow-hidden vh-100">
        
        <div class="container col-12 d-flex justify-content-center col-sm-8">
            <h1 class="my-5 display-5 fw-bold ls-tight" style="color: hsl(218, 81%, 95%)">
            Descubre tu discoteca <br/>
            <span style="color: hsl(218, 81%, 75%)">¿Salimos <strong>Tonight?</strong></span>
            <o/h1>
        </div>
       <div class="d-flex justify-content-center align-items-center ">
            <div id="map" class=""></div>
       </div> 
    </div>`,
  //* Mapa
  script: async () => {
    document.querySelector('footer').classList.add('descubrir-footer')
    const map = new L.map('map').setView([41.454161110998264, 2.243896936861353], 10)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19

    }).addTo(map)

    fetch('http://localhost:8081/api/discotecas', {
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
      for(let i = 0; i < dataArray[0].length; i++) {
        const popup = new L.popup()
        .setLatLng([data.discotecas[i].latitude, data.discotecas[i].longitude])
        .setContent(`
          <h5>${data.discotecas[i].name}</h5>
          <div>
            <br />
            <p>${data.discotecas[i].description}</p>
            <img src="${data.discotecas[i].img}" style="width: 10rem;"></img>
            <br />
            <p>Información de la sala: <a href="${data.discotecas[i].email}">${data.discotecas[i].email}</a></p>
            <hr />
            <p>Tags: ${data.discotecas[i].tags}</p>
          </div>
        `)

        new L.Marker([data.discotecas[i].latitude, data.discotecas[i].longitude])
        .bindPopup(popup)
        .openPopup()
        .addTo(map)
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
}
