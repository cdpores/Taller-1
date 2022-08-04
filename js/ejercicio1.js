let nombre=window.prompt('Digite su nombre');
let apellido=window.prompt('Digite su apellido');

console.log(`su nombre es ${nombre.toUpperCase()} y tine una longitud de ${nombre.length} caracteres`)

console.log(`su apellido es ${apellido.toLowerCase()} y tine una longitud de ${apellido.length} caracteres`)

window.alert(`su usuario es ${nombre.charAt(0)}${apellido}`)