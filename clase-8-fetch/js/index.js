const URL = "https://randomuser.me/api";

//recuperar elementos
let genero = document.querySelector(".genero");
let telefono = document.querySelector(".telefono");
let email = document.querySelector(".email");
let fotoPerfil = document.querySelector(".fotoPerfil");
let fotoPerfil2 = document.querySelector(".fotoPerfil2");
let nombre = document.querySelector(".nombre");
let fecha = document.querySelector(".fecha");

//ir a buscar los datos
fetch(URL)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data.results);
    let result = data.results[0];
    genero.innerText = result.gender;
    telefono.innerText = result.cell;
    email.innerText = result.email;
    fotoPerfil.src = result.picture.large;
    fotoPerfil2.src= result.picture.thumbnail;

    //nombre.innerText = result.name.title + " " + result.name.first + " " + result.name.last;
    nombre.innerText = `Nombre es : ${result.name.first} y el apellido es ${result.name.last}`;

    fecha.innerText = result.dob.date;
})
.catch(function(error) {
    console.log(error);
});



