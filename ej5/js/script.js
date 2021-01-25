
var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var num= prompt('Ingresa un numero estre 0 y 25');
var letra= prompt('Ingresa una letra');

if(num<0 || num>25){
    alert('El numero proporcionado no es valido')
}else{
    var resultado1= letras[num];
    console.log(resultado1);
    if( resultado1 === letra.toLocaleUpperCase()){
        alert('Ha ganado')
    } else{
        alert('Ha perdido');
    }
}


