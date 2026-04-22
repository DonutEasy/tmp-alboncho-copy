let box_procesador =  document.getQuerySelector('.box-procesador');

if (box_procesador) {
   box_procesador.innerHTML = 'hola';
} else {
   console.log("No existe el contenedor');
}
