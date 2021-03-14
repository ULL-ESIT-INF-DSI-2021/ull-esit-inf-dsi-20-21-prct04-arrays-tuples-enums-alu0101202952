/**
 * ### EJERCICIO 1:
 * FUNCIÓN **decodeResistor()**
 * #### ¿En qué consiste?
 * Queremos sacar el valor de la resistencia sabiendo sus dos colores, sólo con 2 colores
 * @param codigoColores string que se pasa con los dos colores de la resistencia separado por un - 
 * @return valos de la resistencia según su color al que se le asocia una cantidad
 */

export function decodeResistor(codigoColores: String) {
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
    console.log('Código de colores erroneo');
  }
}

/**
 * ```typescript
 * 
 * colorResistencia = "marron-verde"
 * @return 15
 * 
 * ```
 */
var colorResistencia = "marron-verde"
console.log(`Color de la resistencia: ${colorResistencia}\n`);
console.log(decodeResistor(colorResistencia));
