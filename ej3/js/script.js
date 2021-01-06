//Numeros-Operaciones

var numero1= parseInt(prompt('Ingresa un numero'));
var numero2= parseInt(prompt('Ingresa un numero'));

document.write('<h3> Los resultados de las operaciones son: </h3> ');


var suma= numero1 + numero2;
document.write('La suma de los numeros ingresados es ' + suma);
document.write('<br />');


var resta= numero1 - numero2;
document.write('La resta de los numeros ingresados es ' + resta);
document.write('<br />');

var multiplicacion= numero1 * numero2;
document.write('La multiplicacion de los numeros ingresados es ' + multiplicacion);
document.write('<br />');

var division= numero1 / numero2;
document.write('La division de los numeros ingresados es ' + division);
document.write('<br />');


//Series-Arrays


var series= ['Friends', 'The Nanny', 'Two and a half man', 'The Crown', 'The Simpsons']


var seriesOrdenadas= series.sort();


document.write( '<h3> Mis series favoritas: </h3>' + seriesOrdenadas);