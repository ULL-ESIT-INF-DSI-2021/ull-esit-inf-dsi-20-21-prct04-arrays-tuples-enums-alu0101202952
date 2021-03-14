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



// Ejercicio 2
/*
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
  
var array1 = new Array('allow', 'lowering', 'ringmaster', 'terror'); 
var array2= new Array('kingdom', 'dominator', 'notorious', 'usual', 'allegory');

console.log(`Array 1: ${meshArray(array1)}`);
console.log(`\n********************************************************\n`);
console.log(`Array 2: ${meshArray(array2)}`);
*/


//EJERCICIO 3
function meanAndConcatenate(array: any[]) {
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


