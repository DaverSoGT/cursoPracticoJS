let velocidad = [26, 24, 21, 20, 26, 21, 25]

function calcularMediaArmonica(numbers) {
  let lista = numbers
  let elementos = lista.length
  let sumaDatos = (acumulado, actual) => acumulado + actual

  let division = lista.map(function(num) {
    return 1/num
  })

  numerosSuma = division.reduce(sumaDatos)
  mediaArmonica = elementos/numerosSuma

  console.log(mediaArmonica.toFixed(3))
}