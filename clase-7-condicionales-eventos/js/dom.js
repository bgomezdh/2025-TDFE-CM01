let telefono = document.querySelector(".telefono");
let foto = document.querySelector(".fotoPerfil");
let genero = document.querySelector(".genero");
let email = document.querySelector(".email");
let listItem = document.querySelectorAll("li");

let lista = document.querySelector(".lista");


telefono.style.color = "red";
telefono.style.color = "blue";
telefono.style.fontSize = "43px";

/* let pregunta = confirm("Quieres cambiar de foto de perfil??");

if (pregunta) {
    foto.src = "https://randomuser.me/api/portraits/women/18.jpg";
}  */

// cambiarle el texto interno
genero.innerText = "Femenino";

email.innerText = "brian@gmail.com";

// argentina azul peru roja

listItem[0].style.color = "blue";
listItem[1].style.color = "red";


lista.innerHTML += "<li>Venezuela</li>"


