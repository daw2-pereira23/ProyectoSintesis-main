
export const interfaz = {
  template: `
<div class="col-12 ">

<div class="container-fluid text-center justify-content-center text-light">
    <h1>Tu App Para Salir de fiesta</h1>
    <div id="inyeccionDiscotecas" class=" row d-flex text-black align-items-center justify-content-center">

    </div>
</div>
  
</div>
    `,
  script: () => {
    document.querySelector('footer').classList.add('footer-interfaz')
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
      for(let i = 0; i < dataArray[0].length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('targetaInterfaz')
        card.classList.add('ms-2')
        
        const imagenDiscoteca = document.createElement('img')
        imagenDiscoteca.classList.add('card-img-top')
        imagenDiscoteca.classList.add('img-fluid')
        imagenDiscoteca.classList.add('imagenesInterfaz')
        
        imagenDiscoteca.src = data.discotecas[i].img
        card.append(imagenDiscoteca)
        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
       
        const h5 = document.createElement('h5')
        h5.classList.add('card-title')
        h5.innerHTML = data.discotecas[i].name
        cardBody.append(h5)
        const p = document.createElement('p')
        p.classList.add('card-text')
        p.innerHTML = data.discotecas[i].email
        cardBody.append(p)
        const tags = document.createElement('p')
        tags.classList.add('card-text')
        tags.innerHTML = data.discotecas[i].tags
        cardBody.append(tags)


       


        card.append(cardBody)
        
        

        document.querySelector('#inyeccionDiscotecas').append(card)
        



        
      }
      
    })
    .catch(error => {
      console.error(error);
    });
  }
}
/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>





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
*/