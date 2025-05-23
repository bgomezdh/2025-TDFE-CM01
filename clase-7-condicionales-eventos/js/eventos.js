let darkMode = document.querySelector("#darkMode");
let body = document.querySelector("body");

darkMode.addEventListener("click", function(e) {
    // quiero poner el fondo en oscuro 

    if (darkMode.innerText == "Modo Oscuro") {
        body.style.backgroundColor = "#192246";
        this.innerText = "Modo Claro";
    } else {
         body.style.backgroundColor = "#f7f8fc";
        this.innerText = "Modo Oscuro";
    }
})
