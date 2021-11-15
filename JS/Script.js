function soloLetras(objeto){
    objeto.value = objeto.value.replace(/[^\a-zA-Z, ]/g,'');
}

function ValidarDatos() {
    let NombreCom = document.getElementById('NombreCompleto').value;
    let Correo = document.getElementById('Email').value;
    let Tel = document.getElementById('Telefono').value;

    if (NombreCom == "") {
        Swal.fire({
            title: 'Debe ingresar el nombre completo',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    else if (Correo == ""){
        Swal.fire({
            title: 'Debe ingresar un correo electrónico',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    else if (Tel == ""){
        Swal.fire({
            title: 'Debe ingresar el télefono',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    
    else {

    }

}

function ObtenerDatos() {
    var Nombre = document.getElementById('NombreCompleto').value;
    var Email = document.getElementById('Email').value;
    var Telefono = document.getElementById('Telefono').value;

    if (Nombre == "" || Email == "" || Telefono == "") {
      $('#ModalAgendar').modal('hide');
    }

    else{
      $('#ModalAgendar').modal('show');
    }

    document.getElementById('NombreCompletoObtenido').value = Nombre;
    document.getElementById('EmailObtenido').value = Email;
    document.getElementById('TelefonoObtenido').value = Telefono;    
}

