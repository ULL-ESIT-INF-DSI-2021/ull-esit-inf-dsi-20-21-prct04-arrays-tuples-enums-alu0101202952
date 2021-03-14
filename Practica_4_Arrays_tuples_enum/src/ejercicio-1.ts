/*export function decodeResistor(codigoColores: String) {
  const colorCodificaciones: string[] = ['negro', 'marron', 'rojo', 'naranja','amarillo', 'verde', 'azul', 'violeta', 'gris', 'blanco'];
  let codigoColoresSeparado = codigoColores.split('-');
  let result: String = '';

  if (codigoColores && codigoColoresSeparado.length >= 2) {
    codigoColoresSeparado = codigoColoresSeparado.slice(0, 2);
    for (let i = 1; i < colorCodificaciones.length; i++) {
        codigoColoresSeparado.forEach(color => { result += colorCodificaciones[i]});
  }
  console.log(result);
  } else {
    console.log('%cCódigo de colores erroneo.');
  }
}

var colorResistencia = "marron-verde"
console.log(`Color de la resistencia: ${colorResistencia}\n`);
console.log(decodeResistor(colorResistencia));
*/