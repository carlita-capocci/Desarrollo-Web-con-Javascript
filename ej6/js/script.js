var num= prompt('ingresa un numero');

document.getElementById("boton").onclick = function iva () {
    alert('El numero que ingresaste sin iva es: ' + num);
    alert('El numero que ingresaste con iva es: ' + num * 1.21);
}

