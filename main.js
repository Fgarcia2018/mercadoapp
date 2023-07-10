
// Declaracion de variables para manipular el DOM
const btnmenu=document.querySelector('#btn-menu-mobile')
const menuMobile=document.querySelector('.menu-mercado')
const opcAlimentos=document.querySelector('#opc-alimentos')
const opcAseo=document.querySelector('#opc-aseo')
const listInstructions=document.querySelector('.instrucciones')
const opcAgregarArticulo=document.querySelector('#opc-agregar-articulo')
const tablaAlimentos=document.querySelector('.tabla-alimentos')
const tablaAseo=document.querySelector('.tabla-aseo')
const tablaAgregarArticulo=document.querySelector('.tabla-agregar-articulo')
const butttonEnviar=document.querySelector('#agregar')
const formulario=document.querySelector('#formulario')
const buttonActualizar=document.querySelector('#actualizar')
const form=document.querySelector('form')

// Se guarda la url de la api con la lista de articulos
const API='apiArticulos.php'

// Se declaran arrays para almacenar datos de la api
let listaArticulos=[]
let listaAlimentos=[]
let listaAseo=[]

// Codigo implementado el objeto XMLHttpRequest()

// let ajax=new XMLHttpRequest()
// ajax.open('GET','apiArticulos.php')
//         ajax.onload=function(){
//             if(ajax.status==200){                   
//                    listaArticulos=JSON.parse(ajax.responseText)  
//                     listaAlimentos=listaArticulos.filter((listaArticulos)=>{
//                     return listaArticulos.categoria==='alimento'
//                   })
//                   listaAseo=listaArticulos.filter((listaArticulos)=>{
//                     return listaArticulos.categoria==='aseo'
//                   })
//                   mostrarListaArticulos(listaAlimentos,'alimentos')  
//                   mostrarListaArticulos(listaAseo,'aseo')
                                
//                 }else{
//                     document.querySelector('#respuesta').innerHTML='Petición erronéa'
//                 }
//         }      
// ajax.send()


// Funcion para implementar Fetch (para realizar peticiones asincronas con promesas, pero codigo más simple)
function fetchData(API){
  return fetch(API)
}

// Se llama la funcion fetchData para almacenar los datos de la api en los correspondientes arrays
// fetchData(API)
// .then(response=>response.json())
// .then(articulo=>{
//   listaArticulos=articulo 
//   listaAlimentos=listaArticulos.filter((listaArticulos)=>{
//         return listaArticulos.categoria==='alimento'
//       })
//       listaAseo=listaArticulos.filter((listaArticulos)=>{
//         return listaArticulos.categoria==='aseo'
//       })    
//       mostrarListaArticulos(listaAlimentos,'alimentos')  
//       mostrarListaArticulos(listaAseo,'aseo') }  
//       )

// Codigo implementando async - await
 async function fetchingData(){
    // Se guarda la respuesta enviada por el servidor
      const datosFetched=await fetchData(API)
      // Se obtiene el contenido JSON
      listaArticulos= await datosFetched.json()
      // Se filtran los articulos del array listaArticulos que pertenecen a la categoria alimento
      listaAlimentos=listaArticulos.filter((listaArticulos)=>{
                return listaArticulos.categoria==='alimento'
              })  
      // Se filtran los articulos del array listaArticulos que pertenecen a la categoria aseo        
      listaAseo=listaArticulos.filter((listaArticulos)=>{
                        return listaArticulos.categoria==='aseo'
                      })    
      //Se muestran los articulos dependiendo de la categoria. 
      mostrarListaArticulos(listaAlimentos,'alimentos')  
      mostrarListaArticulos(listaAseo,'aseo')
 }        

 fetchingData()
      

// Se agregan los escuchadores de eventos
btnmenu.addEventListener('click',mostrarMenuMobile)
opcAlimentos.addEventListener('click',mostrarTablaAlimentos)
opcAseo.addEventListener('click',mostrarTablaAseo)    
opcAgregarArticulo.addEventListener('click',mostrarFormularioArticulo)    
buttonActualizar.addEventListener('click',recargarPagina)              

