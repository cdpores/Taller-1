function palabras(){

    let palabra=document.getElementById('palabra').value
    let op=parseInt(document.getElementById('metodos').value)

    if (op==1) {

        alert(`tiene una longitud de ${palabra.length} caracteres`)
        
    } else if (op==2) {
 
        alert(palabra.toUpperCase())
        
    } else if (op==3){

        alert(palabra.toLowerCase())

    } else if (op==4) {

        alert(palabra.charAt(0))
        
    }

}