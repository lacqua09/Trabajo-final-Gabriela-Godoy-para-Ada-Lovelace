let contenedor = document.getElementById("contenedor-tarjetas")
console.log(contenedor);
fetch('https://rickandmortyapi.com/api/character/')
  .then(response => response.json())
  .then(json => {
    printPersonajes(json.results);
  });
function printPersonajes(personajes) {
  const contenedor = document.getElementById('contenedor-tarjetas')
  personajes.forEach(personajes => {
    contenedor.innerHTML = `
    ${contenedor.innerHTML}
    <div class="card"><img src="${personajes.image}"></img>
    <h2>${personajes.name.charAt(0).toUpperCase() + personajes.name.slice(1)}</h2>
    <h3>${personajes.status.charAt(0).toUpperCase() + personajes.status.slice(1)}</h3>
    <h4>${personajes.species.charAt(0).toUpperCase() + personajes.species.slice(1)}</h4>
    </div>
  `;
  });
}
function getPersonajesId(url) {
  return url.replace('rickandmortyapi.com/api/character/', '').replace('/', '')
}

var n = 0;
function cambiarPosition() {
  var nombre = document.getElementById('nombre');
  if (n == 0) {
    nombre.style.position = 'absolute';
    n = 1;
  }
  else {
    nombre.style.position = 'relative';
    n = 0;
  }
}

