/*Declarar la función por declaración
function lanzar(){
    let moneda = Math.floor((Math.random() * 2)+1);
    return moneda;
}
//Invocar la función
lanzar();
//Invocar la función con valor de retorno
console.log(`El lanzamiento fue ${lanzar()}`);
let lanzamiento=lanzar();
console.log(`El lanzamiento fue ${lanzamiento}`);*/

let lanzar=function lanzarmoneda() {
    let moneda = Math.floor((Math.random() * 2) +1);
    return moneda;
}


//función con parámetros
let ganar=function(saldo, apuesta){
    saldo=saldo+(apuesta);
    return saldo;
}

let perder=(saldo, apuesta)=>{
    saldo=saldo-apuesta;
    return saldo;
}

//invocar la funcion
let lanzamiento=lanzar();

//Invocar la función y enviar argumentos según corresponda 
ganar(1000, 2);
perder(1000, 3);

let seguir=true
let saldo=0
let jugador=prompt('Ingrese el nombre del jugador')
saldo=parseInt(prompt('Cuanto deseas recargar para jugar'));

while (seguir==true) {
    let eleccion=prompt(`${jugador} Elige 1. cara 2. sello`)
    let apuesta=parseInt(prompt(`De tu saldo actual ${saldo} ¿cuanto deseas apostar?`))
    let lanzamiento=lanzar();
    if (lanzamiento==1 && eleccion==1) {
        saldo=ganar(saldo,apuesta)
        alert(`El lanzamiento fue cara esogiste cara tu ganas!!!, tu nuevo saldo es  ${saldo}`)
        
    } else if (lanzamiento==2 && eleccion==2){
        saldo=ganar(saldo,apuesta)
        alert(`El lanzamiento fue sello esogiste sello tu ganas!!!, tu nuevo saldo es  ${saldo}`)

    }else if (lanzamiento==1 && eleccion==2){
        saldo=perder(saldo,apuesta)
        alert(`El lanzamiento fue cara esogiste sello tu perdiste!!!, tu nuevo saldo es  ${saldo}`)
        

    }else if (lanzamiento==2 && eleccion==1){
        saldo=perder(saldo,apuesta)
        alert(`El lanzamiento fue sello esogiste cara tu perdiste!!!, tu nuevo saldo es  ${saldo}`)
        

    }

    seguir=confirm('desea seguir jugando?')
    
}