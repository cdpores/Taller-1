function calcular(){
    let num1=parseInt(document.getElementById('num1').value)
    let num2=parseInt(document.getElementById('num2').value)
    let op=document.getElementById('operation').value
   

    if (op==1) {
        let res=num1+num2

        alert(`El numero uno es ${numuno} y el numero dos ${num2} la suma es ${res}`)
    }else if (op==2) {
        let res=num1-num2

        alert(`El numero uno es ${num1} y el numero dos ${num2} la resta es ${res}`)
    }else if (op==3) {
        let res=num1*num2

        alert(`El numero uno es ${num1} y el numero dos ${num2} la multiplicacion es ${res}`)
    }else if (op==4) {
        let res=num1/num2

        alert(`El numero uno es ${num1} y el numero dos ${num2} la division es ${res}`)
        
    }else{
        alert('No has ingresado ningun valor')
    }
}

let Btn=document.getElementById('btn')

Btn.addEventListener('click', calcular)

let ops=document.getElementById('ops')

const rta=document.getElementById('respuesta')

ops.addEventListener('click', (e)=>{
    let num1=parseInt(document.getElementById('num1').value)
    let num2=parseInt(document.getElementById('num2').value)
    let text

    e.preventDefault
    console.log(e.target)
    console.log(e.target.id)

    rta.style.setProperty()

    if (e.target.id=='Sumar') {
        let res=num1+num2
        console.log(`El numero uno es ${num1} y el numero dos ${num2} la suma es ${res}`)
        text=`<p><i class="fa-solid fa-check"></i></p>
        <p>El numero uno es ${num1} y el numero dos ${num2} la resta es ${res}</p>`
        rta.innerHTML=text
    }else if (e.target.id=='Restar') {
        let res=num1-num2
        console.log(`El numero uno es ${num1} y el numero dos ${num2} la resta es ${res}`)
        text=`<p><i class="fa-solid fa-xmark"></i></p>
        <p>El numero uno es ${num1} y el numero dos ${num2} la resta es ${res}</p>`
        rta.innerHTML=text
        
    }

})

