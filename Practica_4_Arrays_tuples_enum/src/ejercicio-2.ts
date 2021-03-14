export function meshArray(array = new Array('allow', 'lowering', 'ringmaster', 'terror')) {
  var resultado = '';
  var contador = 0;
  var rangoPosicion = 0;
  var letrasAceptadas =  /^[a-z]+$/;
  for(var i = 0; i < array.length;i++){
    for(var j = 1; j < array.length; j++){
      
    } 
  }
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
  }
  
  
  var array1 = new Array('allow', 'lowering', 'ringmaster', 'terror'); 
  var array2= new Array('kingdom', 'dominator', 'notorious', 'usual', 'allegory');
  
  console.log(`Array 1: ${meshArray(array1)}`);
  console.log(`\n********************************************************\n`);
  console.log(`Array 2: ${meshArray(array2)}`);
  
  