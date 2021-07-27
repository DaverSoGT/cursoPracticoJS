//Perímertro del cuadrado
// function pericuad () {
//   let userinput = window.prompt('Indique un lado del cuadrado: ')
//   let lado = userinput * 4
//   return alert(`Su cuadrado tiene ${lado} unidades de perímetro`)
// }
// pericuad()
const PI = 3.1416
perimetroCuadrado = (lado) => lado * 4

//Área del cuadrado
// function areacuad () {
//   let userinput = window.prompt('Indique un lado del cuadrado: ')
//   let lado = userinput ^ 2
//   return alert(`Su cuadrado tiene ${lado} unidades de área`)
// }
// areacuad()
areaCuadrado = (lado) => Math.pow(lado, 2)

perimetroTriangulo = (a, b, c) => a + b + c 

areaTriangulo = (base, altura) => (base * altura) / 2

perimetroCirculo = (radio) =>  2 * PI * radio

areaCirculo = (radio) => PI * Math.pow(radio, 2)

// Interacción con el HTML
function calcularAreaCuadrado() {
  let input = document.getElementById("inputCuadrado")
  let value = input.value

  let area = areaCuadrado(value)
  alert(`Su cuadrado tiene ${area} unidades de área.`)
}

function calcularPerimetroCuadrado() {
  let input = document.getElementById("inputCuadrado")
  let value = input.value

  let perimetro = perimetroCuadrado(value)
  alert(`Su cuadrado tiene ${perimetro} unidades de perímetro.`)
}

function calcularPerimetroTriangulo() {
  let inputA = document.getElementById("inputTrianguloA")
  let valueA = parseFloat(inputA.value)
  let inputB = document.getElementById("inputTrianguloB")
  let valueB = parseFloat(inputB.value)
  let inputC = document.getElementById("inputTrianguloC")
  let valueC = parseFloat(inputC.value)

  let perimetro = perimetroTriangulo(valueA, valueB, valueC)
  alert(`Su tríangulo tiene ${perimetro} unidades de perímetro.`)
}

function calcularAreaTriangulo() {
  let inputB = document.getElementById("inputTrianguloBase")
  let valueB = parseFloat(inputB.value)
  let inputH = document.getElementById("inputTrianguloH")
  let valueH = parseFloat(inputH.value)

  let area = areaTriangulo(valueB, valueH)
  alert(`Su tríangulo tiene ${area} unidades de área.`)
}

function calcularPerimetroCirculo() {
  let inputRadio = document.getElementById("inputCirculoRadio")
  let valueRadio = parseFloat(inputRadio.value)

  let perimetro = perimetroCirculo(valueRadio)
  alert(`Su circunferencia mide ${perimetro.toFixed(2)} unidades de perímetro.`)
}

function calcularAreaCirculo () {
  let inputRadio = document.getElementById("inputCirculoRadio")
  let valueRadio = parseFloat(inputRadio.value)

  let area = areaCirculo(valueRadio)
  alert(`Su circunferencia mide ${area.toFixed(2)} unidades de perímetro.`)
}