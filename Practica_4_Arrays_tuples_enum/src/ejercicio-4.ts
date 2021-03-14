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
  
  var array1: number[] = [1, 0, 1, 2, 0, 1, 3];
  console.log(moveZeros(array1));