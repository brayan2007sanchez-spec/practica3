const inputRegalo = document.getElementById("input-regalo");
const btnAgregarRegalo = document.getElementById("btn-agregar-regalo");
const btnLimpiarRegalos = document.getElementById("btn-limpiar-regalos");
const listaRegalos = document.getElementById("lista-regalos");

function agregarRegalo() {
  const texto = inputRegalo.value.trim();
  if (texto === "") return;

  const item = document.createElement("li");
  item.className = "item-regalo";

  const spanTexto = document.createElement("span");
  spanTexto.textContent = texto;

  const btnListo = document.createElement("button");
  btnListo.type = "button";
  btnListo.textContent = "Listo";
  btnListo.addEventListener("click", () => {
    spanTexto.classList.toggle("regalo-listo");
  });

  const btnEliminar = document.createElement("button");
  btnEliminar.type = "button";
  btnEliminar.textContent = "Quitar";
  btnEliminar.addEventListener("click", () => {
    item.remove();
  });

  item.appendChild(spanTexto);
  item.appendChild(btnListo);
  item.appendChild(btnEliminar);
  listaRegalos.appendChild(item);

  inputRegalo.value = "";
  inputRegalo.focus();
}

btnAgregarRegalo.addEventListener("click", agregarRegalo);
inputRegalo.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") agregarRegalo();
});
btnLimpiarRegalos.addEventListener("click", () => {
  listaRegalos.innerHTML = "";
});