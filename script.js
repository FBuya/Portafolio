const boton = document.getElementById("claro-oscuro");

// Recuperar modo guardado
if (localStorage.getItem("modo-oscuro") === "true") {
    document.body.classList.add("modo-oscuro");
}

// Actualizar texto del botón según el modo actual
function actualizarBoton() {
    if (document.body.classList.contains("modo-oscuro")) {
        boton.textContent = "☀️ Modo claro";
    } else {
        boton.textContent = "🌙 Modo oscuro";
    }
}

// Estado inicial
actualizarBoton();

// Cambiar modo
boton.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    localStorage.setItem(
        "modo-oscuro",
        document.body.classList.contains("modo-oscuro")
    );

    actualizarBoton();
});