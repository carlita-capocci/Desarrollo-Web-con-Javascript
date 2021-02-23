//Body
var tipografia= document.getElementsByTagName('body')[0];
tipografia.style.fontFamily='Arial';
tipografia.style.backgroundColor='#FCF3CF';


//Menu Navegacion
var navegacion= document.getElementsByClassName('navegacion')[0];
navegacion.style.border='1px solid black';
navegacion.style.backgroundColor='#F7DC6F';
navegacion.style.height='70px';
navegacion.style.display='flex';
navegacion.style.justifyContent='space-between';
navegacion.style.padding='0px 16px';
navegacion.style.alignItems='center';
navegacion.style.marginBottom='30px';

var logo= document.getElementsByClassName('logo')[0];
logo.style.height='50px';

var menu= document.getElementsByClassName('menu')[0];
menu.style.display='inline';

var items= document.getElementsByClassName('submenu');
for(var i=0; i<items.length; i++){
    var item= items[i];
    item.style.display='inline';
    item.style.paddingLeft= '10px';
}

//h1
var tituloPrincipal= document.getElementsByTagName('h1')[0];
tituloPrincipal.style.fontSize='40px';
tituloPrincipal.style.fontStyle='italic';


//Titulos h2
var titulosH2= document.getElementsByTagName('h2');
for( var i=0; i<titulosH2.length; i++){
    var titulo= titulosH2[i]
    titulo.style.fontSize='30px';
    titulo.style.fontStyle='italic';
    titulo.style.textAlign='center';
    titulo.style.margin='50px';
    titulo.style.color='red';
}


//Parrafos
var parrafos= document.getElementsByTagName('p');
for(var i=0; i<parrafos.length; i++){
    var parrafo= parrafos[i];
    parrafo.style.marginLeft='100px';
    parrafo.style.marginRight='100px';
}


//Eleccion de Personajes
var eleccion=document.getElementsByTagName('select')[0];
eleccion.style.width='300px';
eleccion.style.height='40px';
eleccion.style.paddingLeft='20px';
eleccion.style.fontSize='20px';
eleccion.style.display='block';
eleccion.style.marginRight='auto';
eleccion.style.marginLeft='auto';

eleccion.addEventListener('change', (event) => {
    var personajes = document.querySelectorAll('.personajes div');
    personajes.forEach(p => p.style.display='none')
    var personaje = event.target.value;
    if(personaje){
        var divPersonaje = document.getElementById(personaje);
        divPersonaje.style.display = 'block';
    }
})


//Div de personajes
var personajes= document.querySelector('section.personajes');
var divisores= personajes.getElementsByTagName('div');
for(var i=0; i<divisores.length; i++){
    var divisor= divisores[i];
    divisor.style.border='1px solid black';
    divisor.style.width='500px';
    divisor.style.margin='50px';
    divisor.style.padding='30px';
    divisor.style.textAlign='center';
    divisor.style.marginRight='auto';
    divisor.style.marginLeft='auto';
    divisor.style.backgroundColor='white';
}


//Imagenes
var secciones= document.getElementsByTagName('section');
for(var i=0; i<secciones.length; i++){
    var seccion=secciones[i];
    var imagenes= seccion.getElementsByTagName('img');
    for(var i=0; i<imagenes.length; i++){
        imagen= imagenes[i];
        imagen.style.width='200px';
        imagen.style.marginBottom='30px';
    }
}


//Detalle de cada personaje
var nombresPersonajes= document.getElementsByTagName('h3');
for(var i=0; i<nombresPersonajes.length; i++){
var nombrePersonaje= nombresPersonajes[i];
nombrePersonaje.style.margin='20px';
nombrePersonaje.style.color='black';
nombrePersonaje.style.fontStyle='italic';
nombrePersonaje.style.textAlign='center';
}

//Quino
var quino=document.getElementsByClassName('quinoymafalda');
for(var i=0; i<quino.length; i++){
var quinoymafalda= quino[i];
quinoymafalda.style.display='block';
quinoymafalda.style.marginRight='auto';
quinoymafalda.style.marginLeft='auto';
}




//Final de pagina

var tresMafaldas= document.getElementsByClassName('tresMafaldas')[0];
tresMafaldas.style.display='block';
tresMafaldas.style.marginRight='auto';
tresMafaldas.style.marginLeft='auto';
tresMafaldas.style.height='200px';
tresMafaldas.style.width='500px';
tresMafaldas.style.marginTop='100px';


slider(['images/playa.jpeg', 'images/volar.png', 'images/naranja.jpeg'], 'div.slide' );


   $('#mundo').on('click',() => {
    window.open('https://hipertextual.com/2020/10/mafalda-quino-vinetas', '_blank');      
})


$('#sopas').on('click',() => {
    window.open('https://www.cucinare.tv/2020/09/30/el-dia-que-quino-explico-por-que-mafalda-odia-tanto-la-sopa/', '_blank');      
})


var nom= document.getElementById('nombre');
var mail= document.getElementById('email');
var comen= document.getElementById('comentario');




    $('#enviarlo').on('click', ()=>{
        var errores=[];
        if(nom.value === ''){
            errores.push('El campo nombre no puede estar vacío');
        };
        if(mail.value === ''){
            errores.push('El campo email no puede estar vacío');
        };
        if(comen.value === ''){
            errores.push('El campo comentario no puede estar vacío');
        }

        if(!errores.length){
            alert('Gracias por suscribite!!!');
        } else{
            alert(errores.join(' \n \n'))
        }
    })
    

