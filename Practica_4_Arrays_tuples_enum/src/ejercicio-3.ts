/**
 * ### EJERCICIO 3:
 * FUNCIÓN **meanAndConcatenate()**
 * #### ¿En qué consiste?
 * Queremos concatenar de un array tipo string|number las letras del alfabeto y hacer la media de los caracteres numéricos
 * @param array es un array de strings y numbers predefinido que se pasa a la función para sacar el resultado 
 * @return un array que tiene en su primer elemento la media de los números y en el segundo elemento o posición las 
 * letras concatenadas.
 */

export function meanAndConcatenate(array: any[]) {
    const letrasAceptadas: RegExp = /^[a-z A-Z]$/;
    const numerosAceptados: RegExp = /^[0-9]$/;
    var media: number = 0;
    var contadorNumeros = 0;
    var resultado: String = '';
    
    for (var i = 0; i < 1; i++) {
      for (let j = 0; j < array.length; j++) {
        if (letrasAceptadas.test(String(array[j]))) {
          resultado = array[j];
        } else {
          media += array[j];
          contadorNumeros++;
        }
      }
    }
    media = media / contadorNumeros;
    return [media, resultado];
  }
  
/**
 * ```typescript
 * 
 * array1: any[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
 * @return [3.6, "udiwstagwo"]
 * 
 * ```
 */
  var array1: any[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
  console.log(meanAndConcatenate(array1));
