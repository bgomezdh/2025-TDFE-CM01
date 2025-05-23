const URL = "https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre";

// los elementos que quiero cambiar del DOM
let lista = document.querySelector(".lista");

// pedir los datos con el fetch
fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let prov = data.provincias;
    let contenido = "";
    for (let i = 0; i < prov.length; i++) {
        const provincia = prov[i];

        contenido += `<li class="lista-item">
                        <a href="./index.html?id=${provincia.id}">${provincia.nombre}</a>
                    </li>`
    }

    lista.innerHTML = contenido;
    
})
.catch(function(error) {
    console.log(error);
    
});


