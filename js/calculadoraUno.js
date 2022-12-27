// Input porcentaje
const porcentajeCalUno = document.querySelector("#porcentaje-cal-uno");
const porcentajeTableUno = document.querySelector("#tbl-cal-uno-porcentaje");
const formulaCalUnoPorcentaje = document.querySelector("#formula-cal-uno-por");

// Input cantidad
const cantidadCalUno = document.querySelector("#cantidad-cal-uno");
const cantidadTableUno = document.querySelector("#tbl-cal-uno-cantidad");
const formulaCalUnoCantidad = document.querySelector("#formula-cal-uno-can");

// Capturando evento target value del input de porcentaje para agregarlso como contenido al html
porcentajeCalUno.addEventListener("input", (e) => {
  porcentajeTableUno.innerText = e.target.value;
  formulaCalUnoPorcentaje.innerText = e.target.value;
});

// Capturando evento target value del input de cantidad para agregarlso como contenido al html
cantidadCalUno.addEventListener("input", (e) => {
  cantidadTableUno.innerText = e.target.value;
  formulaCalUnoCantidad.innerText = e.target.value;
});

// Boton de la calculadora uno
const btnCalUno = document.querySelector("#btn-cal-uno");

// Seleccionando el resultado
const calUnoR = document.querySelector("#resultado-cal-uno");
const formUnoR = document.querySelector("#r-for-uno");

btnCalUno.addEventListener("click", () => {
  const n1 = porcentajeCalUno.value;
  const n2 = cantidadCalUno.value;
  const r = calculate(Number(n1), Number(n2));
  calUnoR.innerText = r;
  formUnoR.innerText = r;
});

function calculate(num1, num2) {
  return (num1 * num2) / 100;
}
