//console.log("Hola Mundo");
function decodeResistor(color1, color2) {
    resistorArray.push(color1);
    resistorArray.push(color2);
    let colorArray = new Array(2);
    ;
    for (var i = 0; i < resistorArray.length; i++) {
        for (var j = 0; j < colorArray.length; j++) {
            var colorElement = resistorArray[i];
            switch (colorElement) {
                case "negro":
                    colorArray[i] = 0;
                    console.log(colorArray[i]);
                    break;
                case "marrón":
                    colorArray[i] = 1;
                    console.log(colorArray[i]);
                    break;
                case "rojo":
                    colorArray[i] = 2;
                    console.log(colorArray[i]);
                    break;
                case "naranja":
                    colorArray[i] = 3;
                    console.log(colorArray[i]);
                    break;
                case "amarillo":
                    colorArray[i] = 4;
                    console.log(colorArray[i]);
                    break;
                case "verde":
                    colorArray[i] = 5;
                    console.log(colorArray[i]);
                    break;
                case "azul":
                    colorArray[i] = 6;
                    console.log(colorArray[i]);
                    break;
                case "violeta":
                    colorArray[i] = 7;
                    console.log(colorArray[i]);
                    break;
                case "gris":
                    colorArray[i] = 8;
                    console.log(colorArray[i]);
                    break;
                case "blanco":
                    colorArray[i] = 9;
                    console.log(colorArray[i]);
                    break;
                default:
                    return console.log("Color no reconocido");
                    break;
            }
        }
    }
}
let color1 = "marrón";
let color2 = "verde";
let resistorArray = new Array(2);
console.log(`decodeResistor: ${decodeResistor(color1, color2)}`);
