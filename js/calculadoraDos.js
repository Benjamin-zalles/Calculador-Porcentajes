// Input porcentaje
const porcentajeCalDos = document.querySelector("#porcentaje-cal-dos");
const porcentajeTableDos = document.querySelector("#tbl-cal-dos-porcentaje");
const formulaCalDosPorcentaje = document.querySelector("#formula-cal-dos-por");

// Input cantidad
const cantidadCalDos = document.querySelector("#cantidad-cal-dos");
const cantidadTableDos = document.querySelector("#tbl-cal-dos-cantidad");
const formulaCalDosCantidad = document.querySelector("#formula-cal-dos-can");

// Capturando evento target value del input de porcentaje para agregarlso como contenido al html
porcentajeCalDos.addEventListener("input", (e) => {
  porcentajeTableDos.innerText = e.target.value;
  formulaCalDosPorcentaje.innerText = e.target.value;
});

// Capturando evento target value del input de cantidad para agregarlso como contenido al html
cantidadCalDos.addEventListener("input", (e) => {
  cantidadTableDos.innerText = e.target.value;
  formulaCalDosCantidad.innerText = e.target.value;
});

// Boton de la calculadora uno
const btnCalDos = document.querySelector("#btn-cal-dos");

// Seleccionando el resultado
const calDosR = document.querySelector("#resultado-cal-dos");
const formDosR = document.querySelector("#r-for-dos");

btnCalDos.addEventListener("click", () => {
  const n1 = porcentajeCalDos.value;
  const n2 = cantidadCalDos.value;
  const r = calculate2(Number(n1), Number(n2));
  calDosR.innerText = naiveRound(r, 2);
  formDosR.innerText = naiveRound(r, 2);
});

function calculate2(num1, num2) {
  return (num2 * 100) / num1;
}

function naiveRound(num, decimalPlaces = 0) {
    var p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}