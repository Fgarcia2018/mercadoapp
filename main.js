
const btnmenu=document.querySelector('#btn-menu-mobile')
const menuMobile=document.querySelector('.menu-mercado')
const opcAlimentos=document.querySelector('#opc-alimentos')
const opcAseo=document.querySelector('#opc-aseo')
const tablaAlimentos=document.querySelector('.tabla-alimentos')
const tablaAseo=document.querySelector('.tabla-aseo')

// class Producto{
//     constructor(descripcion,unidad,cantidad,comprar,estado){
//         this.descripcion=descripcion
//          this.unidad=unidad
//         this.cantidad=unidad
//         this.comprar=comprar
//         this.estado=estado
//     }
// }


btnmenu.addEventListener('click',mostrarMenuMobile)
opcAlimentos.addEventListener('click',mostrarTablaAlimentos)
opcAseo.addEventListener('click',mostrarTablaAseo)
// listaProductos.push()
let listaAlimentos=[
                    {descripcion:'Arroz',unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Azucar', unidad:'kg', comprar:'Si', estado:'Pendiente'},
                    {descripcion:'Aceite', unidad:'lt', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Atún', unidad:'Un', comprar:'Si', estado:'Pendiente'},                   
                    {descripcion:'Café', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Carne de res', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Carne de cerdo', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Galletas', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Habichuelas', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Jamón', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Mantequilla', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Mazorca', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Milo', unidad:'kg', comprar:'Si',estado:'Pendiente'},                    
                    {descripcion:'Pan Tajado', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Pescado', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Queso', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Salchicha Ranchera', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                    {descripcion:'Sal', unidad:'kg', comprar:'Si', estado:'Pendiente'},  

                    ]

 let listaAseo=[
                      {descripcion:'Papel Cocina',unidad:'kg', comprar:'Si',estado:'Pendiente'},
                      {descripcion:'Servilletas', unidad:'kg', comprar:'Si', estado:'Pendiente'},
                      {descripcion:'Limpido', unidad:'lt', comprar:'Si',estado:'Pendiente'},
                      {descripcion:'Jabón PURO', unidad:'Un', comprar:'Si', estado:'Pendiente'},                   
                      {descripcion:'Jabón COCO', unidad:'kg', comprar:'Si',estado:'Pendiente'},
                      {descripcion:'Jabón líquido', unidad:'kg', comprar:'Si',estado:'Pendiente'},                    
  
                      ]                    

                   
function mostrarListaArticulos(lista,nomLista){ 
  let datosTabla

  if(nomLista==='alimentos'){
     datosTabla=document.querySelector('#tbody-alimentos')
  }else{
     datosTabla=document.querySelector('#tbody-aseo')
  }
  for(producto of lista){

    const fila=document.createElement('tr')  
    const encabezadoDescripcion=document.createElement('th')
    const encabezadoComprar=document.createElement('th')
    const encabezadoEstado=document.createElement('th')
    const celdaDescripcion=document.createElement('td')    
    const celdaComprar=document.createElement('td')
    const celdaEstado=document.createElement('td')
  

    datosTabla.appendChild(fila)
    fila.appendChild(encabezadoDescripcion)
    fila.appendChild(celdaDescripcion)    
    fila.appendChild(encabezadoComprar)
    fila.appendChild(celdaComprar)
    fila.appendChild(encabezadoEstado)
    fila.appendChild(celdaEstado)
  

    encabezadoDescripcion.innerText='Descripción'
    celdaDescripcion.innerText=producto.descripcion     
    encabezadoComprar.innerText='Comprar'
    celdaComprar.innerText=producto.comprar
    encabezadoEstado.innerText='Estado'
    celdaEstado.innerText=producto.estado    
    
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
        }else{
          celdaComprar.innerText='Si'          
        }        
      })
  }
}

function mostrarTablaAlimentos(){
    const isTablaAlimentos=tablaAlimentos.classList.contains('inactive')
    if (isTablaAlimentos){
        tablaAlimentos.classList.remove('inactive')
        tablaAseo.classList.add('inactive')
        menuMobile.classList.add('inactive')
    }
}

function mostrarTablaAseo(){  
      const istablaAseo=tablaAseo.classList.contains('inactive')
      if (istablaAseo){
          mostrarListaArticulos(listaAseo,'aseo')
          tablaAseo.classList.remove('inactive')
          tablaAlimentos.classList.add('inactive')
          menuMobile.classList.add('inactive')
         
      } 
 }

function mostrarMenuMobile(){
    menuMobile.classList.toggle('inactive')
    tablaAlimentos.classList.add('inactive')
    tablaAseo.classList.add('inactive')
}

window.addEventListener('load',mostrarListaArticulos(listaAlimentos,'alimentos'))