console.log("hola mundo");

let numero=38;

console.log("El numero es", numero);
console.log(`El numero es ${numero}`);

let nombre='Cristian';
console.log(`El nombre es ${nombre}`);

let resultado=true;
let sena;
console.log(`El resultado es ${resultado}`);
console.log(`La variable es ${sena}`);

//let res=numero+5;
/*console.log("El resultado es "+res);
console.log(`El resultado es ${res}`);
console.log(`El resultado es ${numero+5}`);

//window.alert("Esto es una alerta");
let estado=window.confirm("Esta seguro de que bla bla bla");
console.log(`La ventana arrojo ${estado}`);

let num1=window.prompt("Digite el primer numero");
let num2=window.prompt("Digite el segundo numero");

let res=parseInt(num1)+parseInt(num2);
console.log(`El resultado es ${res}`);  

//Condicionales

if (num1>num2) {
    console.log(`El numero ${num1} es el mayor`);
    
}else if(num1==num2){
    console.log(`Los nuero digitados son del mismo valor`)

}else{
    console.log(`El numero ${num2} es el mayor`);

}

//Operador ternario

let nummayor=(num1>2)
?`el numero mayor es el ${num1}`
:`El numero myaor es el ${num2}`

console.log(nummayor);

//Condicionales con condicion compuesta 

let ususario=window.prompt("digite su usuario");
let contraseña=window.prompt("digite su contraseña");



if(ususario=='Cpores' && contraseña=='C123'){
    window.alert("Bienvenido")

}else if(ususario=='Cpores' && contraseña!='C123'){
    window.alert("verifique su contraseña")

}else if(ususario!='Cpores' && contraseña=='C123'){
    window.alert("verifique su usuario")

}else{
    window.alert("Credenciales de usuario incorrectas")
}*/

//condicional multiple 

let n1=window.prompt('Digite el primer numero')
let n2=window.prompt('Digite el seguindo numero')

let resp=window.prompt('A su disposicion existen ocho operaciones que desarrollar con esos numeros; la primera es la suma(digite s), la segunda es la resta(digite r), la tercera es la multiplicacion(digite m), la cuarta es la division(digite d), La quinta es la potenciacicion(digite p) y la sexta es la radicacion(ra) ')

switch (resp) {
    case 's':
    case 'S':
        console.log(`El resultado de la suma es ${parseFloat(n1)+parseFloat(n2)}`)
        
    break;
    
    case 'r':
    case 'R':
        console.log(`El resultado de la resta es ${parseFloat(n1)-parseFloat(n2)}`)
    break;
    case 'm':
    case 'M':
        console.log(`El resultado de la multiplicacion es ${parseFloat(n1)*parseFloat(n2)}`)
    break;
    case 'd':
    case 'D':
        console.log(`El resultado de la division es ${parseFloat(n1)/parseFloat(n2)}`);
    break;
    case 'p':
    case 'P':
        console.log(`El resultado de la potenciacion entre ${n1}^${n2} es ${Math.pow(n1,n2)}`)
    break;
    case 're':
    case 'RE':
        console.log(`El resultado de la raiz es ${Math.sqrt(n1).toFixed(2)}`)
    break;
    default:
        console.log('El valor ingresado no es valido')
    break;
}