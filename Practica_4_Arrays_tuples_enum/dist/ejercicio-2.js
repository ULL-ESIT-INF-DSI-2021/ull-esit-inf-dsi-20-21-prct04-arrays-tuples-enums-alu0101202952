/*export function meshArray(array = new Array('allow', 'lowering', 'ringmaster', 'terror')) {
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
