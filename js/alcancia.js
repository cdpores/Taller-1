let resp=true;
let dinero;
let marranito=0;
let cont=0;

while (resp==true) {
    dinero=window.prompt('Ingrese la cantidad que desea guardar');
    marranito=marranito+parseInt(dinero);
    cont=cont+1;
    resp=window.confirm('Desa continuar?');
    console.log('El valor de la alcancia es '+marranito+' e ingreso '+cont+' vez(es) dinero');
}

console.log('El valor de la alcancia es '+marranito)

