document.querySelector("#claro-oscuro").addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");
    localStorage.setItem("modo-oscuro", document.body.classList.contains("modo-oscuro"));
});

if(localStorage.getItem("modo-oscuro") === "true") {
    document.body.classList.add("modo-oscuro");
}
