let form = document.querySelector("form");
let pelicula = document.querySelector("#pelicula");

form.addEventListener("submit", function(e) {
    e.preventDefault()

    if (pelicula.value.length >= 3) {
        form.submit()
    } else {
        alert("No se va a enviar el form")
    }
    
});