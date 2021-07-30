descuentoCalculo = (precio, descuento) => (precio*(100 - descuento))/100

function calcularDescuento() {
  let precioSinDescuento = document.getElementById("input-price")
  let valuePrecio = parseFloat(precioSinDescuento.value)
  let inputDescuento = document.getElementById("input-discount")
  let valueDescuento = parseFloat(inputDescuento.value)
  let textResult = document.getElementById("showPrice")

  let precioConDescuento = descuentoCalculo(valuePrecio, valueDescuento)
  textResult.innerText = `El precio de su producto es: $${precioConDescuento}.`
}