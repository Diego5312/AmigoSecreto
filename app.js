// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// definimos la lista que almacena los amigos
let amigos = []
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
  
    // Validar que el nombre no esté vacío 
    if (nombre.trim() === "") {
      alert("Por favor, ingresa un nombre.");
      return;
    }
  
    amigos.push(nombre);
  
    // Obtener la lista y actualizar su contenido
    let listaActualizada = document.getElementById('listaAmigos');
  
    // Mostrar los nombres de amigos en una lista (ejemplo)
    let listaHTML = "<ul>";
    for (let amigo of amigos) {
      listaHTML += "<li>" + amigo + "</li>";
    }
    listaHTML += "</ul>";
  
    listaActualizada.innerHTML = listaHTML;
  
    return amigos;
  }