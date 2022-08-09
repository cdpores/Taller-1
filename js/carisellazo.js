let moneda
let resp
let cuenta=0
let interacciones=0
let apuesta
let cont=true

while(cont==true){
    
    resp=Math.ceil(Math.random()*2)
    console.log(resp)
    apuesta=window.prompt('Cuanto deseas apostar?')
    moneda=window.prompt('El juego ha comenzado, cual sera tu eleccion, cara o sello?; digita 1 para selecionar cara y 2 para seleccionar sello');

    interacciones=interacciones+1

    console.log('Tu has jugado '+interacciones+' vez(es)');
    

    if (moneda==1 && resp==1) {
        cuenta=cuenta+(parseInt(apuesta)*2)
        console.log('Felicidades haz ganado tu aumulado es '+cuenta);
    } else if(moneda==2 && resp==1) {
        cuenta=cuenta-parseInt(apuesta)
        console.log('Lo lamento haz perdido tu aumulado es '+cuenta);
        
    } else if(moneda==2 && resp==2){
        cuenta=cuenta+(parseInt(apuesta)*2)
        console.log('Felicidades haz ganado tu aumulado es '+cuenta);
        
    } else if(moneda==1 && resp==2){
        cuenta=cuenta-parseInt(apuesta)
        console.log('Lo lamento haz perdido tu aumulado es '+cuenta);
        
    }

    cont=window.confirm('Desea continuar?')
}
console.log('Tu has jugado '+interacciones+' vez(es)');