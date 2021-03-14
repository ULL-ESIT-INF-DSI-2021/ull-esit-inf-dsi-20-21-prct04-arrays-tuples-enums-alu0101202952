/*function meanAndConcatenate(array: any[]) {
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
  
  var array1: any[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];
  console.log(meanAndConcatenate(array1));
*/  