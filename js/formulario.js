//validacion Nombre y apellido ^[a-zA-ZÁ-ÿ\s]{1,40}
//validacion numdoc y telefono ^\d{7,10}$
//validadcion correo ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//validacion contraseña ^(?=.^\d)(?=.*[#$%@])(?=.*[a-z])(?=.*[A-Z]).{8,}$


const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}/,
    numeros:/^\d{7,10}$/,
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password:/^(?=.^\d)(?=.*[#$%@])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
}

let form=document.getElementById('frm-usuario')
let campos=document.querySelectorAll('#frm-usuario input')

form.addEventListener('sumbit', e=>{
    e.preventDefault();
    alert('Se envio el formulario');
})

const ValidarInput=(regla, input, grupo)=>{
    if (regla.test(input.value)) {
        document.getElementById(`g-${grupo}`).classList.remove("error")
        document.getElementById(`g-${grupo}`).classList.add("success")
        document.querySelector(`#g-${grupo} i`).classList.remove("fa-circle-check")
        document.querySelector(`#g-${grupo} i`).classList.add("fa-circle-exclamation")
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible')
    }else{
        document.getElementById(`g-${grupo}`).classList.add("error")
        document.getElementById(`g-${grupo}`).classList.remove("success")
        document.querySelector(`#g-${grupo} i`).classList.remove("fa-circle-check")
        document.querySelector(`#g-${grupo} i`).classList.add("fa-circle-exclamation")
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible')
    }

}

const ValidarCampos=(e)=>{
    console.log('Se genero un evento sobre el campo '+e.target.name)

    switch(e.target.name){
        case 'numdoc':
            ValidarInput(reglas.numeros, e.target, e.target.name)
        break;
        
        case 'nombre':
            ValidarInput(reglas.textos, e.target, e.target.name)
        break;

        case 'apellido':
            ValidarInput(reglas.textos, e.target, e.target.name)
        break;

        case 'correo':
            ValidarInput(reglas.correo, e.target, e.target.name)
        break;

        case 'password':
            ValidarInput(reglas.password, e.target, e.target.name)
        break;
    }
}

campos.forEach((campos)=>{
    campos.addEventListener('keyup', ValidarCampos)
    campos.addEventListener('blu', ValidarCampos)   
})