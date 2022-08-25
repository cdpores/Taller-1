
let ops=document.getElementById('ops')

const rta=document.getElementById('respuesta')

ops.addEventListener('click', (e)=>{
    e.preventDefault()
    let name=document.getElementById('insName').value
    let last=document.getElementById('insLast').value
    let act=document.getElementById('insAct').value
    let text

    

    if (name=='1' && last=='1' && act=='1') {
       
        text=`<p><i class="fa-solid fa-check"></i></i></p>
        <p>Efectivamente ese es el instructor y si dicta esa materia</p>`
        rta.innerHTML=text

        rta.style.setProperty('color', '#2EDC03')
        rta.style.setProperty('font-size', '1.2rem')
        rta.style.setProperty('margin', '1rem')
    }else if (name=='2' && last=='2' && act=='2') {
    
        text=`<p><i class="fa-solid fa-check"></i></p>
        <p>Efectivamente ese es el instructor y si dicta esa materia</p>`
        rta.innerHTML=text

        rta.style.setProperty('color', '#2EDC03')
        rta.style.setProperty('font-size', '1.2rem')
        rta.style.setProperty('margin', '1rem')
        
    }else if (name=='3' && last=='3' && act=='3') {
    
        text=`<p><i class="fa-solid fa-check"></i></p>
        <p>Efectivamente ese es el instructor y si dicta esa materia</p>`
        rta.innerHTML=text

        rta.style.setProperty('color', '#2EDC03')
        rta.style.setProperty('font-size', '1.2rem')
        rta.style.setProperty('margin', '1rem')
        
    }else if (name=='4' && last=='4' && act=='4') {
    
        text=`<p><i class="fa-solid fa-check"></i></p>
        <p>Efectivamente ese es el instructor y si dicta esa materia</p>`
        rta.innerHTML=text
        
    }else if (name=='5' && last=='5' && act=='5') {
    
        text=`<p><i class="fa-solid fa-check"></i></p>
        <p>Efectivamente ese es el instructor y si dicta esa materia</p>`
        rta.innerHTML=text

        rta.style.setProperty('color', '#2EDC03')
        rta.style.setProperty('font-size', '1.2rem')
        rta.style.setProperty('margin', '1rem')
        
    }else if (name=='6' && last=='6' && act=='6') {
    
        text=`<p><i class="fa-solid fa-check"></i></p>
        <p>Efectivamente ese es el instructor y si dicta esa materia</p>`
        rta.innerHTML=text

        rta.style.setProperty('color', '#2EDC03')
        rta.style.setProperty('font-size', '1.2rem')
        rta.style.setProperty('margin', '1rem')
        
    }else if (name=='7' && last=='7' && act=='7') {
    
        text=`<p><i class="fa-solid fa-check"></i></p>
        <p>Efectivamente ese es el instructor y si dicta esa materia</p>`
        rta.innerHTML=text

        rta.style.setProperty('color', '#2EDC03')
        rta.style.setProperty('font-size', '1.2rem')
        rta.style.setProperty('margin', '1rem')
        
    }else{

        text=`<p><i class="fa-solid fa-xmark"></i></p>
        <p>Lo siento te haz equivocado</p>`
        rta.innerHTML=text

        rta.style.setProperty('color', 'red')
        rta.style.setProperty('font-size', '1.2rem')
        rta.style.setProperty('margin', '1rem')
    }

})