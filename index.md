# Informe Práctica 4: Arrays, tuples y Enums


![Image](https://i.imgur.com/z8iDVkH.jpg)



╔═══════════════════════════════════════════════════════════════════╗

> - Autora: Andrea Calero Caro > [alu0101202952@ull.edu.es](alu0101202952@ull.edu.es)
> - Práctica 4: Arrays, tuples y Enums
> - Asignatura: Desarrollo de Sistemas Informáticos
> - Universidad de La Laguna

╚═══════════════════════════════════════════════════════════════════╝



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## Índice


  - Objetivos
  - Paso previo: Aceptación de tarea de GitHub Classroom
  - Estructura básica de proyectos
  - Instalación, configuración Typedoc
  - Instalación, configuración Mocha y Chai
  - Pruebas Unitarias estructura
  - Ejercicio 1
  - Ejercicio 2
  - Ejercicio 3
  - Ejercicio 4
  - Ejercicio 5
  - Ejercicio 6
  - Ejercicio 7
  - Ejercicio 8
  - Desarrollo del informe con GitHub Pages
  - Conclusiones
  - Bibliografía y/o Webgrafía
  
  



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## OBJETIVOS


Los objetivos en esta práctica será resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad los arrays, tuplas y enumerados de TypeScript Para ello empleando los conocimientos además, que ya tenemos, en typedoc, y la realización de las pruebas unitarias siguiendo los pasos de TDD, es decir, realizar pruebas y expectativas, ver su fallo y corregir el código y volver con la prueba y sus expectativas para que den acierto. Para ello tendremos que usar Mocha y Chai por primera vez.

- **ENLACE A LA DOCUMENTACIÓN EN TYPEDOC**
> - [Informe documentación con Typedoc](http://127.0.0.1:5500/docs/index.html)



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PASO PREVIO: ACEPTACIÓN DE TAREA DE GITHUB CLASSROOM


Antes de comenzar se nos requiere que aceptemos la tarea asignada en el GitHub Classroom:

![Asignación GitHub Classroom](https://i.imgur.com/KrPJOqZ.jpg)

Con ello ya podríamos trabajar en esta práctica.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA BÁSICA DE PROYECTOS


Lo primero sería estructurar el workspace de nuestra práctica siguiendo algunos pasos indicados en:

> - [Estrutura](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html)

Comenzamos creando la estructura básica, primero creando el directorio donde se alojará el repositorio clonado.

Comenzamos modificando el **package.json** con el comando `npm init --yes` y creamos de forma automática el fichero de configuración **tsconfig.json** eso lo haremos con el comando `tsc --init` y se crearía el tsconfig.json por defecto, nosotros lo modificaremos algo más para poder trabajar correctamente, necesitaremos poner la opción **exclude []** dentro del tsconfig.json para indicarle al compilador los directorios que exluiría a la hora de compilar explícitamente quedando:

![tsconfig.json](https://i.imgur.com/Ry8bFKg.jpg)

Esos 3 directorios los exluiríamos a la hora de hacer `npm start` y no fallar a la hora de compilar los tests o los node-modules.

Para ello creo el directorio donde empezaremos a estructurar los directorios y ejercicios, además de configurar el **package.json**, quedando el package.json tal que:

![package.json](https://i.imgur.com/8E7sYOj.jpg)

También necesitamos crear a partir de este el **tsconfig.json** con la ruta de localización de los ejercicios.ts, en el directorio `./src` y sus ejecutables .js en el directorio `./dist`, como hemos hecho en otras prácticas:

Manualmente, se crearía ambos directorios donde trabajaremos. 

También necesitaremos una compilación con control automático de cambios que instalaremos con el comando `npm install --save-dev tsc-watch`.

Por último en la organización de la estructura básica será la instalación del paquete **EsLint**, esto por si quisiéramos comprobar la sintaxis de nuestro código, encontrar y solucionar problemas en el mismo. Primero lo instalamos con el comando:

> `npm install -g eslint` 

Y lo inicializamos con `eslint --init` añadiéndole esto valores:

![Configuración Eslint](https://i.imgur.com/roVpYH9.jpg)

Luego modificar el fichero .eslint que se crea con las reglas correspondientes, quedando:

![Esdlint configuracion fichero](https://i.imgur.com/pvViLkf.jpg)


Tras la estructura básica nos dedicaremos a trabajar en el directorio `./src` donde alojaremos los ficheros correspondientes a los ejercicios que se nos plantea en esta práctica, además de preparar la documentación con typedoc y las pruebas unitarias (TDD) con Mocha y Chai.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN TYPEDOC

Para conocer más sobre esta herramienta consultar [Typedoc](https://typedoc.org/). Como ya desde la práctica 3 nos habíamos introducido a la herramienta **Typedoc**, solo queda seguir los mismos pasos mecánicos para esta práctica. Dicho informe creado en Typedoc hecho con los comentarios de los ejercicios de esta práctica se aloja en:

[Informe Typedoc Práctica 4](http://127.0.0.1:5500/docs/index.html) 

O también mirando en los apartados **Objetivos** y **Bibliografía/ webgrafía** de este informe.

Comenzamos con la instalación de typedoc con el comando > `npm install --save-dev typedoc`.

Con ello podemos ver que se ha creado un directorio, que es como organizará typedoc la documentación que es por módulos, creando así `./node_modules`. Continuaremos con la configuración para poder usar Typedoc, primero si no se ha creado por defecto crear el **typedoc.json**, lo creamos y le añadimos la ruta de los ficheros a los que haremos el seguimiento de documentación. Y en el apartado `"out: "` pondremos el directorio donde se alojará toda esa documentación. Tras guardar dicha configuración se genereará automáticamente el directorio `./doc`.

![typedoc.json](https://i.imgur.com/iriauo1.jpg)

Para poder usar la herramienta necesitamos invocarla con un comando, dicho comando será: `npm run [nombre_invocación]`, el nombre de invocación es lo siguiente que configuraremos en el **package.json**, para ello pondremos en la parte de scripts del fichero:

> `"doc": "typedoc"`

- **doc**: será el nombre con el que ejecutaremos la herramienta
- **typedoc**: la herramienta que lleva la documentación de la práctica

Esto quedaría tal que:

![Typedoc configuracion package.json](https://i.imgur.com/bbibywr.jpg)


Ya tendríamos la documentación en el directorio `./doc` para ejecutarla serviría con el comando ´npm run doc´ como antes especificamos. 

Esto genera documentación pero a partir de comentarios de TypeScript del estilo `/** */` con esta forma especificando la función, los parámetros, lo que devuelve, los snippet...

Esto guardaría esos comentarios en forma de página HTML para la documentación, tendríamos que ir al fichero `index.html` en el directorio de `./modules`, y con el click derecho pinchar sobre la opción de: __Open with Live Server__ y así generaría una página HTML con los comentarios en forma de documentación.

Finalizando así la documentación con Typedoc.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━




▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN MOCHA Y CHAI

En este apartado nos iniciaremos con Mocha y Chai pues, a partir de esta práctica serán herramientas de uso obligatorio, tendremos que volver a ejecutar dichos pasos para poder trabajar con Pruebas Unitarias con las herramientas **Mocha** y **Chai**. Primero instalaremos las dependencias y paquetes de Mocha y chai. Para ello ejecutaremos:

![Instalación Mocha y Chai](https://i.imgur.com/3huPDKO.jpg)

A continuación con el comando `touch .mocharc.json` crearemos el fichero de configuración de la herramienta Mocha, este irá en la raíz de el proyecto y nos indicará utilidades para hacer TDD, es decir las pruebas unitarias. Para ello le indicaremos que las pruebas unitaras se alojarán en el directorio **./tests** y tendrán una terminología de **.spec.ts**. Esto quedaría:

![configuración .mocharc.json](https://i.imgur.com/ywioFUk.jpg)

Ya tendremos una configuración básica de la herramienta, pero necesito crear el directorio **./tests** y los ficheros que tendrán las pruebas unitarias de los 8 ejercicios que se nos plantean, tendrá una estructura > `ejercicio-n.spec.ts`, siendo n = [1-8], con la enumeración de cada ejercicio. Sería:

![directorio tests](https://i.imgur.com/L0evVXY.jpg)

Como ha pasado con la herramienta **Typedoc** indicaremos en el **package.json** con qué comando, ejecutaremos la herramienta de mocha. Esta herramienta se ejecuta tal que `npm run [nombre_de_invocación]`, el nombre de invocación en nuestro caso será **test**, quedando el comando completo para ejecutar las pruebas unitarias de la forma: 

> `npm run test`

Este nombre de invocación es el que configuraremos en el package.json, quedando:

![mocha en package.json](https://i.imgur.com/DglRRE7.jpg)

Finalizando con todo esto la configuración de las herramientas necesarias para ejecutar los ejercicios mediante TDD. Quedando la estructura final con los ficheros .gitignore además del .nojekyll, los cuales no se nombraron pero porque se dan por hechos, como:

![Estructura final proyecto](https://i.imgur.com/IjLgUPo.jpg)
 


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


### PRUEBAS UNITARIAS ESTRUCTURA

En esta práctica emplearemos las pruebas unitarias. El sistema que emplearemos en TDD, será:

1. Creamos una prueba unitaria, con la forma `ejercicio-n.spec.ts`, siendo n = [1-8], en este caso, y alojado en el directorio `./tests`. Tendremos que añadir las dependencias de paquetes de las herramientas Mocha y Chai de la forma:

> `import 'mocha';
 import {expect} from 'chai';`

2. Además añadimos la clase a la que le realizaremos dichas pruebas unitarias y la ruta donde está alojada dicha función, de la forma:

Este ejemplo es la prueba unitaria real del código asociado al ejercicio 1.

> `import {functio_name} from '../src/index';
import {function_name2} from '../src/index';`

Con esta incorporación se debe modificar en el código del ejercicio y poner **export**, de la forma:

> `export function function_name {}`

3. Describir a continuación las operatorias que se harán en esa pueba unitaria (`it('add(1,7)')`).
4. Finalmente concluyendo con la expectativa que se quiere conseguir (`expect().to.be.equal()`).

Esto sería un concepto básico de cómo rellenar una prueba unitaria para empezar a comprobar mediante TDD si nuestro código funciona. 


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
 
La metodología que se emplea es:

1. Escribimos en el fichero **.spec.ts** la expectativa que se espera conseguir de algún método o del propio funcionamiento de la función.
2. Se comprueba que falla tras hacer `npm run test` porque no está la clase o el método a comprobar.
3. Se guarda dicho fallo con:

> `git add .`

> `git commit -m "Fallo test de hacer la suma de dos elementos de un array"`

> `git push --all`


4. Se redacta en el fichero asociado con el código del método que queremos que haga cierta funcionalidad, etc.
5. Se ejecuta de nuevo el comando para realizar la comprobación de la expectativa (`npm run test`).
6. Y si todo está bien planteado saldría válida o correcta la prueba unitaria sin fallos.
7. Se guarda dicho acierto con:

> `git add .`

> `git commit -m "Acierto test de hacer la suma de dos elementos de un array"`

> `git push --all`


Con esto en claro sobre cómo realizaría mis pruebas unitarias, se puede proseguir con el planteamiento de los ejercicios.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 1


El planteamiento inicial que tuve para el decodificador de colores de los resistores fue hace un expect de la forma:

![Expect 1](https://i.imgur.com/IL1d986.jpg)

Al ejecutar el comando > `npm run test` nos va a dar un fallo:

![Expect fallo](https://i.imgur.com/lMYYXIr.jpg)

Tras esto, como hemos nombrado haré un commit para subir al repo el fallo y así hacer el código y corregirlo a posteriori.

Plantearé un código que podría plantear una solución:

![codigo ejercicio1](https://i.imgur.com/FfIh4tl.jpg)

Volvemos a ejecutar el comando `npm run test`.

![Acierto](https://i.imgur.com/2syzKB4.jpg)

Y como vemos coge la sentencia de color de la resistencia, por tanto, creamos un **commit** y lo subimos al repo con un > `git push --all`:

![git commit acierto](https://i.imgur.com/L0wYLSr.jpg)

Después a este ejercicio he asignado los comentarios oportunos y snippets para crear la respectiva documentación con **Typedoc**

![Typedoc](https://i.imgur.com/cKwFkcx.jpg)


![Typedoc](https://i.imgur.com/LgkdgoS.jpg)

Finalizando así mi código, y mis pruebas unitarias del ejercicio 1.

━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 2

Me plantee en la prueba unitaria que la función meshArray() alojada en el fichero ejercicio-2.ts, se le pasara un array, dicho array estaría inicializado con strings de palabras encadenadas que devolverían la palabra resultante de encadenar las últimas letras con las primeras de la siguientes, (con mismo rango). Para ello cree la prueba unitaria de la forma:

![mesharray expect 1](https://i.imgur.com/1NfGXSt.jpg)

Pero falló, como era de esperarse pues no tenía ninguna función meshArray

![fallo expect 2](https://i.imgur.com/5VKpcUg.jpg)

Entonces comencé a plantear el código. Y al volver a ejecutar `npm run test` me dio un acierto:

![acierto funcion](https://i.imgur.com/eVyxB8a.jpg)

Como se comprueba el encadenamiento de palabra se hace un commit y se sube al repositorio.

Después a este ejercicio he asignado los comentarios oportunos y snippets para crear la respectiva documentación con **Typedoc**

![Typedoc](https://i.imgur.com/2vdOsl6.jpg)


![Typedoc](https://i.imgur.com/JMoQbgn.jpg)

Finalizando así mi código, y mis pruebas unitarias del ejercicio 2.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 3

En este ejercicio se nos pide escribir una función **meanAndConcatenate** que reciba como parámetro un array que incluye caracteres de texto y números. Para eso la opción más acertada, sería utilizar un array cuyo tipo fuera la unión de tipos string | number. Por eso con esa idea creo las pruebas unitarias.

La idea es que con los caracteres numéricos me devuelva la media y con las letras me devuelva la concatenacion de todo.

![expect](https://i.imgur.com/c52Orrr.jpg)

![fallo](https://i.imgur.com/4WS6DEA.jpg)

Como se observa da fallo, hago un git commit e implemento el código.
En el código intenté implementar esta función pero a la hora de adaptarlo a una de unión de tipos me resultó dificultoso y por eso tuve que hacerlo con expresiones regulares:

![codigo](https://i.imgur.com/oy8BKGn.jpg)

Al final quedó:

![codigo](https://i.imgur.com/CmLzbzc.jpg)

Dándome acierto en la expectativa de la prueba:

![acierto](https://i.imgur.com/TBuUqZl.jpg)

Después a este ejercicio he asignado los comentarios oportunos y snippets para crear la respectiva documentación con **Typedoc**

![Typedoc](https://i.imgur.com/QFSiac2.jpg)


![Typedoc](https://i.imgur.com/ui1LXv4.jpg)

Finalizando así mi código, y mis pruebas unitarias del ejercicio 3.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 4

En este apartado se nos plantea un array con numeros y ceros, y dichos ceros ir colocándolos en la derecha del array, y retornar el array, una vez planteado mentalmente la estructura, hacemos la expectativa, la cual como ha pasado falla pues no está el método moveZeros():

![fallo expect](https://i.imgur.com/kQteTBx.jpg)

Hacemos un git commit para guardar los cambios y planteamos el código:

![código](https://i.imgur.com/er52EKC.jpg)

No fue difícil pues ya conocía un método de la clase Array en JS que te cambiaba los contenidos en un array y este problema fue sencillo de resolver

Luego hice el commit con el acierto de expectativa y lo subí:

![codigo acierto](https://i.imgur.com/TAVewL9.jpg)

Después a este ejercicio he asignado los comentarios oportunos y snippets para crear la respectiva documentación con **Typedoc**

![Typedoc](https://i.imgur.com/fluCbjN.jpg)


![Typedoc](https://i.imgur.com/4kzKCoT.jpg)

Finalizando así mi código, y mis pruebas unitarias del ejercicio 4.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 5

Se nos plantea crear una función multiplyAll que tome como parámetro un array de números. Esta función deberá devolver como resultado otra función que toma como argumento un único valor numérico y devuelve un nuevo array.


Finalizando así mi código, y mis pruebas unitarias del ejercicio 5.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 6 

Un punto describe una posición determinada respecto a un sistema de coordenadas preestablecido. Suponiendo un sistema de dos coordenadas (x, y), un punto en el espacio se denotaría de la forma Point(X, Y).

Finalizando así mi código, y mis pruebas unitarias del ejercicio 6.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 7

A partir del desarrollo realizado para el ejericio anterior, cree un tipo de datos que sea capaz de definir puntos de 3 o más dimensiones.

Finalizando así mi código, y mis pruebas unitarias del ejercicio 5.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 8

A partir de un tablero bidimensional con tamaño [X, Y], donde X es el número de filas e Y el número de columnas. Considere que un agente está situado en un punto del tablero con coordenadas $(x_0, y_0)$ y tiene que llegar a un objetivo $(x_1, y_1)$.


Finalizando así mi código, y mis pruebas unitarias del ejercicio 5.


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## DESARROLLO DEL INFORME CON GITHUB PAGES


Tras finalizar la práctica se nos requiere un informe en con el formato de estilos de Markdown en **GitHub Pages**, para ello usamos la guía de estilos de Markdown en [Markdown guide](https://guides.github.com/features/mastering-markdown/).

Y así finalizamos esta práctica e informe redactado en el archivo **index.md**.

Con esto he tenido problemas pues no se me crea GitHub Pages a pesra de excluir directorios que no quiero que se haga dicha documentación, poner .gitignore como se indicó, incluso añadiendo un .nojekyll





▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## CONCLUSIONES


Conclusión sobre la práctica e informe, aquí plantearé la dinámica de la práctica y posibles dudas que me hayan surgido y solucionado. La práctica en sí hubieron ejercicios donde tuve dificultad donde acudí a la tutoría, como para el ejercicio 2, pero hubieron ejercicios algo complejos como otros muy sencillos de realizar, y otros que si no usaba expresiones regulares no sabía como implementarlo, a eso añadir que ir mediante pruebas unitarias o TDD, todo se hace más despacio y por tanto a veces más complicado. Por otro lado, la herramienta typedoc no me ha causado problemas y he sabido desenvolverme con ella. AL igual que con las herramientas **Mocha** y **Chai**, no me han causado dificultad. 

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## BIBLIOGRAFÍA Y/O WEBGRAFÍA


- [Enunciado práctica](https://ull-esit-inf-dsi-2021.github.io/prct04-arrays-tuples-enums/)
- [Repositorio con ejercicios y estructura básica](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101202952/tree/desarrollo/p3_Ejercicios_datos_funciones)
- [Informe documentación con Typedoc](http://127.0.0.1:5500/docs/index.html)
