document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formularioContacto");

    const mensajeExito = document.getElementById("mensajeExito");

    const nombre = document.getElementById("nombre");
    const correo = document.getElementById("correo");
    const telefono = document.getElementById("telefono");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");


    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        let formularioValido = true;


        // esto es para la validacion del nombre

        if (nombre.value.trim().length < 3) {

            nombre.classList.add("is-invalid");
            nombre.classList.remove("is-valid");

            formularioValido = false;

        } else {

            nombre.classList.remove("is-invalid");
            nombre.classList.add("is-valid");

        }


        // esto es para la validacion del correo

        const expresionCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresionCorreo.test(correo.value.trim())) {

            correo.classList.add("is-invalid");
            correo.classList.remove("is-valid");

            formularioValido = false;

        } else {

            correo.classList.remove("is-invalid");
            correo.classList.add("is-valid");

        }


        // esto es para la validacion del telefono

        const expresionTelefono =
            /^[0-9]{10}$/;

        if (!expresionTelefono.test(telefono.value.trim())) {

            telefono.classList.add("is-invalid");
            telefono.classList.remove("is-valid");

            formularioValido = false;

        } else {

            telefono.classList.remove("is-invalid");
            telefono.classList.add("is-valid");

        }


        // con esto validamos el asunto

        if (asunto.value.trim().length < 3) {

            asunto.classList.add("is-invalid");
            asunto.classList.remove("is-valid");

            formularioValido = false;

        } else {

            asunto.classList.remove("is-invalid");
            asunto.classList.add("is-valid");

        }


        // esta parte se encarga de validar el mensaje

        if (mensaje.value.trim().length < 10) {

            mensaje.classList.add("is-invalid");
            mensaje.classList.remove("is-valid");

            formularioValido = false;

        } else {

            mensaje.classList.remove("is-invalid");
            mensaje.classList.add("is-valid");

        }


        // con se muestra el trsultado final

        if (formularioValido) {

            mensajeExito.classList.remove("d-none");

        } else {

            mensajeExito.classList.add("d-none");

        }

    });


 //con esto limpiamos las validaciones
   

    formulario.addEventListener("reset", function () {

        setTimeout(function () {

            nombre.classList.remove("is-valid", "is-invalid");
            correo.classList.remove("is-valid", "is-invalid");
            telefono.classList.remove("is-valid", "is-invalid");
            asunto.classList.remove("is-valid", "is-invalid");
            mensaje.classList.remove("is-valid", "is-invalid");

            mensajeExito.classList.add("d-none");

        }, 0);

    });

});