function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento
    }
  )

  let promedioLista = sumaLista / lista.length

  return promedioLista
}

function calcularMediana(lista) {
  let usuarioLista = lista
  let listaOrdenada = usuarioLista.sort()
  let mitadLista = parseInt(listaOrdenada.length / 2)

  function esPar(numero) {
    if (numero % 2 === 0) {
      return true
    } else {
      return false
    }
  }

  let mediana

  if (esPar(listaOrdenada.length)) {
    let elemento1 = listaOrdenada[mitadLista - 1]
    let elemento2 = listaOrdenada[mitadLista]

    let promedioElementos = calcularMediaAritmetica([elemento1, elemento2])

    mediana = promedioElementos
  } else {
    mediana = listaOrdenada[mitadLista]
  }
  return mediana
}
