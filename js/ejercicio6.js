//let id=document.getElementById('features')

//console.log(id)

console.log(document.getElementById('features'))
console.log(document.querySelector('#features'))
console.log(document.querySelectorAll('p')[1])

document.querySelectorAll('p').forEach((e)=>console.log((e)))

console.log(document.querySelector('a').getAttribute('href'))

document.querySelector('a').setAttribute('href','https://www.youtube.com/' )

const mi=document.querySelector('#features')

mi.style.setProperty('color', 'blue')
mi.style.setProperty('width', '500px')
mi.style.setProperty('background-color', 'black')

const mic=document.querySelector('.myClass')

let text=`<p> El dom es bla bla </p> <p>Se puede acceder y modificar</p>`

//mic.textContent=text
mic.innerHTML=text

const img=document.createElement('img')

img.src='https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800'

document.body.appendChild(img);


const caja=document.createElement('div')

caja.innerHTML="<img src='img/thestocks.jpg'>"
mic.appendChild(caja)
//caja.remove


