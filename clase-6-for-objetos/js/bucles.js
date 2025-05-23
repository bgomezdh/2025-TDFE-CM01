//bucles o ciclos

for (let i = 0; i < 6; i++) {
  // lo que quiero ahce N veces
  console.log("Hola es brian en la iteracion numero: " + i);
}

let paises = ["Argentina", "Chile", "Peru", "venezuela"];

for (let i = 0; i < paises.length; i++) {
  let element = paises[i];
  console.log("La iteracion " + (i + 1) + " es " + element);
}

// array de objetos

let alumnos = [
  { nombre: "Maximo", edad: 28 },
  { nombre: "lucas", edad: 33 },
  { nombre: "renata", edad: 25 },
];


for (let i = 0; i < alumnos.length; i++) {
    /* const alumno = alumnos[i];
    console.log("Hola soy " + alumno.nombre + " y tengo " + alumno.edad + " años."); */
    
    console.log("Hola soy " + alumnos[i].nombre + " y tengo " + alumnos[i].edad + " años.");
    
}
