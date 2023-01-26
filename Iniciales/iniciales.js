let nombre = prompt('Escribe tu nombre y primer apellido:');

let inicialNombre = nombre.slice(0, 1)

let segundoCaracter = nombre.indexOf(" ") + 1;

let inicialAppellido = nombre.slice(segundoCaracter, segundoCaracter + 1);

document.write('Tus iniciales son ' + inicialNombre.toUpperCase() + inicialAppellido.toUpperCase());