//Se muestran en una tabla los articulos dependiendo de la categoria, se pasan como argumentos el array y nombre de categoria del articulo
function mostrarListaArticulos(lista,nomLista){ 
  let datosTabla

  if(nomLista==='alimentos'){
     datosTabla=document.querySelector('#tbody-alimentos')
  }else{
     datosTabla=document.querySelector('#tbody-aseo')
  }
  for(producto of lista){

    if (producto.comprar===0){
      producto.comprar='No'
    }
    
    // Se crea una fila por cada elemento del array
    const fila=document.createElement('tr')  
    // se agregan los encabezdos o titulos de la tabla
    const encabezadoDescripcion=document.createElement('th')
    const encabezadoComprar=document.createElement('th')
    const encabezadoEstado=document.createElement('th')
    // Se agregan las celdas para que se muestren los datos del array
    const celdaDescripcion=document.createElement('td')    
    const celdaComprar=document.createElement('td')
    const celdaEstado=document.createElement('td')
  
    // Se asocian los encabezados y celdad a la fila
    datosTabla.appendChild(fila)
    fila.appendChild(encabezadoDescripcion)
    fila.appendChild(celdaDescripcion)    
    fila.appendChild(encabezadoComprar)
    fila.appendChild(celdaComprar)
    fila.appendChild(encabezadoEstado)
    fila.appendChild(celdaEstado)
  
    // Se guardan los datos del array en su respectiva celda
    encabezadoDescripcion.innerText='Descripción'
    celdaDescripcion.innerText=producto.descripcion     
    encabezadoComprar.innerText='Comprar'
    celdaComprar.innerText=producto.comprar
    celdaComprar.style.color='red' 
    encabezadoEstado.innerText='Estado'
    celdaEstado.innerText=producto.estado
    celdaEstado.style.color='red'    
    
    // Se agregan escuchadores del evento click para que se muestre un color y un icono dependiendo de lo que elija el usuario 
      celdaEstado.addEventListener('click',()=>{
        if (celdaEstado.innerText==='Pendiente'){
          celdaEstado.innerHTML="<img src='assets/check.png'>"
        }else{
          celdaEstado.innerText='Pendiente'
        }        
      })
      celdaComprar.addEventListener('click',()=>{
        if (celdaComprar.innerText==='Si'){
          celdaComprar.innerText='No'  
          celdaComprar.style.color='red'          
        }else{
          celdaComprar.innerText='Si' 
          celdaComprar.style.color='green'         
        }        
      })
  }
}


// Con las dos siguientes funciones se manipula el DOM dependiendo de la consulta seleccionada por el usuario
function mostrarTablaAlimentos(){
    const isTablaAlimentos=tablaAlimentos.classList.contains('inactive')
    if (isTablaAlimentos){    
        tablaAlimentos.classList.remove('inactive')
        listInstructions.classList.remove('inactive')
        tablaAseo.classList.add('inactive')
        menuMobile.classList.add('inactive')
        tablaAgregarArticulo.classList.add('inactive')
    }else{
      menuMobile.classList.add('inactive')
    }
}

function mostrarTablaAseo(){  
      const istablaAseo=tablaAseo.classList.contains('inactive')
      if (istablaAseo){
       
          tablaAseo.classList.remove('inactive')
          listInstructions.classList.remove('inactive')
          tablaAlimentos.classList.add('inactive')
          menuMobile.classList.add('inactive')
          tablaAgregarArticulo.classList.add('inactive')
         
      } else{
        menuMobile.classList.add('inactive')
      }
 }

 function mostrarFormularioArticulo(){  
  const isFormularioArticulo=tablaAgregarArticulo.classList.contains('inactive')
  if (isFormularioArticulo){
      
      tablaAgregarArticulo.classList.remove('inactive')
      tablaAseo.classList.add('inactive')
      tablaAlimentos.classList.add('inactive')
      menuMobile.classList.add('inactive')
      listInstructions.classList.add('inactive')
     
  } else{
    menuMobile.classList.add('inactive')
  }
}
function mostrarMenuMobile(){
    menuMobile.classList.toggle('inactive')
}


//Se validan si hay datos en los input del formulario para adicionar articulo
function validarCampos(){
  if (formulario.elements.descripcion.value===''){
    return false
  }else{
    return true
  }
}

function recargarPagina(){
  document.location.reload()
}

// Codigo para enviar datos a la api, implementando el objeto XMLHttpRequest
butttonEnviar.onclick=e=>{
    console.log( e );     
    if (!validarCampos()){
      document.querySelector('#respuesta').innerHTML='Hay Campos vacios'
    }else{
      let fd=new FormData(formulario) 
      let enviarDatos=new XMLHttpRequest()
      enviarDatos.open('POST','add.php')
      enviarDatos.onload=function(){
          if (enviarDatos.status==200){
            document.querySelector('#respuesta').innerHTML=JSON.parse(enviarDatos.responseText)  
          }       
    }          
    enviarDatos.send(fd)
    }
    
}

