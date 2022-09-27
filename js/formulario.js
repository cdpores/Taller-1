//validacion Nombre y apellido ^[a-zA-ZÁ-ÿ\s]{1,40}
//validacion numdoc y telefono ^\d{7,10}$
//validadcion correo ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
//validacion contraseña ^(?=.^\d)(?=.*[#$%@])(?=.*[a-z])(?=.*[A-Z]).{8,}$


const reglas={
    textos:/^[a-zA-ZÁ-ÿ\s]{1,40}/,
    numeros:/^\d{7,10}$/,
    correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.+\d)(?=.[#$%&!@])(?=.[a-z])(?=.*[A-Z]).{8,}$/
}

const input={
    numdoc: false,
    nombre: false,
    apellido: false,
    correo: false,
    telefono: false,
    password: false
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
        document.querySelector(`#g-${grupo} i`).classList.add("fa-circle-check")
        document.querySelector(`#g-${grupo} i`).classList.remove("fa-circle-exclamation")
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible')
    }else{
        document.getElementById(`g-${grupo}`).classList.add("error")
        document.getElementById(`g-${grupo}`).classList.remove("success")
        document.querySelector(`#g-${grupo} i`).classList.remove("fa-circle-check")
        document.querySelector(`#g-${grupo} i`).classList.add("fa-circle-exclamation")
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible')
        input[grupo]==false;
        
    }

}

/*Validar Password*/
const validarPassword = () => {
    const pass1 = document.getElementById('password');
    const pass2 = document.getElementById('password2');

    if (pass1.value === pass2.value) {
        
        document.getElementById(`g-password2`).classList.add('success');
        
        document.querySelector("#g-password2 i").classList.add('fa-circle-check')
        
        document.getElementById(`g-password2`).classList.remove('error');
        
        document.querySelector("#g-password2 i").classList.remove('fa-circle-exclamation')

        document.querySelector(`#g-password2 .msn-error`).classList.remove('msn-error-visible');

        inputs['password'] = true;
    } else {
        document.getElementById('g-password2').classList.add('error');

        document.querySelector("#g-password2 .msn-error").classList.add('msn-error-visible');

        document.querySelector("#g-password2 i").classList.remove('fa-circle-check')

        document.querySelector("#g-password2 i").classList.add('fa-circle-exclamation')
        inputs['password'] = false;
    }
}


const ValidarPasssword2=()=>{
    if (document.getElementById('passwor').value==document.getElementById('password2').value) {
        document.getElementById(`g-${grupo}`).classList.remove("error")
        document.getElementById(`g-${grupo}`).classList.add("success")
        document.querySelector(`#g-${grupo} i`).classList.add("fa-circle-check")
        document.querySelector(`#g-${grupo} i`).classList.remove("fa-circle-exclamation")
        document.querySelector(`#g-${grupo} .msn-error`).classList.remove('msn-error-visible')
    }else{
        document.getElementById(`g-${grupo}`).classList.add("error")
        document.getElementById(`g-${grupo}`).classList.remove("success")
        document.querySelector(`#g-${grupo} i`).classList.remove("fa-circle-check")
        document.querySelector(`#g-${grupo} i`).classList.add("fa-circle-exclamation")
        document.querySelector(`#g-${grupo} .msn-error`).classList.add('msn-error-visible')
        input[grupo]==false;
        
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

        case 'password2':
            validarPassword()
        break;
    }
}

campos.forEach((campos)=>{
    campos.addEventListener('keyup', ValidarCampos)
    campos.addEventListener('blu', ValidarCampos)   
})

form.addEventListener('submit', e=>{
    e.preventDefault();

    const terminos=document.getElementById('terminos');

    if (input.numdoc==true && input.nombre==true && input.apellido==true && input.correo==true && input.telefono==true && password==true && terminos.checked) {
        alert('EL usuario ha sido registrado');

        form.reset()
        icono.querySelectorAll('.success').forEach(icono=>{
            icono.classList.add('error');
        })


    }


})