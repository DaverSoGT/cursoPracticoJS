//Perímertro del cuadrado
// function pericuad () {
//   let userinput = window.prompt('Indique un lado del cuadrado: ')
//   let lado = userinput * 4
//   return alert(`Su cuadrado tiene ${lado} unidades de perímetro`)
// }
// pericuad()
const PI = 3.1415
function pericuad (lado) {
  let oper = lado * 4
  return console.log(`Su cuadrado tiene ${oper} unidades de perímetro`)
}

//Área del cuadrado
// function areacuad () {
//   let userinput = window.prompt('Indique un lado del cuadrado: ')
//   let lado = userinput ^ 2
//   return alert(`Su cuadrado tiene ${lado} unidades de área`)
// }
// areacuad()
function areacuad (lado) {
  let oper = Math.pow(lado, 2)
  return console.log(`Su cuadrado tiene ${oper} unidades de área`)
}

function peritri (a, b, c) {
  let sum = a + b + c
  return console.log(`Su tríangulo tiene ${sum} unidades de perímetro`)
}

function areatri (base, altura) {
  let area = (base * altura) / 2
  return console.log(`Su tríangulo tiene ${area} unidades de área`)
}

function pericir (diametro) {
  let perimetro = PI * diametro
  return console.log(`Su circunferencia mide ${perimetro} unidades de perímetro`)
}

function areacir (radio) {
  let area = PI * Math.pow(radio, 2)
  return console.log(`Su circunferencia mide ${area} unidades de área`)
}
