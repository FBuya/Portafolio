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



const card = document.querySelector(".project");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    // Posición del mouse dentro de la tarjeta
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Centro de la tarjeta
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Diferencia respecto al centro
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.02)
    `;
});

card.addEventListener("mouseleave", () => {

    card.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
    `;
});