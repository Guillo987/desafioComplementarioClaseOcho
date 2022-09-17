//MODIFICACIÓN DE NODO TIPO #TEXT CON INFORMACIÓN INGRESADA MEDIANTE PROMPT()
let nombreIngresado = prompt('¿Cuál de nuestras profesionales sos?').toUpperCase();

//MODIFICACIÓN DE ETIQUETA EXISTENTE (SPAN) 
let usuaria = document.getElementById('usuaria');
usuaria.innerText = nombreIngresado;

//CREACIÓN DE UNA ETIQUETA "H2" Y UNA ETIQUETA "P"
let descripcion = document.createElement('h2');
descripcion.innerHTML = '<p>A continuación podrás visualizar la lista de pacientes que se encuentran con tratamiento activo a tu cargo:</p>';

document.body.append(descripcion);

//INCORPORACIÓN DINÁMICA DE OBJETOS EN EL HTML
for (const paciente of PACIENTES) {

//CREACIÓN DE ELEMENTOS "UL"
    let contenedor = document.createElement('ul');
    contenedor.innerHTML =

    //CREACIÓN DINÁMICA DE "MAIN" MEDIANTE TEMPLATE LITERAL
        `
    <main>
    <li>Nombre: ${paciente.nombre} </li>
    <li>Apellido: ${paciente.apellido}</li>
    <li>Edad: ${paciente.edad}</li>
    <li>Teléfono: ${paciente.telefono}</li>
    <li>Medio de contacto: ${paciente.contacto}</ñ>
    <li>Medio de pago: ${paciente.pago}</li>
    <br>  
    </main>
    
        `
    document.body.appendChild(contenedor);
};