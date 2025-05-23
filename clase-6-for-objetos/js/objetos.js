// objetos literales

let auto = {
    patente : "HDS-459",
    modelo : "Mustang",
    marca: "Ford",
    annio: 2025,
    velocidad: 0,
    describirse : function() {
        return "Este auto es un " + this.marca +" " + this.modelo +  " con la patente " + this.patente; 
    },
    acelerar: function(velocidadEnviada){
        this.velocidad += velocidadEnviada;
        return "El auto aceleró a " + velocidadEnviada +"Km/h"
    }
    
}

console.log(auto.acelerar(100));

console.log(auto.acelerar(200));

console.log(auto.velocidad);

