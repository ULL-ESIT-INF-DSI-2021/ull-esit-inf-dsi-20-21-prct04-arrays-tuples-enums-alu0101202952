//EJERCICIO 1: DECODIFICADOR DE RESISTENCIA
/*
function decodeResistor(codigoColores: String) {
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
/*

function meshArray(arrayStr: String[]){
  let resultado = '';
  //er
  for(var i = 0; i < arrayStr.length; i++){
    var elemento = arrayStr[i];
    for(var j = 0; j < elemento.length; j++){
      // Consigo cada caracter de cada palabra del array
      var characterFinal = elemento.charAt((elemento.length)-1) ;
      var characterInicial = arrayStr[i+1].charAt(3);
      var characterFinal1 = elemento.charAt((elemento.length)-2) ;
      var characterInicial1 = arrayStr[i+1].charAt(2);
      var characterFinal2 = elemento.charAt((elemento.length)-3) ;
      var characterInicial2 = arrayStr[i+1].charAt(1);
      var characterFinal3 = elemento.charAt((elemento.length)-4) ;
      var characterInicial3 = arrayStr[i+1].charAt(0);
      if(characterFinal == characterInicial || characterFinal1 == characterInicial1 || characterFinal2 == characterInicial2 || characterFinal3 == characterInicial3){
        //resultado += characterFinal3 + characterInicial3;
        console.log(true);
      } else {
        console.log(false);
      }
      // No sé que margen necesito para conocer si la palabra esta encadenada
      
    }
    
  }
}

const strArray: String[] = ['allow', 'lowering', 'ringmaster', 'terror'];
console.log(`El array es: ${strArray}`);
console.log(`Resultado: ${meshArray(strArray)}`);
*/

