const datosTabla=document.querySelector('tbody')

// class Producto{
//     constructor(descripcion,unidad,cantidad,comprar,estado){
//         this.descripcion=descripcion
//          this.unidad=unidad
//         this.cantidad=unidad
//         this.comprar=comprar
//         this.estado=estado
//     }
// }


// listaProductos.push()
let listaProductos=[
                    {descripcion:'Arroz',
                     unidad:'kg',
                     comprar:'Si',
                     estado:'Pendiente'
                    },
                    {descripcion:'Azucar',
                     unidad:'kg',
                     comprar:'Si',
                     estado:'Pendiente'
                    },
                    {descripcion:'Aceite',
                     unidad:'lt',
                     comprar:'Si',
                     estado:'Pendiente'
                    },
                    {descripcion:'Atún',
                    unidad:'Un',
                    comprar:'Si',
                    estado:'Pendiente'
                    },
                    {descripcion:'Sal',
                    unidad:'kg',
                    comprar:'Si',
                    estado:'Pendiente'
                    },
                    {descripcion:'Café',
                    unidad:'kg',
                    comprar:'Si',
                    estado:'Pendiente'
                    }
                    ]

                   
function mostrarListaProductos(listaProductos){ 
  for(producto of listaProductos){

    const fila=document.createElement('tr')  
    const encabezadoDescripcion=document.createElement('th')
    const encabezadoUnidad=document.createElement('th')
    const encabezadoComprar=document.createElement('th')
    const encabezadoEstado=document.createElement('th')
    const celdaDescripcion=document.createElement('td')
    const celdaUnidad=document.createElement('td')
    const celdaComprar=document.createElement('td')
    const celdaEstado=document.createElement('td')

    datosTabla.appendChild(fila)
    fila.appendChild(encabezadoDescripcion)
    fila.appendChild(celdaDescripcion)
    fila.appendChild(encabezadoUnidad)
    fila.appendChild(celdaUnidad)
    fila.appendChild(encabezadoComprar)
    fila.appendChild(celdaComprar)
    fila.appendChild(encabezadoEstado)
    fila.appendChild(celdaEstado)

    encabezadoDescripcion.innerText='Descripción'
    celdaDescripcion.innerText=producto.descripcion
    encabezadoUnidad.innerText='Unidad'
    celdaUnidad.innerText=producto.unidad
    encabezadoComprar.innerText='Comprar'
    celdaComprar.innerText=producto.comprar
    encabezadoEstado.innerText='Estado'
    celdaEstado.innerText=producto.estado
    celdaEstado.style.backgroundColor='red'      
    
      celdaEstado.addEventListener('click',()=>{
        if (celdaEstado.innerText==='Pendiente'){
          celdaEstado.innerText='OK'
          celdaEstado.style.backgroundColor="green"
        }else{
          celdaEstado.innerText='Pendiente'
          celdaEstado.style.backgroundColor="red"
        }        
      })

      celdaComprar.addEventListener('click',()=>{
        if (celdaComprar.innerText==='Si'){
          celdaComprar.innerText='No'         
        }else{
          celdaComprar.innerText='Si'          
        }        
      })
  }
}

window.addEventListener('load',mostrarListaProductos(listaProductos))