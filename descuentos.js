descuentoCalculo = (precio, descuento) => (precio*(100 - descuento))/100

function calcularDescuento() {
  let precioSinDescuento = document.getElementById("input-price")
  let valuePrecio = parseFloat(precioSinDescuento.value)
  let inputCoupon = document.getElementById("input-coupon")
  let valueCoupon = inputCoupon.value

  let coupons = [
    {
      name: 'Enorme David',
      discount: 50
    },
    {
      name: 'Fin de año',
      discount: 30
    },
    {
      name: 'Feliz año nuevo',
      discount: 15
    }
  ]

  let isCouponValueValid = (coupons) => coupons.name === valueCoupon

  let userCoupon = coupons.find(isCouponValueValid)

  if (!userCoupon) {
    alert(`El cupón ${valueCoupon} no es valido.`)
  } else {
    let descuento = userCoupon.discount
    let precioConDescuento = descuentoCalculo(valuePrecio, descuento)

    let resultP = document.getElementById("showPrice")
    resultP.innerText = `El precio de su producto es: $${precioConDescuento}`
  }
}