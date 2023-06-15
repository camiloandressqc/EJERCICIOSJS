
// ''

function agregarDatos(){

    const dato = prompt("Ingrese un dato: ");

    if(dato){
        
        const datosDiv = document.getElementById('datos');

        const nuevoDato = document.createElement('section');
        nuevoDato.textContent = dato;

        console.log(dato);

        datosDiv.appendChild(nuevoDato);

    }

}


function validarContrasenia(){

    const contenidoPass = document.getElementById('inputPass').value;

    if(contenidoPass == "Osito_Cariñosito"){

        const nuevaPass = document.createElement('h3');
        nuevaPass.setAttribute("class", "success");

        nuevaPass.textContent = "¡Bienvenido! Has ingresado correctamente."

    }else{

        const nuevaPass = document.createElement('h3');
        nuevaPass.setAttribute("class", "danger");

        nuevaPass.textContent = "¡Error! No has ingresado la contraseña correcta."

    }

}