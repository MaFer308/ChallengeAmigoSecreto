// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables
const inputDeAmigos = document.getElementById ("amigo");
const listaAmigos = []; //creamos la lista donde se van a guardar los nombres
const ullistaAmigos = document.getElementById ("listaAmigos"); // con esto accedemos a la funcion listaAmigos del documento html
const ulResultado = document.getElementById ("resultado"); 


//funciones
function agregarAmigo() {
    const nombre = inputDeAmigos.value.trim(); // Elimina los espacios en blanco al inicio y al final
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido");
        return; // Detiene la ejecución si el campo está vacío
    }
    listaAmigos.push(inputDeAmigos.value); // me muestra en el console los datos que ingreso en la app
    ullistaAmigos.innerHTML += `<li>${inputDeAmigos.value}</li>`; // le dara formato a lo que ingrese a la lista de amigos
    
};

function sortearAmigo() {
    const random = Math.floor(Math.random() * listaAmigos.length);
    const TuAmigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li> Tu amigo secreto es: ${TuAmigoSecreto} </li>`
}
