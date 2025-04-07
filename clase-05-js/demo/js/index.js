// tipos de datos

// numericos
let edadProfesor = 34;

// Strings
const saludos = "Saludos por parte del profesor";
let saludosProfesor = "Saludos por parte del profe ";
let nombreProfesor = "brian";

//booleanos
let esMayorDeEdad = true; // false

// NaN
let operacion = 4 / "hola";

// null
let queAunNoExiste = null;

queAunNoExiste = "hola";

//undefined
let sinValor;
sinValor = 34;

//arrays
let paisesLatam = ["Brasil", "Venezuela", "Argentina", "Colombia"];

//operaciones cona arrays
//paisesLatam.push("Ecuador");
//paisesLatam.pop()

let arraysDeArrays = [
  ["Brian", "Gomez"],
  ["Luis", "Navas"],
  ["Carlos", "Andrade"],
  ["Andres", "Martinez"],
];

//imprimir por consola
console.log(edadProfesor);
console.log(saludos);
console.log(saludosProfesor + nombreProfesor);
console.log(esMayorDeEdad);
console.log(operacion);
console.log(sinValor);
console.log(paisesLatam.length);
console.log(paisesLatam);

console.log(paisesLatam.pop());
console.log(paisesLatam[2]);

console.log(arraysDeArrays[0][1]);

