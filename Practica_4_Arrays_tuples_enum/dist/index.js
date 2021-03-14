"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.meshArray = void 0;
// Ejercicio 2
function meshArray(array = new Array('allow', 'lowering', 'ringmaster', 'terror')) {
    var resultado = '';
    var aux = '';
    var letrasAceptadas = /^[a-z]+$/;
    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < array.length; j++) {
            aux += array[i];
            if (array[i].endsWith('low') && array[j].startsWith('low')) {
                aux += 'low';
            }
            else if (array[i].endsWith('ring') && array[j].startsWith('ring')) {
                aux += 'ring';
            }
            else if (array[i].endsWith('ter') && array[j].startsWith('ter')) {
                aux += 'ter';
            }
        }
    }
    console.log(aux);
    /*
      for (let j = 0; j < palabras.length - 1; j++) {
        coincidenciaEncontrada = false;
        posicionCoincidencia = 0;
        for (let i = palabras[j].length - 1; i >= 0; i--) {
          if (!coincidenciaEncontrada && palabras[j][i] === palabras[j + 1][0]) {
            posicionCoincidencia = palabras[j].slice(i, palabras[j].length).length;
            coincidenciaEncontrada = true;
          }
        }
        if (coincidenciaEncontrada && palabras[j].substr(-posicionCoincidencia, palabras[2].length) === palabras[j + 1].slice(0, posicionCoincidencia)) {
          resultado += palabras[j].substr(-posicionCoincidencia, palabras[2].length);
          contadorCoincidencias++;
        }
      }
      if (contadorCoincidencias === (palabras.length - 1)) {
        console.log('Resultado: ' + resultado);
      } else {
        console.log('Error al encadenar');
      }
    }*/
}
exports.meshArray = meshArray;
var array1 = new Array('allow', 'lowering', 'ringmaster', 'terror');
var array2 = new Array('kingdom', 'dominator', 'notorious', 'usual', 'allegory');
console.log(`Array 1: ${meshArray(array1)}`);
console.log(`\n********************************************************\n`);
console.log(`Array 2: ${meshArray(array2)}`);
