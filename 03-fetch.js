const resp = fetch('https://reqres.in/api/users?page=1');

resp.then(response=>response.json())
.then((json) =>{ 
    console.log(json.data);
    let htmlX = "";
    let htmlModal = "";
    let content =document.getElementById('container')
    
    json.data.forEach(element => {
    let htlmCard = `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h1 id="container">${element.first_name}</h1>
          <h4 id="container">${element.last_name}</h4>
          <h4 id="container">#${element.id}</h4>
          <p id="container">${element.email}</p>
          <button type="button" class="btn btn-primary" value=${hola = element} data-bs-toggle="modal" data-bs-target="#exampleModal">
            Detalles
          </button>
        </div>
      </div>
    `

    // const resp2 = fetch(`https://reqres.in/api/users/${element.id}`);
    // resp2.then(response=>response.json())
    // .then((json) => {
    //   console.log(json.data.first_name);

      htmlModal = `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Me quiero morir</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="${hola.avatar}" class="card-img-top" alt="...">
        <h1 id="container">${hola.first_name}</h1>
        <h4 id="container">${hola.last_name}</h4>
        <h4 id="container">#${hola.id}</h4>
        <p id="container">${hola.email}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
    `
    // })

    htmlX = htmlX+htlmCard+htmlModal;
});

content.innerHTML= htmlX;
});
