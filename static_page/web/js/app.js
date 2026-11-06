const boton = document.getElementById("btnSaludar");

boton.addEventListener("click", function() {

    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "¡Excelente! Mi aplicación funciona correctamente.";

});