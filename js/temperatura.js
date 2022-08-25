function palabras(){

    let vtem=parseInt(document.getElementById('val-tem').value)
    let temp=parseInt(document.getElementById('grados').value)
    let conver=parseInt(document.getElementById('medidas').value)

    if (temp==1 && conver==2) {

        let res=vtem+273.15

        alert(`El resultado de la conversion es que ${vtem} gardos celcius, equivalen a ${res} grados kelvin`)
        
    } else if (op==2) {
 
        alert(palabra.toUpperCase())
        
    } else if (op==3){

        alert(palabra.toLowerCase())

    } else if (op==4) {

        alert(palabra.charAt(0))
        
    }
}