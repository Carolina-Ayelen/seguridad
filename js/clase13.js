jQuery: libreria de js, escrita en js, que permite reduccion de codigo, compatibilidad en todos los navegadores.
Hay dos versiones:
	-jQuery-x.x.x.js: version ilegible. Desarrolo
	-jQuery-x.x.x.min.js: version minimizada. Produccion
Hay dos formas de referenciarlo:
	-usando jQuery con CDN: ruta url
	-referenciarlo en HTML: descargarlo y referenciarlo en el html.
Ubicarlo al principio de todas nuestras referencias.
Tiene complementos: jQuery y jQuery Interface son los mas usados.

$ (Selector).action();

Selectores:
Ej:

$("p"): trae todos los p del DOM

document.getElementById(retorna un unico elemento) es igual a $("#miDiv")/ por id
document.getElementTagName( retorna un [])es igual a $("p")/por nombre del objeto, clase
document.getElementClassName(retorna un []) es igual a $(".class")/por clase

Existen mas selectores:

$("*"): todos los elementos
$("this"): devuelve donde esta ese elemento
$("document"): el documento entero, todo el html
$("body"): en el body
$("p.intro"): selecciona todos los p q tenga intro como clase
$("p:first"): el primer p que encuentre
$("ul li:first"): el primer li dentro de un ul (anidado)
$("div p"): todos los p que esten dentro de un div
$("div p:first"): el primero p que este dentro de un div (anidado)
$("ul li:first-child"): el primero hijo li dentro de un ul
$("[href]"): los q tenga como atributo [] href. (por atributo usar [])
$(":button"): selecciona todos los button y los input de type button
$("tr:even"): aplica a todos los tr pares 
$("tr:odd"): aplica a todos los tr inpares


jQuery- JS
append(lo que queres agregar al final del elemento que seteo) = appenChild 
prepend(): agrerga el elemento como primer elemento del contenido al que se esta agregando
after(): inserta contenido despues del elemento seleccionado, sin necesidad de ser hijo.
before(): insertar contendio antes del elemento seleccionado, sin necesidad de ser hijo.
hide(): oculta un objeto, agergando display: none
show(): muestra un objeto
text() = innerText(devuelve del texto o el contenido como texot)
html() = innerHTML(devuelve como codigo html)
text() = value 
val()  = en input no funciona con text ya q no tiene etiquetas que abren y cierran

Si las llamas sin parametros, es para ver el valor, y si las llamas con valor es para setearlo ()

//ntlmaster
