/**
 * ### EJERCICIO 4:
 * FUNCIÓN **moveZeros()**
 * #### ¿En qué consiste?
 * Queremos desplazar del array que se le pasa a la función todos los ceros a la derecha
 * @param array es un array de numbers predefinido que se pasa a la función para sacar el resultado 
 * @return un array que tiene todos los ceros que tenía en sus posiciones más a la derecha, es decir en las últimas posiciones
 */

export function moveZeros(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      /**
       * @method splice Con este método cambia el contenido de un array eliminando elementos
       * existentes y/o agregando nuevos elementos
       */
      array.splice(i, 1);
      array.push(0);
    }
  }
  return array;
}
  
/**
 * ```typescript
 * 
 * array1: number[] = [1, 0, 1, 2, 0, 1, 3];
 * @return [1, 1, 2, 1, 3, 0, 0]
 * 
 * ```
 */
  var array1: number[] = [1, 0, 1, 2, 0, 1, 3];
  console.log(moveZeros(array1));