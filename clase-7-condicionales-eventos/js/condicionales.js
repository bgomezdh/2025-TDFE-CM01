let edad = prompt("Ingrese su edad");

if (edad >= 18) {
    alert("Puedes ingresar")
}else if(edad <= 17 &&  edad >= 15){
    alert("Puedes ingresar con un mayor de edad.")
} else if(edad <= 14 &&  edad >= 10){
alert("Puedes ingresar joven...")
}else{
    alert("No puedes ingresar niño...")
}

