let materiales=['plumilla', 'tinta', 'regla', 'lapiz', 'borrador']

//Agregan o eliminan un elemnto al final del arreglo
materiales.push('trama')
materiales.pop()

//Agregan o eliminan un elemnto al principio del arreglo
materiales.unshift('papel')
materiales.shift()

//Eliminar un elemto intermedio
materiales.splice(3,1)


console.log(materiales)

materiales.forEach(function(elemento, index , array){
    console.log(`posicion ${index} elemento ${elemento}`)
})

console.log(materiales[2])
console.log(materiales.length)
console.log(materiales[materiales.length-1])

let aprendices=[]

/*let seguir=true

while (seguir==true) {
    aprendices.push(window.prompt('Ingrese el nombre del aprendiz'))

    seguir=window.confirm('desea ingresar otro aprendiz')
    
}

console.log(aprendices)*/

//metodos de busqueda

let filtro=aprendices.filter(aprendices=>aprendices=='cristian')

console.log(filtro)

let busqueda=aprendices.find(aprendices=>aprendices=='andres')

console.log(busqueda)

let aprendices2=[{primernombre:'Cristian', primerapellido:'Pores'},{primernombre:'Juan', primerapellido:'Moya'}]

console.log(aprendices2)

let nombrecompleto=aprendices2.map(function(el,i, ar){
    return `${el.primernombre} ${el.primerapellido}`
})

console.log(nombrecompleto)

