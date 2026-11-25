const descripciones = {
  noel: "Papá Noel: Personaje tradicional asociado a la entrega de regalos en Navidad, vestido de rojo y acompañado de renos y duendes.",
  rodolfo: "Rodolfo el reno: Reno famoso por su nariz roja brillante que ayuda a iluminar el camino del trineo en noches con niebla.",
  grinch: "El Grinch: Personaje gruñón que al principio intenta arruinar la Navidad, pero termina comprendiendo el espíritu de compartir."
};

const botones = document.querySelectorAll(".btn-personaje");
const cajaDescripcion = document.getElementById("descripcion-personaje");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const clave = boton.dataset.personaje;
    cajaDescripcion.textContent = descripciones[clave];
  });
});