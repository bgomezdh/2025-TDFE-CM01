// una alerta
alert("Buenos dias grupo!!!");

//un campo para la respuesta
let respuesta = prompt("Ingrese su nombre y apellido");


// pregunta de verdadero y falso
let respuestaConfirm = confirm("La persona llamada " + respuesta + " es mayor de edad??");

if (respuestaConfirm) {
    alert("El usuario es mayor de edad, puede ingresar a Moscu");
} else {
    alert("El usuario NO es mayor de edad, debe ir a jugar al Furbito");
}

