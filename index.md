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


Los objetivos en esta práctica será que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript. Para ello empleando los conocimientos además, que ya tenemos, en typedoc, y la realización de las pruebas unitarias siguiendo los pasos de TDD, es decir, realizar pruebas y expectativas, ver su fallo y corregir el código y volver con la prueba y sus expectativas para que den acierto. Para ello tendremos que usar Mocha y Chai.

- **ENLACE A LA DOCUMENTACIÓN EN TYPEDOC**
> - [Informe documentación con Typedoc]()



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## PASO PREVIO: ACEPTACIÓN DE TAREA DE GITHUB CLASSROOM


Antes de comenzar se nos requiere que aceptemos la tarea asignada en el GitHub Classroom:

![Asignación GitHub Classroom](https://i.imgur.com/7sAZe2x.jpg)

Con ello ya podríamos trabajar en esta práctica.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## ESTRUCTURA BÁSICA DE PROYECTOS


Lo primero sería estructurar el workspace de nuestra práctica siguiendo algunos pasos indicados en:

> - [Estrutura](https://ull-esit-inf-dsi-2021.github.io/typescript-theory/typescript-project-setup.html)

Comenzamos creando la estructura básica, primero creando el directorio donde se alojará el repositorio clonado, tal que:

![Clonar repositorio](https://i.imgur.com/wGvqmj6.jpg)

Comenzamos modificando el **package.json** con el comando `npm init --yes` y creamos de forma automática el fichero de configuración **tsconfig.json** eso lo haremos con el comando `tsc --init` y se crearía el tsconfig.json por defecto, nosotros lo modificaremos algo más para poder trabajar correctamente, necesitaremos poner la opción **exclude []** dentro del tsconfig.json para indicarle al compilador los directorios que exluiría a la hora de compilar explícitamente quedando:

![tsconfig.json](https://i.imgur.com/cMYGzU1.jpg)

Esos 3 directorios los exluiríamos a la hora de hacer `npm start` y no fallar a la hora de compilar los tests o los node-modules.

Para ello creo el directorio donde empezaremos a estructurar los directorios y ejercicios, además de configurar el **package.json**, quedando el package.json tal que:

![package.json](https://i.imgur.com/8E7sYOj.jpg)

También necesitamos crear a partir de este el **tsconfig.json** con la ruta de localización de los ejercicios.ts, en el directorio `./src` y sus ejecutables .js en el directorio `./dist`, como hemos hecho en otras prácticas:

Manualmente, se crearía ambos directorios donde trabajaremos. 

También necesitaremos una compilación con control automático de cambios que instalaremos con el comando `npm install --save-dev tsc-watch`, tal que:

![Compilacion control de cambios automáticos](https://i.imgur.com/TfNDhqN.jpg)

Por último en la organización de la estructura básica será la instalación del paquete **EsLint**, esto por si quisiéramos comprobar la sintaxis de nuestro código, encontrar y solucionar problemas en el mismo. Primero lo instalamos con el comando:

> `npm install -g eslint` 

Y lo inicializamos con `eslint --init` añadiéndole esto valores:

![Configuración Eslint](https://i.imgur.com/roVpYH9.jpg)

Luego modificar el fichero .eslint que se crea con las reglas correspondientes, quedando:

![Esdlint configuracion fichero](https://i.imgur.com/pvViLkf.jpg)

Quedando la primera estructura básica de esta práctica del modo: 

![Estructura básica](https://i.imgur.com/tJ7j521.jpg)

Tras la estructura básica nos dedicaremos a trabajar en el directorio `./src` donde alojaremos los ficheros correspondientes a los ejercicios que se nos plantea en esta práctica, además de preparar la documentación con typedoc y las pruebas unitarias (TDD) con Mocha y Chai.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN TYPEDOC

Para conocer más sobre esta herramienta consultar [Typedoc](https://typedoc.org/). Como ya desde la práctica 3 nos habíamos introducido a la herramienta **Typedoc**, solo queda seguir los mismos pasos mecánicos para esta práctica. Dicho informe creado en Typedoc hecho con los comentarios de los ejercicios de esta práctica se aloja en:

[Informe Typedoc Práctica 5]() 

O también mirando en los apartados **Objetivos** y **Bibliografía/ webgrafía** de este informe.

Comenzamos con la instalación de typedoc:

![Instalación typedoc](https://i.imgur.com/MgB701j.jpg)


Con ello podemos ver que se ha creado un directorio, que es como organizará typedoc la documentación que es por módulos, creando así `./node_modules`. Continuaremos con la configuración para poder usar Typedoc, primero si no se ha creado por defecto crear el **typedoc.json**, lo creamos y le añadimos la ruta de los ficheros a los que haremos el seguimiento de documentación. Y en el apartado `"out: "` pondremos el directorio donde se alojará toda esa documentación. Tras guardar dicha configuración se genereará automáticamente el directorio `./doc`.

![typedoc.json](https://i.imgur.com/K7eViEk.jpg)

Para poder usar la herramienta necesitamos invocarla con un comando, dicho comando será: `npm run [nombre_invocación]`, el nombre de invocación es lo siguiente que configuraremos en el **package.json**, para ello pondremos en la parte de scripts del fichero:

> `"doc": "typedoc"`

- **doc**: será el nombre con el que ejecutaremos la herramienta
- **typedoc**: la herramienta que lleva la documentación de la práctica

Esto quedaría tal que:

![Typedoc configuracion package.json](https://i.imgur.com/bbibywr.jpg)


Ya tendríamos la documentación en el directorio `./doc` para ejecutarla serviría con el comando ´npm run doc´ como antes especificamos. Quedando una estructura como:

![Estructura con typedoc](https://i.imgur.com/6rK5szx.jpg)

Esto genera documentación pero a partir de comentarios de TypeScript del estilo `/** */` con esta forma especificando la función, los parámetros, lo que devuelve, los snippet...

Esto guardaría esos comentarios en forma de página HTML para la documentación, tendríamos que ir al fichero `index.html` en el directorio de `./modules`, y con el click derecho pinchar sobre la opción de: __Open with Live Server__ y así generaría una página HTML con los comentarios en forma de documentación.

Finalizando así la documentación con Typedoc.



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━




▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## INSTALACIÓN. CONFIGURACIÓN MOCHA Y CHAI

En este apartado como ya hemos hecho en la anterior práctica, Práctica 4, tendremos que volver a ejecutar dichos pasos para poder trabajar con Pruebas Unitarias con las herramientas **Mocha** y **Chai**. Primero instalaremos las dependencias y paquetes de Mocha y chai. Para ello ejecutaremos:

![Instalación Mocha y Chai](https://i.imgur.com/gWbjkmH.jpg)

A continuación con el comando `touch .mocharc.json` crearemos el fichero de configuración de la herramienta Mocha, este irá en la raíz de el proyecto y nos indicará utilidades para hacer TDD, es decir las pruebas unitarias. Para ello le indicaremos que las pruebas unitaras se alojarán en el directorio **./tests** y tendrán una terminología de **.spec.ts**. Esto quedaría:

![configuración .mocharc.json](https://i.imgur.com/AyLzjOg.jpg)

Ya tendremos una configuración básica de la herramienta, pero necesito crear el directorio **./tests** y los ficheros que tendrán las pruebas unitarias de los 3 ejercicios que se nos plantean, tendrá una estructura > `ejercicio-n.spec.ts`, siendo n = [1-3], con la enumeración de cada ejercicio. Sería:

![directorio tests](https://i.imgur.com/YTUSKs6.jpg)

Como ha pasado con la herramienta **Typedoc** indicaremos en el **package.json** con qué comando, ejecutaremos la herramienta de mocha. Esta herramienta se ejecuta tal que `npm run [nombre_de_invocación]`, el nombre de invocación en nuestro caso será **test**, quedando el comando completo para ejecutar las pruebas unitarias de la forma: 

> `npm run test`

Este nombre de invocación es el que configuraremos en el package.json, quedando:

![mocha en package.json](https://i.imgur.com/XwoWYpo.jpg)

Finalizando con todo esto la configuración de las herramientas necesarias para ejecutar los ejercicios mediante TDD. Quedando la estructura final con los ficheros .gitignore además del .nojekyll, los cuales no se nombraron pero porque se dan por hechos, como:

![Estructura final proyecto](https://i.imgur.com/6e75OU1.jpg)
 


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


### PRUEBAS UNITARIAS ESTRUCTURA

Ya desde la práctica 4 empleamos pruebas unitarias, pero en esta práctica ya las ponemos 100% en uso. El sistema que emplearemos en TDD, será:

1. Creamos una prueba unitaria, con la forma `ejercicio-n.spec.ts`, siendo n = [1-3], en este caso, y alojado en el directorio `./tests`. Tendremos que añadir las dependencias de paquetes de las herramientas Mocha y Chai de la forma:

> `import 'mocha';
 import {expect} from 'chai';`

2. Además añadimos la clase a la que le realizaremos dichas pruebas unitarias y la ruta donde está alojada dicha clase, de la forma:

Este ejemplo es la prueba unitaria real del código asociado al ejercicio 1.

> `import {Pokedex} from '../src/index';
import {Combat} from '../src/index';`

Con esta incorporación se debe modificar en el código del ejercicio y poner **export**, de la forma:

> `export class Pokedex {}`

3. Describir a continuación las operatorias que se harán en esa pueba unitaria (`it('pokedex')`).
4. Finalmente concluyendo con la expectativa que se quiere conseguir (`expect().to.be.equal()`).

Esto sería un concepto básico de cómo rellenar una prueba unitaria para empezar a comprobar mediante TDD si nuestro código funciona. 


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
 
La metodología que se emplea es:

1. Escribimos en el fichero **.spec.ts** la expectativa que se espera conseguir de algún método o del propio funcionamiento de la clase.
2. Se comprueba que falla tras hacer `npm run test` porque no está la clase o el método a comprobar.
3. Se guarda dicho fallo con:

> `git add .`

> `git commit -m "Fallo test de crear la clase Pokedex"`

> `git push --all`


4. Se redacta en el fichero asociado con el código el método o la clase que queremos que haga cierta funcionalidad, etc.
5. Se ejecuta de nuevo el comando para realizar la comprobación de la expectativa (`npm run test`).
6. Y si todo está bien planteado saldría válida o correcta la prueba unitaria sin fallos.
7. Se guarda dicho acierto con:

> `git add .`

> `git commit -m "Acierto test de crear la clase Pokedex"`

> `git push --all`


Con esto en claro sobre cómo realizaría mis pruebas unitarias, se puede proseguir con el planteamiento de los ejercicios.



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 1

El apartado del ejercicio 1, alojado en [link Enunciado de la Práctica 5](https://ull-esit-inf-dsi-2021.github.io/prct05-objects-classes-interfaces/) me hace replantear la siguiente estructura que formulé para el planteamiento del ejercicio:

**CLASE POKEDEX**

![Estructura class Pokedex](https://i.imgur.com/TUDyea9.jpg) 

Como podemos ver en el esquema que me planteo es hacer una clase _Pokedex_ primero, esta tendrá las propiedades del **nombre del pokemon**, el **peso**, la **altura** y el **tipo** cuyo nivel de acceso será **privado**. Esto porque son valores que no quiero que se modifiquen ante nada. Y la propiedad **stats**, las estadísticas del pokemon, será un array de arrays que me tenga en ello los valores del ataque, defensa, velocidad y vida del Pokemon y cuyo nivel de acceso es público, pues no son valores que sean fijos y no se deban cambiar, además son arrays de arrays por si incluímos otros valores, como el Ataque y la defensa especial, para que sea más escalable dicha propiedad.

Además las funciones que tendrá asociada la clase _Pokedex_ son el constructor, para definir las anteriores propiedades nombradas, y los **getters**, pues es una buena práctica trabajar con los getters de las propiedades antes que con las susodichas. 


**CLASE COMBAT**

![Estructura class Combat](https://i.imgur.com/WIIOd4Q.jpg)

Como podemos observar en el esquema también me planteo la otra clase, teniendo así en mi código final de este ejercicio **2 clases**, esta clase _Combat_, tendrá como propiedades de acceso público los **tipos** de los dos pokemon que combatirán. 

Además tiene como funciones, un constructor para definir las anteriores propiedades, una función **combat** esta recibirá los dos tipos de los pokemon, y con la ayuda de la función de mi ejercicio 9 de la práctica 3, obtendremos la efectividad y daño que efectuará cada pokemon respecto a su tipo. Finalmente encontramos la función **start** la cual no sólo recibirá los dos tipos de los pokemon sino también su vida y hará uso de las reglas impuestas en el enunciado como del daño que realiza cada pokemon y queda reflejado en la anterior función **combat**.


Como podemos ver el planteamiento que se tomó se comenzó luego por las pruebas unitarias.


#### PRUEBAS UNITARIAS Y DESARROLLO DEL CÓDIGO

Ya tenía el anterior esquema mental, entonces procedería a la metodología TDD, desarrollando la prueba unitaria correspondiente. 

Comencé comprobando así que la clase _Pokedex_ podía inicializar los valores del getter si le pasaba un Pokemon con sus datos. Quedando los pasos que realicé de la siguiente forma:

1. Declaré dos pokemon **pok1** que sería un ["Serperior"](https://pokemondb.net/pokedex/serperior) con sus respectivos datos y un ["Samurott"](https://pokemondb.net/pokedex/samurott) con sus respectivos datos, ambos serían objetos de la clase Pokedex. Y la expectativa primera fue la que me sacara los nombres de los pokemon, quedando el `expect`:

![Expect fallo salida nombre Pokemon](https://i.imgur.com/q0vtxlF.jpg)

2. Ejecuté `npm run test` y me salió fallida la prueba, como se esperaba, pues no existía tal getter:

![Expect fallo salida nombre Pokemon](https://i.imgur.com/3UbqKQC.jpg)

3. Guardé el fallo:

> `git add .`

> `git commit -m "Fallo test de sacar el nombre del pokemon de la clase Pokedex"`

> `git push --all`


4. Después de definir el objeto en su constructor y crear el getter correspondiente (`getName()`):

![GetName()](https://i.imgur.com/mK9WIXA.jpg)

5. Ejecuté `npm run test` y me salió correcta las expectativas:

![Expect acierto salida nombre Pokemon](https://i.imgur.com/pzMGhBT.jpg)

6. Guardé el acierto:


> `git add .`

> `git commit -m "Acierto test de sacar el nombre del pokemon de la clase Pokedex"`

> `git push --all`


Así hice lo mismo con las demás expectativas sobre los getters de la clase _Pokedex_, quedando finalmente las expectativas como:

![Expects class Pokedex](https://i.imgur.com/hoU9isb.jpg)

Y comprobándose cada una de ellas:

![Comprobación expectativas](https://i.imgur.com/Dn8Cvwf.jpg)


Una vez que hice las expectativas iba realizando las funciones de la clase hasta quedarme estructurada como:

![Class Pokedex](https://i.imgur.com/Svl8Bhr.jpg)


Ahora pasaríamos a la clase _Combat_. Tras crear la clase, comprobaríamos, siguiendo el mismo procedimiento que antes si la funcion **combat()** imprime el daño que causaría cada Pokemon y si la función **start()** imprime el combate en sí y cómo disminuye su vida con el daño que se realizan.

Primero hice la expectativa de combat, falló, hice le código y luego funcionó y lo mismo con start, quedando ambas expectativas como:

![definicion de variable expect](https://i.imgur.com/z5WkFyL.jpg)


![Expects clas Combat](https://i.imgur.com/GCc6RIn.jpg)


Así se comprobó que funcionaba:

![Comprobacion](https://i.imgur.com/2I0yf28.jpg)

Y el código resultante que da acierto, y pasaré a explicar es:

**FUNCIÓN COMBAT()**

![Funcion combat](https://i.imgur.com/AoiifO1.jpg)

Como se puede ver de esta función es una modificación de mi ejercicio 9 de la práctica 3, que devuelve el daño que hace cada pokemon:

![daño](https://i.imgur.com/2tY4gxT.jpg)

De la cual empleo el método round() de la clase **Math {}** para redondear el valor del daño.


**FUNCIÓN START()**

eeeee





Concluyendo así el programa y mostrando un auténtico combate Pokemon!!


![Ejecución programa]()


━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━



▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

### EJERCICIO 2






━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


### EJERCICIO 3



━━━━━━━━━━━━━━━━━━━━━━━━━━✧❂✧━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 
▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂


## DESARROLLO DEL INFORME CON GITHUB PAGES


Tras finalizar la práctica se nos requiere un informe en con el formato de estilos de Markdown en **GitHub Pages**, para ello usamos la guía de estilos de Markdown en [Markdown guide](https://guides.github.com/features/mastering-markdown/).

Y así finalizamos esta práctica e informe redactado en el archivo **index.md**.





▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## CONCLUSIONES


Conclusión sobre la práctica e informe, aquí plantearé la dinámica de la práctica y posibles dudas que me hayan surgido y solucionado. La práctica en sí hubieron ejercicios donde tuve dificultad donde acudí a la tutoría, pero hubieron ejercicios algo complejos de realizar si no usaba expresiones regulares. Estas me han beneficiado bastante a la hora de resolverlos y/o plantearlos. Por otro lado, la herramienta typedoc no me ha causado problemas y he sabido desenvolverme con ella. En cambio, otra uso y herramientas opcionales que quise empezar a usar como son: **Mocha** y **Chai**, me han causado dificultad. Sé que no eran obligatorias pero quise hacer esta práctica con esas herramientas y me ha saltado un error en la instalación que tendré que consultar con el profesor. Por último, el informe pues ya en la práctica 1, me familiaricé con la herramienta de GitHub Pages y ha sido sencillo.

▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

## BIBLIOGRAFÍA Y/O WEBGRAFÍA


- [Enunciado práctica](https://ull-esit-inf-dsi-2021.github.io/prct03-types-functions/)
- [Repositorio con ejercicios y estructura básica](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct03-static-types-functions-alu0101202952/tree/desarrollo/p3_Ejercicios_datos_funciones)
- [Informe documentación con Typedoc](http://127.0.0.1:5500/p3_Ejercicios_datos_funciones/docs/index.html)
