/**
 * ### EJERCICIO 2:
 * FUNCIÓN **meshArray()**
 * #### ¿En qué consiste?
 * Queremos sacar la palarba encadenada final
 * @param array es un array de strings predefinidas que se pasa a la función para sacar la palabra encadenada 
 * @return resultado es un string vacío donde se almacenará la palabra encadenada final resultante
 */

export function meshArray(array = new Array('allow', 'lowering', 'ringmaster', 'terror')) {
    var resultado = '';
    var aux = '';
    var letrasAceptadas =  /^[a-z]+$/;
    for(var i = 0; i < array.length;i++){
      for(var j = 1; j < array.length; j++){
        aux += array[i];
        if(array[i].endsWith('low') && array[j].startsWith('low')){
          aux += 'low';
        } else if(array[i].endsWith('ring') && array[j].startsWith('ring')){
          aux += 'ring';
        } else if(array[i].endsWith('ter') && array[j].startsWith('ter')){
          aux += 'ter';
        }
      } 
    }
    console.log(aux);
  }  
    
/**
 * ```typescript
 * 
 * array1 = new Array('allow', 'lowering', 'ringmaster', 'terror'); 
 * @return `lowering`
 * 
 * ```
 */
  var array1 = new Array('allow', 'lowering', 'ringmaster', 'terror'); 
  console.log(`Array 1: ${meshArray(array1)}`);

  