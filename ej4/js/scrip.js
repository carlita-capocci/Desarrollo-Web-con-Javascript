//Aplicar color de fondo #fcf79f al documento

var cuerpo= document.getElementsByTagName('body')[0];
cuerpo.style.backgroundColor='#fcf79f';


//Cambiar el color de todos los párrafos (etiqueta p) a verde (#0ca001)

var parrafos= document.getElementsByTagName('p');

for(var i=0; i<parrafos.length; i++){
var parrafo= parrafos[i];
parrafo.style.color= '#0ca001';
}


//Aumenta el tamaño de la fuente a 24px, solo del elemento con id "destacado"

var destacado= document.getElementById('destacado');
destacado.style.fontSize= '24px';


//Cambiar la familia tipográfica por Arial a los títulos (etiqueta h2)

var etiquetas= document.getElementsByTagName('h2');
for(var i=0; i<etiquetas.length; i++){
    var etiqueta= etiquetas[i];
    etiqueta.style.fontFamily= 'Arial';  
}


//Crear un vínculo con la referencia "https://www.lipsum.com"

var vinculo = document.createElement("a");
var contenido = document.createTextNode("Enlace");
vinculo.appendChild(contenido);
document.body.appendChild(vinculo);

vinculo.href= 'https://www.lipsum.com';
vinculo.target='_blank';
