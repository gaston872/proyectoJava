let nombre = prompt("Ingrese su nombre");
let numero = parseInt(prompt("Ingrese cantidad de lugares a visualizar entre 1 y 20"));

if((numero >0) && (numero<=20)){
for(let i=1; i<22; i++){
if(i===numero+1){
    break;
}
alert(i);
}
let mensaje = `${nombre} usted visualizó ${numero} lugares`;
alert(mensaje);
}else {
    alert(nombre + " ingresaste un numero incorrecto");
}


