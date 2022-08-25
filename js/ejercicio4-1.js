let opciones=document.querySelector('.opciones')
let resp=document.querySelector('#respuesta')

opciones.addEventListener('click', (e)=>{

    e.preventDefault()
    if (e.target.id=='op1') {
        alert('op 1')
        resp.innerHTML=`Opcion incorrecta!`
        resp.classList.add('incorrecto')
        resp.style.setProperty('visibility', 'visible')
        resp.classList.remove('correcto')    
    }else if (e.target.id=='op2') {
        resp.innerHTML=`Opcion incorrecta!`
        resp.classList.add('incorrecto') 
        resp.style.setProperty('visibility', 'visible')
        resp.classList.remove('correcto')       
    }else if (e.target.id=='op3') {
        resp.innerHTML=`Opcion correcta!`
        resp.classList.add('correcto')
        resp.style.setProperty('visibility', 'visible')
        resp.classList.remove('incorrecto')       
    }else if (e.target.id=='op4') {
        resp.innerHTML=`Opcion incorrecta!`
        resp.classList.add('incorrecto') 
        resp.style.setProperty('visibility', 'visible')
        resp.classList.remove('correcto') 
        
        
        
    }
})